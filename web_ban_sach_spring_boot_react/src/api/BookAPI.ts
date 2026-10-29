import React from "react";
import BookModel from "../models/BookModel"
import { my_request } from "./Request";

interface resultInterface{
    result:  BookModel[];
    totalPages: number;
    totalBooks: number;
}

async function getBook(endpoint: string): Promise<resultInterface> {
     const result:BookModel[] = [];


    // xác định endpoint

    
    // gọi hàm request để truy vấn đến endpoint
    const response = await my_request(endpoint);

    // lấy ra json Sách

    const responseData = response._embedded.books;

    console.log(responseData);
    
    // lay thong tin trang

    const totalPages:number = response.page.totalPages;
    const totalBooks:number = response.page.totalElements;


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

    return {result: result, totalPages: totalPages, totalBooks: totalBooks};

}


export async function getAllBooks(pageNow:number): Promise<resultInterface> {
   
    const endpoint: string = `http://localhost:8080/book?sort=bookID,desc&size=8&page=${pageNow}`; 

    return getBook(endpoint);

}

export async function getTop3NewestBooks(): Promise<resultInterface> {
   
    const endpoint: string = "http://localhost:8080/book?sort=bookID,desc&page=0&size=3"; 

    return getBook(endpoint);

}

// http://localhost:8080/book/search/findByBookNameContaining?bookName=tam%20ly


export async function searchBooks(searchKeywords: string): Promise<resultInterface> {
   
    let endpoint: string = `http://localhost:8080/book?sort=bookID,desc&size=8&page=0`; 
    if(searchKeywords !== ''){
       endpoint =`http://localhost:8080/book/search/findByBookNameContaining?sort=bookID,desc&size=8&page=0&bookName=${searchKeywords}`
    }

    return getBook(endpoint);


}

