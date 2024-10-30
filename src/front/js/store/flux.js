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
			properties: [],
			filtros: null
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

			registro: async (first_name, last_name, email, type_user, password) => {
				// Enviando datos al backend para el registro
				const resp = await fetch(process.env.BACKEND_URL + "api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						type_user: type_user,
						password: password
					})
				});

				const data = await resp.json();

				// Manejo de la respuesta
				if (resp.ok) {

					localStorage.setItem("token", data.token);
					localStorage.setItem("type_user", data.user.type_user);
					setStore({
						token: data.token,
						user: data.user,
						type_user: data.user.type_user

					});

					toast.success("Registro exitoso 🎉");
				} else {
					toast.error(data.msg || "Registro fallido 🙅🏽");
				}
			},

			publishProperty: async (name, price, address, files, stay, description, rules, laundry,
				parking, air_condition, is_cancelable, floor_type, rooms_number, restrooms, beds, imageUrl
			) => {

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
						files: imageUrl,
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
						beds: beds,
						imageUrl
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

				const store = getStore();

				if (store.filtros) {
					const query = new URLSearchParams(store.filtros).toString();
					const response = await fetch(process.env.BACKEND_URL + 'api/property?' + query)
					const data = await response.json()
					setStore({
						properties: data
					})
					return
				}

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
							"Authorization": "Bearer " + localStorage.getItem("token")
						}
					});


					const data = await resp.json();
					console.log(data)
					if (resp.ok) {
						setStore({ user: data });
						return true
					}
					return false
				} catch (error) {
					console.log(error)
					return false
				}
			},

			setFiltros: async (filtros) => {

				const actions = getActions();

				const cleanFilter = (key, value, defaultValue) => {
					if (value === defaultValue) {
						delete filtros[key];
					} else {
						filtros[key] = value;
					}
				};

				if (filtros.minPrice) {
					filtros.minPrice = filtros.minPrice.replace('$', '');
				} else {
					delete filtros.minPrice;
				}

				if (filtros.maxPrice) {
					filtros.maxPrice = filtros.maxPrice.replace('$', '');
				} else {
					delete filtros.maxPrice;
				}

				cleanFilter('rooms_number', filtros.rooms_number, 0);
				cleanFilter('beds', filtros.beds, 0);
				cleanFilter('restrooms', filtros.restrooms, 0);
				cleanFilter('laundry', filtros.laundry, false);
				cleanFilter('parking', filtros.parking, false);
				cleanFilter('air_condition', filtros.air_condition, false);
				cleanFilter('is_cancelable', filtros.is_cancelable, false);

				setStore({ filtros: filtros });

				await actions.loadProperties();
			},

			cleanFiltros: () => {
				setStore({ filtros: null });
			},
			updateUser: async (user) => {

				const resp = await fetch(process.env.BACKEND_URL + "api/updateUser", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + getStore().token
					},
					body: JSON.stringify(user),

				});
				const data = await resp.json();
				// console.log(data)
				if (resp.ok) {
					toast.success("Update success 🎉")
				} else {
					toast.error("Update failed 🙅🏽")
				}
			}
		}
	};
};

export default getState;
