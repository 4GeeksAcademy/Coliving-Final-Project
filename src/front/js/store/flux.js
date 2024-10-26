import toast, { Toaster } from 'react-hot-toast';



const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: localStorage.getItem("token") || null,
			type_user: localStorage.getItem("type_user") || null,

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

			publishProperty: async (name, price, address, files, stay, description, rules, laundry, parking, air_condition, is_cancelable, floor_type, rooms_number, restrooms, beds) => {

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
						files: files,
						stay: stay,
						description: description,
						rules: rules,
						laundry: laundry,
						parking: parking,
						air_condition: air_condition,
						is_cancelable: is_cancelable,
						floor_type: floor_type,
						rooms_number: rooms_number,
						restrooms: restrooms,
						beds: beds
					})
				})
				const data = await response.json()

				// setStore({
				// 	token: data.token,
				// 	user: data.user,
				// 	type_user: data.user.type_user

				// });

				if (response.ok) {
					toast.success("Publicación exitosa 🎉")
				} else {
					toast.error("Publicación fallida 🙅🏽")
				}
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
				localStorage.setItem("type_user", data.user.type_user);


				setStore({
					token: data.token,
					user: data.user,
					type_user: data.user.type_user

				});

				if (resp.ok) {
					toast.success("Login success 🎉")
				} else {
					toast.error("Login failed 🙅🏽")
				}



			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: null });
				toast.success("Logout success 🎉")
			},

			getUserLogged: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/user", {
						headers: {
							"Authorization": "Bearer " + getStore().token
						}
					});


					const data = await resp.json();
					console.log(data)
					setStore({ user: data });
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			}
		}
	};
};

export default getState;
