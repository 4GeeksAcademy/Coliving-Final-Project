import toast, { Toaster } from 'react-hot-toast';



const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: localStorage.getItem("token") || null,
			type_user: null,

			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			properties: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			contactHost: async (guest_name, email, phone, message, budget, hostId) => {
				console.log(hostId)
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/contact", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + getStore().token // Incluir token si es necesario
						},
						body: JSON.stringify({
							guest_name: guest_name,
							email: email,
							phone: phone,
							message: message,
							budget: budget,
							host_id: hostId // ID del host
						})
					});

					if (resp.ok) {
						const data = await resp.json();
						toast.success("Mensaje enviado al host 🎉");
						return data;
					} else {
						toast.error("No se pudo enviar el mensaje 🙅🏽");
					}
				} catch (error) {
					console.error("Error al enviar mensaje al host:", error);
					toast.error("Error al enviar el mensaje 🙅🏽");
				}
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			registro: async (first_name, last_name, type_user, email, password) => {
				// Enviando datos al backend para el registro
				const resp = await fetch(process.env.BACKEND_URL + "api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						type_user: type_user,
						email: email,
						password: password
					})
				});

				const data = await resp.json();


				// Manejo de la respuesta
				if (resp.ok) {
					localStorage.setItem("token", data.token); // Si el backend devuelve un token
					setStore({ user: data.user }); // Si el backend devuelve información del usuario
					toast.success("Registro exitoso 🎉");
				} else {
					toast.error(data.msg || "Registro fallido 🙅🏽");
				}
			},

			publishProperty: async (name, price, address, files, stay, description, rules, laundry, parking, air_conditioning, is_cancelable, floor_type, rooms_number, restrooms, beds) => {
				const response = await fetch(process.env.BACKEND_URL + 'api/property', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + getStore().token
					},
					body: JSON.stringify({
						name: name,
						price: price,
						address: address,
						files: property.imageUrl,
						stay: stay,
						description: description,
						rules: rules,
						laundry: laundry,
						parking: parking,
						air_conditioning: air_conditioning,
						is_cancelable: is_cancelable,
						floor_type: floor_type,
						rooms_number: rooms_number,
						restrooms: restrooms,
						beds: beds
					})
				})
				const data = await response.json()
				toast.success("Publicación exitosa 🎉")
				return data
			},

			loadProperties: async () => {
				const response = await fetch(process.env.BACKEND_URL + 'api/property')
				const data = await response.json()
				setStore({
					properties: data
				})
			},

			login: async (email, password, type_user) => {

				// fetching data from the backend 
				const resp = await fetch(process.env.BACKEND_URL + "api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password,
						type_user: type_user
					})
				});

				const data = await resp.json();

				localStorage.setItem("token", data.token);


				setStore({
					token: data.token,
					user: data.user,

				});

				if (resp.ok) {
					toast.success("Login success 🎉")
				} else {
					toast.error("Login failed 🙅🏽")
				}

				const repsUser = await fetch(process.env.BACKEND_URL + "api/typeuser", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + getStore().token
					},
					body: JSON.stringify({

						type_user: type_user
					})

				});

				const dataUser = await repsUser.json();

				setStore({
					type_user: dataUser.type_user
				});

			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: null });
				toast.success("Logout success 🎉")
			},

			// getUserLogged: async () => {
			// 	const resp = await fetch(process.env.BACKEND_URL + "api/user", {
			// 		headers: {
			// 			"Authorization": "Bearer " + getStore().token
			// 		}
			// 	});

			// 	if (!resp.ok) {
			// 		localStorage.removeItem("token");
			// 		setStore({ token: null });
			// 	} else {
			// 		toast.success("User logged 🎉")
			// 	}

			// 	const data = await resp.json();
			// 	setStore({ user: data.user });

			// }
		}
	};
};

export default getState;
