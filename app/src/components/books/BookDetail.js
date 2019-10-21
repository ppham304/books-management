import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';

import * as BooksAction from '../../redux/actions/books';
import * as BooksSelector from '../../redux/selectors/books';

class BookDetail extends Component {
	componentDidUpdate() {
		const { bookDetail } = this.props;
		if(bookDetail.title) {
			this.name.input.value = bookDetail.title;
		}
		if(bookDetail.author) {
			this.author.input.value = bookDetail.author;
		}
	}

	onAddBook = () => {
		const { addBook } = this.props;
		addBook({
			title: this.name.input.value,
			author: this.author.input.value,
		});
	}

	onUpdateBook = (id) => {
		const { updateBook } = this.props;
		updateBook(id, {
			title: this.name.input.value,
			author: this.author.input.value,
		});
	}

	onDisplayUpdateBook = () => {
		const { getDisplayUpdateBook } = this.props;
		getDisplayUpdateBook();
	}

	onCloseUpdateBook = () => {
		const { getCloseUpdateBook } = this.props;
		getCloseUpdateBook();
	}

	onCloseForm = () => {
		const { closeForm } = this.props;
		closeForm();
	}

	render() {
		const { bookDetail, displayAddBookForm, displayBookDetail, action } = this.props;

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
  			header = "Add Book";
  			button1 = "Add";
  			button2 = "Cancel";
  			function1 = this.onAddBook.bind(this);
  			function2 = this.onCloseForm.bind(this);
  			break;
  		case "view":
  			header = "Book Detail";
  			button1 = "Update";
  			button2 = "Close";
  			function1 = this.onDisplayUpdateBook.bind(this);
  			function2 = this.onCloseForm.bind(this);
  			break;
  		case "update":
  			header = "Update Book";
  			button1 = "Save";
  			button2 = "Exit Update";
  			function1 = this.onUpdateBook.bind(this, bookDetail._id);
  			function2 = this.onCloseUpdateBook.bind(this);
  			break;
  		default:
  			break;
  	}
    return (
      <div className="BookDetail">
        <div className={ action != "" ? "form-info display-block" : "form-info display-none" }>
        		<div className="form-content">
      				<h1>{ header }</h1>
        			<Form {...formItemLayout}>
        				<Form.Item label="Name">
						      <Input 
						      	placeholder="Book's name" 
						      	ref={(ref) => { this.name = ref; }} 
						      	disabled={action == 'view'}
						      />
						    </Form.Item>
        				<Form.Item label="Author">
						      <Input 
						      	placeholder="Book's author" 
						      	ref={(ref) => { this.author = ref; }}
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
		bookDetail: BooksSelector.getBookDetail(state),
		displayUpdateBook: BooksSelector.getDisplayUpdateBook(state),
		isAddingBook: BooksSelector.getIsAddingBook(state),
		action: BooksSelector.getAction(state),
		error: BooksSelector.getError(state),
	};
}

const mapDispatchToProps = {
	getListBook: BooksAction.getListBook,
	getBookDetail: BooksAction.getBookDetail,
	getDisplayUpdateBook: BooksAction.getDisplayUpdateBook,
	addBook: BooksAction.addBook,
	updateBook: BooksAction.updateBook,
	closeForm: BooksAction.closeForm,
};

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
)(BookDetail);
