
import React, { useEffect, useState } from "react";
import ImageModel from "../../../models/ImageModel";
import { getAllImageOneBook } from "../../../api/ImageAPI";

function Carousel() {

    // Lưu ảnh của 3 cuốn sách
    const [listImage1, setListImage1] = useState<ImageModel[]>([]);
    const [listImage2, setListImage2] = useState<ImageModel[]>([]);
    const [listImage3, setListImage3] = useState<ImageModel[]>([]);

    const [LoadingData, setLoadingData] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        // Lấy ảnh của sách 1
        getAllImageOneBook(1).then(imageData => {
            setListImage1(imageData);
        }).catch(error => {
            setError(error.message);
        });

        // Lấy ảnh của sách 2
        getAllImageOneBook(2).then(imageData => {
            setListImage2(imageData);
        }).catch(error => {
            setError(error.message);
        });

        // Lấy ảnh của sách 3
        getAllImageOneBook(3).then(imageData => {
            setListImage3(imageData);
        }).catch(error => {
            setError(error.message);
        });

        // Đợi cả 3 API tải xong
        Promise.all([
            getAllImageOneBook(1),
            getAllImageOneBook(2),
            getAllImageOneBook(3)
        ]).then(() => {
            setLoadingData(false);
        }).catch(error => {
            setError(error.message);
            setLoadingData(false);
        });

    }, []);

    if (LoadingData) {
        return <h1>Đang tải dữ liệu...</h1>;
    }

    if (error) {
        return <h1>Gặp lỗi khi tải dữ liệu: {error}</h1>;
    }

    // Lấy ảnh đầu tiên của từng sách
    let imageData1: string = "";
    let imageData2: string = "";
    let imageData3: string = "";

    if (listImage1[0] && listImage1[0].image_data) {
        imageData1 = listImage1[0].image_data;
    }

    if (listImage2[0] && listImage2[0].image_data) {
        imageData2 = listImage2[0].image_data;
    }

    if (listImage3[0] && listImage3[0].image_data) {
        imageData3 = listImage3[0].image_data;
    }

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">

                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img
                                    src={imageData1}
                                    className="float-end"
                                    alt="Sách 1"
                                    style={{
                                        width: "150px",
                                        height: "250px",
                                        objectFit: "contain"
                                    }}
                                />
                            </div>
                            <div className="col-7">
                                <h5>Sách 1</h5>
                                <p>Giới thiệu sách nổi bật.</p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img
                                    src={imageData2}
                                    className="float-end"
                                    alt="Sách 2"
                                    style={{
                                        width: "150px",
                                        height: "250px",
                                        objectFit: "contain"
                                    }}
                                />
                            </div>
                            <div className="col-7">
                                <h5>Sách 2</h5>
                                <p>Khám phá những cuốn sách mới.</p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img
                                    src={imageData3}
                                    className="float-end"
                                    alt="Sách 3"
                                    style={{
                                        width: "150px",
                                        height: "250px",
                                        objectFit: "contain"
                                    }}
                                />
                            </div>
                            <div className="col-7">
                                <h5>Sách 3</h5>
                                <p>Những cuốn sách dành cho bạn.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
}

export default Carousel;
