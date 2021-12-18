import React from "react";
import axios from "axios";
import "../assets/login.css";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			role: "",
			errorLogin: false,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleClick = () => {
		const options = {
			email: this.state.email,
			password: this.state.password,
			role: this.state.role,
		};

		axios
			.post("http://localhost:9000/api/login", options, {
				headers: { "content-type": "application/json" },
			})
			.then((data) => {
				// const role = "";
				console.log(data);
				if (data.data.user.role === "visiteur") {
					// role(data.data.user[0].role)
					localStorage.setItem("token", data.data.token);
					toast.success(data.data.message, {
						position: toast.POSITION.TOP_CENTER,
					});
					this.props.history.push("/client");
				} else if (data.data.user.role === "Admin") {
					localStorage.setItem("token", data.data.token);
					toast.success(data.data.message, {
						position: toast.POSITION.TOP_CENTER,
					});
					this.props.history.push("/Admin");
				} else {
					this.setState({
						errorLogin: true,
					});
				}
				// this.props.history.push('/');
			})

			.catch((error) => console.log(error));
	};

	render() {
		return (
			<>
				<section className="loginBody">
					<div className="container">
						<div className="form">
							<h1>Connexion</h1>
							<p className="data">
								<label htmlFor="">Email </label>
								<input name="email" type="text" onChange={this.handleChange} />
							</p>
							<p className="data">
								<label htmlFor="">Mot de passe </label>
								<input
									name="password"
									type="password"
									onChange={this.handleChange}
								/>
							</p>
							<p className="data">
								<label htmlFor="">Role</label>
								<input name="role" type="role" onChange={this.handleChange} />
							</p>
							<p className="buttonsSection">
								<button onClick={this.handleClick}>Connecter</button>
								<Link href="/SignUp" className="link"></Link>
								<button className="siginUpButton">Enregistrer</button>
							</p>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Login;
