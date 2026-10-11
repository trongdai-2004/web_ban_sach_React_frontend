
import React, { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import { getTop3NewestBooks } from "../../../api/BookAPI";
import CarouselItem from "./CarouselItem";


const Carousel: React.FC = () => {

 

    
    const [listBook, setListBook] = useState<BookModel[]>([]);

    const [LoadingData, setLoadingData] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() =>{
        getTop3NewestBooks().then(
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
    return (
        <div className="container my-4">
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                {/* Chấm chuyển slide */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner bg-light rounded-3">

                    {/* Slide 1 */}
                    <div className="carousel-item active">
                       <CarouselItem key = {0} book={listBook[0]} />
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <CarouselItem key = {1} book={listBook[1]} />
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <CarouselItem key = {2} book={listBook[2]} />
                    </div>

                </div>

                {/* Nút Previous */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon bg-dark rounded-circle p-3"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                {/* Nút Next */}
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon bg-dark rounded-circle p-3"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
}

export default Carousel;
