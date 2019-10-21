import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';

import BookDetail from './BookDetail';
import * as BooksAction from '../../redux/actions/books';
import * as BooksSelector from '../../redux/selectors/books';

const { Column } = Table;

class Books extends Component {
	componentDidMount() {
		this.onGetListBook();
	}

	onGetListBook = () => {
		const { getListBook } = this.props;
		getListBook();
	}

	onGetBookDetail = (id) => {
		const { getBookDetail } = this.props;
		getBookDetail(id);
	}

	onDisplayAddBook = () => {
		const { displayAddBook } = this.props;
		displayAddBook();
	}

	onDeleteBook = (id) => {
		const { deleteBook } = this.props;
		deleteBook(id);
	}

	render() {
		const { listBook, displayAddBookForm, displayBookDetail, action } = this.props;
    return (
      <div className="Books">
      	<Button className="btn-success" onClick={ this.onDisplayAddBook }>Add Book</Button>
        <Table bordered dataSource={listBook} rowKey={record => record._id}>
			    <Column 
			    	title="Title" 
			    	dataIndex="title" 
			    	key="title"
			    	render={ (text, record) => <a onClick={ () => this.onGetBookDetail(record._id) }>{text}</a> }
			    />
			    <Column title="Author" dataIndex="author" key="author" />
			    <Column title="Borrower" dataIndex="borrower" key="borrower" />
			    <Column 
			    	title="Action" 
			    	dataIndex="action" 
			    	key="action"
			    	render={ 
			    						(text, record) => 
												<Button 
													className="btn-danger no-margin-y" 
													onClick={() => this.onDeleteBook(record._id) }
												>
														Delete
												</Button>
			    					}
			    />
        </Table>
				<BookDetail show={action == "add"} />
				<BookDetail show={action == "view"} />
			</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		listBook: BooksSelector.getListBook(state),
		action: BooksSelector.getAction(state),
		error: BooksSelector.getError(state),
	};
}

const mapDispatchToProps = {
	getListBook: BooksAction.getListBook,
	displayAddBook: BooksAction.displayAddBook,
	getBookDetail: BooksAction.getBookDetail,
	deleteBook: BooksAction.deleteBook,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Books);
