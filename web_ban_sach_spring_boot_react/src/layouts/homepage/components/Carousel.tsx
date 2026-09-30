import React from "react";

function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={"./../../../images/books/1.jpg"} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={"./../../../images/books/2.jpg"} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">

                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={"./../../../images/books/3.jpg"} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );

}

export default Carousel;