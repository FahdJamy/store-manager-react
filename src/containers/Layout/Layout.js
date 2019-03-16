import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

import './Layout.css';

class Layout extends Component {
		state = { activeItem: 'home' }

		handleItemClick = (e, { name }) => {
			console.log(name)
			this.setState({ activeItem: name })
		}

		render() {
		const { activeItem } = this.state

		return (
			<div className="Layout">
				<Menu pointing secondary color="blue">
					<Menu.Item 
						name='home' 
						active={activeItem === 'home'}
						onClick={this.handleItemClick} 
						>Products</Menu.Item>
					<Menu.Item
						name='createAttendant'
						active={activeItem === 'createAttendant'}
						onClick={this.handleItemClick}
						>Create product</Menu.Item>
					<Menu.Item
						name='createProduct'
						active={activeItem === 'createProduct'}
						onClick={this.handleItemClick}
						>Create product</Menu.Item>
					<Menu.Item
						name='Sales'
						active={activeItem === 'Sales'}
						onClick={this.handleItemClick}
						>Sales</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item
							name='logout'
							active={activeItem === 'logout'}
							onClick={this.handleItemClick}
						/>
					</Menu.Menu>
				</Menu>
					{this.props.children}
			</div>
		)
}}

export default Layout
