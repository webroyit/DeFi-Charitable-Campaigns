import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import udLogo from '../resources/images/ud-default-icon.png'

const LoginForm = ({ ud }) => {
	const loginUD = () => {
		ud.loginWithPopup();
	  }
	
	return (
		<div className="container" style={{paddingTop: 40}}>
			<div className="card center " style={{ borderRadius: 30, padding: 15 }}>
				
				<h4> Donation Investment for charitable campaigns </h4>

			</div>
			<div className="card center " style={{ borderRadius: 30, paddingTop: 30 }}>
				<img className="responsive-img small" src={udLogo} width='100' height='100' />
				<h3> Login with Unstoppable </h3>
				<div style={{ paddingBottom: 30 }}>
					<button onClick={loginUD}
					   className="waves-effect waves-light btn-large">Login</button>
				</div>

			</div>
		</div>
	)
}

export default LoginForm