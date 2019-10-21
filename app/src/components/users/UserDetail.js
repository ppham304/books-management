import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button, Form, Input, DatePicker } from 'antd';

import * as UsersAction from '../../redux/actions/users';
import * as UsersSelector from '../../redux/selectors/users';

class UserDetail extends Component {
	componentDidUpdate() {
		const { userDetail } = this.props;
		this.username.input.value = userDetail.name || '';
		// this.birthday.input.value = userDetail.birthday || '';
		this.address.input.value = userDetail.address || '';
		this.phoneNumber.input.value = userDetail.phoneNumber || '';
	}

	onAddUser = () => {
		const { addUser } = this.props;
		addUser({
			name: this.username.input.value,
			// birthday: this.birthday.picker.input.value,
			address: this.address.input.value,
			phoneNumber: this.phoneNumber.input.value,
		});
	}

	onUpdateUser = (id) => {
		const { updateUser } = this.props;
		updateUser(id, {
			name: this.username.input.value,
			// birthday: this.birthday.picker.input.value,
			address: this.address.input.value,
			phoneNumber: this.phoneNumber.input.value,
		});
	}

	onDisplayUpdateUser = () => {
		const { getDisplayUpdateUser } = this.props;
		getDisplayUpdateUser();
	}

	onCloseUpdateUser = () => {
		const { getCloseUpdateUser } = this.props;
		getCloseUpdateUser();
	}

	onCloseForm = () => {
		const { getCloseForm } = this.props;
		getCloseForm();
	}

	render() {
		const { userDetail, action } = this.props;
		const current = moment();
		const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
      labelAlign: "left",
    };

  	let header, button1, button2, function1, function2;
  	switch(action) {
  		case "add":
  			header = "Add User";
  			button1 = "Add";
  			button2 = "Cancel";
  			function1 = this.onAddUser.bind(this);
  			function2 = this.onCloseForm.bind(this);
  			break;
  		case "view":
  			header = "Book Detail";
  			button1 = "Update";
  			button2 = "Close";
  			function1 = this.onDisplayUpdateUser.bind(this);
  			function2 = this.onCloseForm.bind(this);
  			break;
  		case "update":
  			header = "Update Book";
  			button1 = "Save";
  			button2 = "Exit Update";
  			function1 = this.onUpdateUser.bind(this, userDetail._id);
  			function2 = this.onCloseUpdateUser.bind(this);
  			break;
  		default:
  			break;
  	}
    return (
      <div className="UserDetail">
        <div className={ action == "view" || action == "add" || action == "update" ? "form-info display-block" : "form-info display-none" }>
        		<div className="form-content">
      				<h1>{ header }</h1>
        			<Form {...formItemLayout}>
        				<Form.Item label="Username">
						      <Input 
						      	placeholder="Username" 
						      	ref={(ref) => { this.username = ref; }} 
						      	disabled={action == 'view'}
						      />
						    </Form.Item>
						    {/*<Form.Item label="Date of birth">
						    	<DatePicker 
						    		ref={(ref) => { this.birthday = ref; }}
						      	disabled={action == 'view'}
						    	/>
						    </Form.Item>*/}
        				<Form.Item label="Address">
						      <Input 
						      	placeholder="Address" 
						      	ref={(ref) => { this.address = ref; }}
						      	disabled={action == 'view'}
						      />
						    </Form.Item>
						    <Form.Item label="Phone number">
						      <Input 
						      	placeholder="Phone number" 
						      	ref={(ref) => { this.phoneNumber = ref; }}
						      	disabled={action == 'view'}
						      />
						    </Form.Item>
        			</Form>
        			<div style={{ float: "right" }}>
	        			<Button className="btn-danger" onClick={ function1 }>{ button1 }</Button>
	        			<Button className="btn-danger" onClick={ function2 }>{ button2 }</Button>
	        		</div>
        		</div>
    		</div>
			</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		userDetail: UsersSelector.getUserDetail(state),
		action: UsersSelector.getAction(state),
	};
}

const mapDispatchToProps = {
	addUser: UsersAction.addUser,
	updateUser: UsersAction.updateUser,
	getDisplayUpdateUser: UsersAction.getDisplayUpdateUser,
	getCloseUpdateUser: UsersAction.getCloseUpdateUser,
	getCloseForm: UsersAction.getCloseForm,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(UserDetail);
