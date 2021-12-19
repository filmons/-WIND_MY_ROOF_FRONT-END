import React from "react";
import axios from "axios";
import "../assets/signUp.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prenom: "",
			nom: "",
			email: "",
			role: "",
			password: "",
			errorLogin: false,
			errorFirtName: false,
			errorLastName: false,
			errorEmail: false,
			errorPassword: false,
			errorCity: false,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleClick = () => {
		if (this.state.first_name === "") {
			this.setState({ errorFirtName: true });
		} else {
			this.setState({ errorFirtName: false });
		}
		if (this.state.email === "") {
			this.setState({ errorEmail: true });
		} else {
			this.setState({ errorEmail: false });
		}

		if (this.state.last_name === "") {
			this.setState({ errorLastName: true });
		} else {
			this.setState({ errorLastName: false });
		}
		if (this.state.password === "") {
			this.setState({ errorPassword: true });
		} else {
			this.setState({ errorPassword: false });
		}
		if (this.state.last_name === "") {
			this.setState({ errorLastName: true });
		} else {
			this.setState({ errorLastName: false });
		}
		if (this.state.role === "") {
			this.setState({ errorCity: true });
		} else {
			this.setState({ errorCity: false });
		}
		const options = {
			email: this.state.email,
			password: this.state.password,
			first_name: this.state.prenom,
			last_name: this.state.nom,
			role: this.state.role,
		};
		axios
			.post("http://localhost:9000/api/signup", options, {
				headers: { "content-type": "application/json" },
			})
			.then((data) => {
				//console.log(data)
				toast.success(data.data.message, {
					position: toast.POSITION.TOP_CENTER,
				});
				this.props.history.push("/login");
			})

			.catch((error) => toast.error(error.response.data.message));
		console.log(options);
		// this.props.history.push("/login");
	};

	render() {
		return (
			<>
				<section className="siginUpform">
					<div className="container">
						<div className="form">
							<h1>Enregistrer</h1>
							<p className="data">
								<label htmlFor="">Prénom </label>
								<input
									style={
										this.state.errorFirtName
											? { border: "1px solid red"}
											: { border: "" }
									}
									name="prenom"
									type="text"
									placeholder="Enter first Name"
									id="first_name"
									onChange={this.handleChange}
								/>
							</p>
							<p className="data">
								<label htmlFor="">Nom </label>
								<input name="nom" type="text" onChange={this.handleChange} />
							</p>
							<p className="data">
								<label htmlFor="">Émail </label>
								<input name="email" type="email" onChange={this.handleChange} />
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
								<label htmlFor="">Rôle </label>
								<select name="role" onChange={this.handleChange}>
									<option>Votre Rôle</option>
									<option value="Admin">Admin</option>
									<option value="Visiteur">Visiteur</option>
								</select>
							</p>
							<p>
								<button onClick={this.handleClick}>Inscription</button>
							</p>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default SignUp;
