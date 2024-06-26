const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // if this value is not present, the entry wont be stored inside the database and it would throw an error
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    yearOfPublication: {
        type: Number,   // will pass the epoch time over here
        required: true,
    },
    genre: {
        type: [String],
        required: false,
    },
    issuedBy: {
        type: String,   // this would be the id of the student who has issued this book
        default: null // if this is null, it means the book is not issued to any student and it is available
    },
    issuedAt: {
        type: Number,
        default: null // if this is null, it means the book is not issued
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

// Create a Book Collection instance
const Book = mongoose.model('Book', bookSchema)

// export the book object
module.exports = Book;