import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const UpdateContacts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Update Contact</h1>
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
					<Link className="mt-3 w-100 text-center" to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							// onClick={}
						>
							save
						</button>
					</Link>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
