import React from "react";
import ImageModel from "../models/ImageModel"
import { my_request } from "./Request";


async function getImageOneBook(endpoint: string): Promise<ImageModel[]> {

    const result:ImageModel[] = [];
   
    // gọi hàm request để truy vấn đến endpoint
    const response = await my_request(endpoint);

    // lấy ra json Sách

    const responseData = response._embedded.images;

    // console.log(responseData);

    for(const key in responseData) {

        result.push({
            image_id: responseData[key].bookID,
            image_name:responseData[key].imageName,
            laIcon: responseData[key].laIcon,
            image_path:responseData[key].imagePath,
            image_data:responseData[key].imageData

     
        })
    }

    return result;


}


export async function getAllImageOneBook(book_id: number): Promise<ImageModel[]> {
     const endpoint:string = `http://localhost:8080/book/${book_id}/listImage`; 
     return getImageOneBook(endpoint);

}

export async function getOneImageOneBook(book_id: number): Promise<ImageModel[]> {
     const endpoint:string = `http://localhost:8080/book/${book_id}/listImage?sort=imageID,asc?page=0&size=1`; 
     return getImageOneBook(endpoint);

}


