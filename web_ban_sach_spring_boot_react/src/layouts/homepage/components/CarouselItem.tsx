import React, { useEffect, useState } from "react";
import Book from "../../../models/Book";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { getAllImageOneBook, getOneImageOneBook } from "../../../api/ImageAPI";

interface CarouselItemInterface {
    book: BookModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {


    const bookID: number = props.book.book_id;
    const [listImage, setListImage] = useState<ImageModel[]>([]);

    const [LoadingData, setLoadingData] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        getOneImageOneBook(bookID).then(
            imageData => {
                setListImage(imageData);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }

        )

    }, [] // chỉ gọi 1 lần 
    )





    if (LoadingData) {

        return (
            <div>
                <h1>Đang tải dữ liệu...</h1>
            </div>
        )
    }

    if (error) {

        return (
            <div>
                <h1>Gặp lỗi khi tải dữ liệu: {error}</h1>
            </div>
        )
    }

    let imageData: string = " ";
    if (listImage[0] && listImage[0].image_data) {
        imageData = listImage[0].image_data;
    }

    // console.log(listImage[0]);
    return (
        <div className="row align-items-center justify-content-center py-5 g-4">
            <div className="col-12 col-md-5 text-center">
                <img
                    src={imageData}
                    className="img-fluid"
                    alt="Sách 1"
                    width="150"
                    height="250"
                />
            </div>
            <div className="col-12 col-md-5 text-center text-md-start">
                <h2 className="fw-bold">{props.book.book_name}</h2>
                <p className="text-secondary">
                    {props.book.description}
                </p>
                <a href="/book/1" className="btn btn-primary">
                    Xem chi tiết
                </a>
            </div>
        </div>
    );
}

export default CarouselItem;