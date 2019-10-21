import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button, Form, Input, DatePicker, List, Select } from 'antd';

import * as UsersAction from '../../redux/actions/users';
import * as BooksAction from '../../redux/actions/books';
import * as UsersSelector from '../../redux/selectors/users';
import * as BooksSelector from '../../redux/selectors/books';

const { Option } = Select;

class EditBooks extends Component {
	onEditBooks = () => {
		const { getListBook, getDisplayEditBooks } = this.props;
		getListBook();
		getDisplayEditBooks();
	}

	onAddMoreBook = () => {
		const { addMoreBook } = this.props;
		addMoreBook();
	}

	onDeleteBook = (index) => {
		const { deleteBook } = this.props;
		deleteBook(index);
	}

	closeEditBooks = () => {
		const { getCloseForm } = this.props;
		getCloseForm();
	}

	selectBook = (value, index) => {
	  const { listBook } = this.props;
	  const foundItem = listBook.filter((book) => {
	  	return book._id == value;
	  });

	  const { selectedBook } = this.props;
	  selectedBook(foundItem, index);
	}

	onAddBook = () => {
		const { addBooks, userDetail } = this.props;
		let borrowedBooks = [...userDetail.borrowedBooks];
		borrowedBooks.map((book) => {
			if(!book.borrowedDate) {
				book.borrowedDate = new Date().toISOString();
			}
			return borrowedBooks;
		});
		addBooks(userDetail._id, {
			borrowedBooks: userDetail.borrowedBooks,
		});
	}

	render() {
		const { action, userDetail, listBook } = this.props;
		let listBorrowedBook = [];
		if(userDetail.borrowedBooks)
			listBorrowedBook = [...userDetail.borrowedBooks];

		let header, button1, button2, button3, function1, function2, function3;
  	switch(action) {
  		case "view-book":
  			header = "User's Books";
  			button1 = "Add New Book";
  			button2 = "Close";
  			function1 = this.onEditBooks.bind(this);
  			function2 = this.closeEditBooks.bind(this);
  			break;
  		case "edit-book":
  			header = "Edit Books";
  			button1 = "Save";
  			button2 = "Cancel";
  			button3 = "Add More";
  			function1 = this.onAddBook.bind(this);
  			function2 = this.closeEditBooks.bind(this);
  			function3 = this.onAddMoreBook.bind(this);
  			break;
  		default:
  			break;
  	}

  	let clonedListBook = [...listBook];
		const listBookElement = clonedListBook.map((book) => {
			return <Option key={ book._id } value={ book._id }>
								{ book.title }
							</Option>
		});

		return (
      <div className="EditBooks">
        <div className={ action == "view-book" || action == "edit-book" ? "form-info display-block" : "form-info display-none" }>
        	<div className="book-content">
	        	<h1>{ header }</h1>
	        	<List
				      bordered
				      dataSource={listBorrowedBook}
				      renderItem={(item, index) => (
				      	<React.Fragment>
					      	{
					      		action == "view-book"
					      		?
					      			<List.Item>
							          <a>{ item.title }</a>
							        </List.Item>
					      		:
							        <List.Item>
							          <Select 
							          	defaultValue={ item.title }
							          	style={{ width: "100%", marginRight: "10px" }}
							          	onChange={ (value) => this.selectBook(value, index) }
							          >
										      { listBookElement }
										    </Select>
							        	<Button className="btn-danger" onClick={ () => this.onDeleteBook(index) }>Delete</Button>
							        </List.Item>
					      	}
						    </React.Fragment>
				      )}
				    />
	        	<div style={{ float: "right" }}>
	        		<Button 
	        			className={ action == "edit-book" ? "btn-danger display-inline-block" : "btn-danger display-none" }
	        			 onClick={ function3 }
	        		>
	        			{ button3 }
	        		</Button>
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
		listBook: BooksSelector.getListBook(state),
	};
}

const mapDispatchToProps = {
	getCloseForm: UsersAction.getCloseForm,
	getDisplayEditBooks: UsersAction.getDisplayEditBooks,
	getListBook: BooksAction.getListBook,
	addBooks: UsersAction.addBooks,
	addMoreBook: UsersAction.addMoreBook,
	selectedBook: UsersAction.selectedBook,
	deleteBook: UsersAction.deleteBook,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(EditBooks);
