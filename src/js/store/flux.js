const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jan_agenda")
					.then(response => {
						console.log(response);
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson, "respuesta de jason");
						setStore({ contacts: responseAsJson });
						console.log(getStore().contacts, "contacts em el store");
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			setContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jan_agenda", {
					method: "POST",
					body: JSON.stringify(MyInputReciver()),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						console.log("Success: ", JSON.stringify(answerUpload));
					});
			},
			MyInputReciver: () => {
				let myFullName = document.querySelector("#name").value;
				let myEmail = document.querySelector("#email").value;
				let myAddress = document.querySelector("#address").value;
				let myPhone = document.querySelector("#phone").value;
				let newContact = {
					full_name: myFullName,
					email: myEmail,
					agenda_slug: "jan_agenda",
					address: myAddress,
					phone: myPhone
				};
				return newContact;
				console.log(newContact);
			}
			// addNewContact: () =>{

			// }
		}
	};
};

export default getState;
