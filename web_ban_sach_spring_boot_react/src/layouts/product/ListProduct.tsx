import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import BookProps from "./components/BookProps";
import { getAllBooks } from "../../api/BookAPI";

 const ListProduct: React.FC = () => {

    const [listBook, setListBook] = useState<BookModel[]>([]);

    const [LoadingData, setLoadingData] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() =>{
        getAllBooks().then(
            bookData =>{
                setListBook(bookData);
                setLoadingData(false);
            }
        ).catch(
            error =>{
                setError(error.message);
            }

        )

    },[] // chỉ gọi 1 lần 
    )

    if(LoadingData) {

        return (
            <div>
                <h1>Đang tải dữ liệu...</h1>
            </div>
        )
    }

     if(error) {

        return (
            <div>
                <h1>Gặp lỗi khi tải dữ liệu: {error}</h1>
            </div>
        )
    }


    return(

        <div className="container ">
            <div className="row mt-4">
               {
                listBook.map((book)=>(
                    <BookProps key={book.book_id}  book = {book}/>

                    )
                )
               }
            </div>
        </div>
    );
 }


 export default ListProduct;