class BookModel{
    book_id:number;
    book_name?:string;// có thể bị nulll
    price?:number;
    original_price?:number;
    description?:string;
    quantity?:number;
    author?:string;
    average_rating?:number;
     

    constructor(
        book_id:number,
        book_name?:string,
        price?:number,
        original_price?:number,
        description?:string,
        quantity?:number,
        author?:string,
        average_rating?:number
    ){
        this.book_id=book_id;
        this.book_name=book_name;
        this.price=price;
        this.original_price=original_price;
        this.description=description;
        this.quantity=quantity;
        this.author=author;
        this.average_rating=average_rating;
    }

}

export default BookModel;