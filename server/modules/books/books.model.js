const mongoose = require('mongoose');
const { Schema } = mongoose;

const BooksSchema = new Schema(
	{
		title: String,
		author: String,
		borrower: String,
		deletedAt: {
			type: Date,
			required: false,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: false,
		collection: 'books',
	},
);

module.exports = mongoose.model("BooksModel", BooksSchema);
