import React, { useEffect, useState } from "react";
import Book from "../../../models/Book";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { getAllImageOneBook } from "../../../api/ImageAPI";

interface BookPropsInterface {
    book: BookModel;
}

const BookProps: React.FC<BookPropsInterface> = (props) => {


    const bookID:number = props.book.book_id;
     const [listImage, setListImage] = useState<ImageModel[]>([]);

    const [LoadingData, setLoadingData] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() =>{
        getAllImageOneBook(bookID).then(
            imageData =>{
                setListImage(imageData);
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

    let imageData:string = " ";
    if (listImage[0] && listImage[0].image_data){
        imageData = listImage[0].image_data;
    }

    // console.log(listImage[0]);
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                 <img
                    src={imageData}
                    className="card-img-top"
                    alt={props.book.book_name}
                    style={{ height: '200px' }}
                />
                

                <div className="card-body">
                    <h5 className="card-title">{props.book.book_name}</h5>

                    <p className="card-text">{props.book.description}</p>

                    <div className="price">
                        <span className="original-price">
                            <del>{props.book.original_price}</del>
                        </span>

                        <span className="discounted-price">
                            <strong>{props.book.price}</strong>
                        </span>
                    </div>

                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a
                                href="#"
                                className="btn btn-secondary btn-block"
                            >
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>

                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookProps;