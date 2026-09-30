import React from "react";
import BookProps from "./components/BookProps";
import Book from "../../models/Book";
 const List: React.FC = () => {

    const   books: Book[] = [
        {
            id: 1,
            title: "Book 1",
            description: "Description for Book 1",
            originalPrice: 20000,
            price: 15000,
            imageUrl: 'images/books/1.jpg'
        },
        {
            id: 2,
            title: "Book 2",
            description: "Description for Book 2",
            originalPrice: 25000,
            price: 20000,
            imageUrl: "images/books/2.jpg"
        },

         {
            id: 3,
            title: "Book 3",
            description: "Description for Book 3",
            originalPrice: 30000,
            price: 25000,
            imageUrl: "images/books/3.jpg"
        },
         {
            id: 1,
            title: "Book 1",
            description: "Description for Book 1",
            originalPrice: 20000,
            price: 15000,
            imageUrl: "images/books/1.jpg"
        },
        {
            id: 2,
            title: "Book 2",
            description: "Description for Book 2",
            originalPrice: 25000,
            price: 20000,
            imageUrl: "images/books/2.jpg"
        },

         {
            id: 3,
            title: "Book 3",
            description: "Description for Book 3",
            originalPrice: 30000,
            price: 25000,
            imageUrl: "images/books/3.jpg"
        },
        {
            id: 1,
            title: "Book 1",
            description: "Description for Book 1",
            originalPrice: 20000,
            price: 15000,
            imageUrl: "images/books/1.jpg"
        },
        {
            id: 2,
            title: "Book 2",
            description: "Description for Book 2",
            originalPrice: 25000,
            price: 20000,
            imageUrl: "images/books/2.jpg"
        },

         {
            id: 3,
            title: "Book 3",
            description: "Description for Book 3",
            originalPrice: 30000,
            price: 25000,
            imageUrl: "images/books/3.jpg"
        },
         {
            id: 1,
            title: "Book 1",
            description: "Description for Book 1",
            originalPrice: 20000,
            price: 15000,
            imageUrl: "images/books/1.jpg"
        },
        {
            id: 2,
            title: "Book 2",
            description: "Description for Book 2",
            originalPrice: 25000,
            price: 20000,
            imageUrl: "images/books/2.jpg"
        },

         {
            id: 3,
            title: "Book 3",
            description: "Description for Book 3",
            originalPrice: 30000,
            price: 25000,
            imageUrl: "images/books/3.jpg"
        },
        
        {
            id: 2,
            title: "Book 2",
            description: "Description for Book 2",
            originalPrice: 25000,
            price: 20000,
            imageUrl: "images/books/2.jpg"
        },

         {
            id: 3,
            title: "Book 3",
            description: "Description for Book 3",
            originalPrice: 30000,
            price: 25000,
            imageUrl: "images/books/3.jpg"
        },
         {
            id: 1,
            title: "Book 1",
            description: "Description for Book 1",
            originalPrice: 20000,
            price: 15000,
            imageUrl: "images/books/1.jpg"
        },
        {
            id: 2,
            title: "Book 2",
            description: "Description for Book 2",
            originalPrice: 25000,
            price: 20000,
            imageUrl: "images/books/2.jpg"
        },

         {
            id: 3,
            title: "Book 3",
            description: "Description for Book 3",
            originalPrice: 30000,
            price: 25000,
            imageUrl: "images/books/3.jpg"
        },


    ];
    return(
        <div className="container ">
            <div className="row mt-4">
               {
                books.map((book)=>(
                    <BookProps key={book.id}  book = {book}/>

                    )
                )
               }
            </div>
        </div>
    );
 }


 export default List;