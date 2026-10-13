import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import BookProps from "./components/BookProps";
import { getAllBooks } from "../../api/BookAPI";
import { Pagination } from "../utils/Pagination";


const ListProduct: React.FC = () => {

    const [listBook, setListBook] = useState<BookModel[]>([]);

    const [LoadingData, setLoadingData] = useState(true);

    const [error, setError] = useState(null);
    const [pageNow, setPageNow] = useState(1)
    const [totalPage, setTotalPage] = useState(0);
    const [totalBook, setTotalBook] = useState(0);

    useEffect(() => {
        getAllBooks(pageNow - 1).then(
            result => {
                setListBook(result.result);
                setTotalPage(result.totalPages);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }

        )

    }, [pageNow] // chỉ gọi 1 lần 
    )


    const pagination = (page: number) => setPageNow(page)



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


    return (

        <div className="container ">
            <div className="row mt-4 mb-4">
                {
                    listBook.map((book) => (
                        <BookProps key={book.book_id} book={book} />

                    )
                    )
                }
            </div>

            <Pagination pagesNow={pageNow} totalPages={totalPage} pagination={pagination} />
        </div>
    );
}


export default ListProduct;