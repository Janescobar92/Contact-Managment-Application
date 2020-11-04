import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	// let MyInputReciver = () => {
	// 	myFullName = document.querySelector("#name").value;
	// 	myEmail = document.querySelector("#email").value;
	// 	myAddress = document.querySelector("#address").value;
	// 	myPhone = document.querySelector("#phone").value;
	// 	let newContact = {
	// 		full_name: myFullName,
	// 		email: myEmail,
	// 		agenda_slug: "jan_agenda",
	// 		address: myAddress,
	// 		phone: myPhone
	// 	};
	// };

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" id="name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" id="email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" id="phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address" id="address" />
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.MyInputReciver()}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
