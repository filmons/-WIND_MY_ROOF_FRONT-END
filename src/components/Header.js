import React from 'react';
import '../assets/Header.css'


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      searchBy: '--Please choose an option--',
    };
  }

    
    
    render() {
        return (
            <div className="Header">
                
               
                <nav className="nav">
                <h1 className="headerTex">Wind My Room</h1>
                <ul>
                    <li className="navItem">
                        <a href="/" className="link">
                        Home
                        </a></li>
                        <li className="navItem">
                         <a href="/Login" className="link">
                        Connexion
                        </a > </li>
                        <li className="navItem">
                            <a href="/SignUp"className="link">
                            Enregistrer
                        </a> </li>
                </ul>
                </nav>
            </div>
        )
    }
}

export default Header;