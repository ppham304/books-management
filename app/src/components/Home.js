import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Switch, Route } from "react-router-dom";

import WelcomePage from './welcome/WelcomePage';
import Users from './users/Users';
import Books from './books/Books';

class Home extends Component {
	changeState = (position) => {
		this.props.history.push(position);
	}

	selectedKeys = (path) => {
		switch(path) {
			case "/home":
				return 'home';
			case "/home/users":
				return 'user';
			case "/home/books":
				return 'book';
			default:
				return '';
		}
	}

	render() {
    const { location } = this.props;
    return (
      <div className="Home">
      	<Menu 
      		mode="horizontal"
      		selectedKeys={[this.selectedKeys(location.pathname)]}
      	>
					<Menu.Item key="home" onClick={() => this.changeState("/home")}>
						<Icon type="home" />
						Home
					</Menu.Item>
					<Menu.Item key="user" onClick={() => this.changeState("/home/users")}>
						<Icon type="user" />
						Users
					</Menu.Item>
					<Menu.Item key="book" onClick={() => this.changeState("/home/books")}>
						<Icon type="book" />
						Books
					</Menu.Item>
				</Menu>
				<Switch>
					<Route exact path="/home" component={WelcomePage} />
					<Route path="/home/users" component={Users} />
					<Route path="/home/books" component={Books} />
				</Switch>
		  </div>
    );
  }
}

export default Home;
