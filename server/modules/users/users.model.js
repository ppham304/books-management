const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema(
	{
		name: String,
		birthday: Date,
		address: String,
		phoneNumber: String,
		borrowedBooks: [],
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
		collection: 'users',
	},
);

module.exports = mongoose.model("UsersModel", UsersSchema);
