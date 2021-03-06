const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			deleteSelector: null,
			UpdateSelector: null,
			indexSelector: null
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
			setContacts: param => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(param),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						getActions().getContacts();
						console.log("Success: ", JSON.stringify(answerUpload));
					});
			},
			editContacts: param => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + getStore().UpdateSelector, {
					method: "PUT",
					body: JSON.stringify(param),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						getActions().getContacts();
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
				console.log(newContact);
				return newContact;
			},
			deleteContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + getStore().deleteSelector, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(answerUpload => {
						getActions().getContacts();
						console.log("Success: Contact deleted");
					})
					.catch(error => {
						console.log("Deleting contact, error status: ", error);
					});
			}
		}
	};
};

export default getState;
