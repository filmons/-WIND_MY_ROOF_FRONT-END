import React from "react";
import axios from "axios";
import  "../assets/admin.css"

class Admin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}
	getData = async () => {
		const response = await axios.get("http://localhost:9000/api/user/9");
		console.log(response); //to see the user that i feache with the Id
		this.setState({
			data: response.data.result,
		});
	};
	componentDidMount() {
		this.getData();
	}
	deleteToken() {
		localStorage.clear();
		console.log("localstorage", this.localstorage);
	}

	render() {
		return (
			<div className="container_class">
				<div className="logout">
						
						<a onClick={this.deleteToken} href="/">
						Déconnexion
						</a>
					</div>
				<div className="item-card">
					{this.state.data.map((result, i) => {
						return (
							<div className="item" key={i}>
								<span>Bonjour voter Nome est </span>
								<h3> {result.first_name}</h3>
								<h3>{result.nom}</h3>
								<h3>{result.email}</h3>
								<span>vous etes le</span>
								<h3>{result.role}</h3>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Admin;
