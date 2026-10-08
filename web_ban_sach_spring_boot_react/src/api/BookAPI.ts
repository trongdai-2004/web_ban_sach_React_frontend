import React from "react";
import BookModel from "../models/BookModel"
import { my_request } from "./Request";

export async function getAllBooks(): Promise<BookModel[]> {
    const result:BookModel[] = [];


    // xác định endpoint

    const endpoint:string = "http://localhost:8080/book"; 

    // gọi hàm request để truy vấn đến endpoint
    const response = await my_request(endpoint);

    // lấy ra json Sách

    const responseData = response._embedded.books;

    console.log(responseData);

    for(const key in responseData) {

        result.push({
            book_id:responseData[key].bookID,
            book_name:responseData[key].bookName,
            price:responseData[key].price,
            original_price:responseData[key].originalPrice,
            description:responseData[key].Description,
            quantity:responseData[key].quantity,
            author:responseData[key].Author,
            average_rating:responseData[key].averageRating,
     
        })
    }

    return result;

}


