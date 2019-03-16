import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import './Layout.css';

export class Layout extends Component {
	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
	}

	render() {
	const { activeItem } = this.state

	return (
		<div className="Layout">
			<Menu pointing secondary color="teal">
				<NavLink to="/home">
					<Menu.Item 
						name='home' 
						active={activeItem === 'home'}
						onClick={this.handleItemClick}>Products</Menu.Item>
				</NavLink>
				{ this.props.isAdmin ? (
					<NavLink to="/register">
						<Menu.Item
							name='createAttendant'
							active={activeItem === 'createAttendant'}
							onClick={this.handleItemClick}>Create attendant</Menu.Item>
					</NavLink>
					) : null }
				<Menu.Menu position="right">
					<Menu.Item
						name="signIn"
						active={activeItem === 'logout'}
						onClick={this.handleItemClick}>
						<NavLink 
							to="/logout">
							Logout
						</NavLink>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			{this.props.children}
		</div>
	)
}};

export const mapStateToProps = state => {
	return {
		isAdmin: state.user.isAdmin
	}
};

export default connect(mapStateToProps)(Layout);
