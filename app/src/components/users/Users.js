import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';

import UserDetail from './UserDetail';
import EditBooks from './EditBooks';
import * as UsersAction from '../../redux/actions/users';
import * as UsersSelector from '../../redux/selectors/users';

const { Column } = Table;

class Users extends Component {
	componentDidMount() {
		this.onGetListUser();
	}

	onGetListUser = () => {
		const { getListUser } = this.props;
		getListUser();
	}

	onGetUserDetail = (id) => {
		const { getUserDetail } = this.props;
		getUserDetail(id);
	}

	onDeleteUser = (id) => {
		const { deleteUser } = this.props;
		deleteUser(id);
	}

	onDisplayAddUser = () => {
		const { getDisplayAddUser } = this.props;
		getDisplayAddUser();
	}

	onViewBooks = (id) => {
		this.onGetUserDetail(id);
		const { getDisplayViewBooks } = this.props;
		getDisplayViewBooks(id);
	}

	formatDate = (date) => {
		const year = date.substr(0, 4);
		const month = date.substr(5, 2);
		const day = date.substr(8, 2);
		return day + '-' + month + '-' + year;
	}

	render() {
		const { listUser, displayAddUser, action } = this.props;
		const borrowedBookElement = (record) => {
			record.borrowedBook.map((book) => {
				return <a key={ book._id }>{ book.title }</a>
			});
		}
    return (
      <div className="Users">
      	<Button className="btn-success" onClick={ this.onDisplayAddUser }>Add User</Button>
        <Table bordered dataSource={listUser} rowKey={record => record._id}>
			    <Column 
			    	title="Name" 
			    	dataIndex="name" 
			    	key="name"
			    	render={ (text, record) => <a onClick={ () => this.onGetUserDetail(record._id) }>{text}</a> }
			    />
			    <Column 
			    	title="Borrowed Book" 
			    	dataIndex="borrowedBook" 
			    	key="borrowedBook" 
			    	render={ (text, record) => 
				    				record.borrowedBooks.map((item) => {
							    		return <p key={ item._id }>{ item.title }</p>;
							    	})
			    				}
			    />
			    <Column 
			    	title="Borrowed Date" 
			    	dataIndex="borrowedDate" 
			    	key="borrowedDate" 
			    	render={ (text, record) => 
				    				record.borrowedBooks.map((item) => {
							    		return <p key={ item._id }>{ this.formatDate(item.borrowedDate) }</p>;
							    	})
			    				}
			    />
			    <Column 
			    	title="Action" 
			    	dataIndex="action" 
			    	key="action"
			    	render={ 
			    						(text, record) => 
			    							<React.Fragment>
													<Button 
														className="btn-danger no-margin-y" 
														onClick={ () => this.onDeleteUser(record._id) }
													>
															Delete
													</Button>
													<Button 
														className="btn-danger no-margin-y" 
														onClick={ () => this.onViewBooks(record._id) }
													>
															Edit Books
													</Button>
												</React.Fragment>
			    					}
			    />
        </Table>
        <UserDetail show={action == "add" || action == "update"} />
        <EditBooks show={action == "view-book" || action == "edit-book"} />
			</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		listUser: UsersSelector.getListUser(state),
		displayAddUser: UsersSelector.getDisplayAddUser(state),
		action: UsersSelector.getAction(state),
		error: UsersSelector.getError(state),
	};
}

const mapDispatchToProps = {
	getListUser: UsersAction.getListUser,
	getUserDetail: UsersAction.getUserDetail,
	getDisplayAddUser: UsersAction.getDisplayAddUser,
	getDisplayViewBooks: UsersAction.getDisplayViewBooks,
	deleteUser: UsersAction.deleteUser,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Users);
