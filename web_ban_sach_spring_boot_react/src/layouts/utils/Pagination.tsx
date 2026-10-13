import React from "react";


interface PaginationInterface {
    pagesNow: number;
    totalPages: number;
    pagination: any;
}

export const Pagination: React.FC<PaginationInterface> = (props) => {


    const listPage = [];

    if (props.pagesNow === 1) {
        listPage.push(props.pagesNow);
        if (props.totalPages >= props.pagesNow + 1) {
            listPage.push(props.pagesNow + 1);
        }
        if (props.totalPages >= props.pagesNow + 2) {
            listPage.push(props.pagesNow + 2);
        }
    } else if (props.pagesNow > 1) {

        // trang - 2
        if (props.pagesNow >= 3) {
            listPage.push(props.pagesNow - 2);
        }
        // trang - 1
        if (props.pagesNow >= 2) {
            listPage.push(props.pagesNow - 1);
        }

        // ban than no

        listPage.push(props.pagesNow);

        // trang + 1
        if (props.totalPages >= props.pagesNow + 1) {
            listPage.push(props.pagesNow + 1);

        }
        // trang + 2
        if (props.totalPages >= props.pagesNow + 2) {
            listPage.push(props.pagesNow + 2);

        }

    }




  
    return (
        <nav aria-label="Pagination">
            <ul className="pagination">

                <li className="page-item">
                    <button
                        type="button"
                        className="page-link"
                        onClick={() => props.pagination(1)}
                    >
                        Trang Đầu
                    </button>
                </li>

                {listPage.map(page => (
                    <li
                        key={page}
                        className={
                            "page-item" +
                            (props.pagesNow === page ? " active" : "")
                        }
                    >
                        <button
                            type="button"
                            className="page-link"
                            onClick={() => props.pagination(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                <li className="page-item">
                    <button
                        type="button"
                        className="page-link"
                        onClick={() => props.pagination(props.totalPages)}
                    >
                        Trang Cuối
                    </button>
                </li>

            </ul>
        </nav>
    );
};



