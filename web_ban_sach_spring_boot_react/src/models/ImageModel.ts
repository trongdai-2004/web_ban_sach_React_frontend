class ImageModel{
    image_id: number;
    image_name?: string;
    laIcon?: boolean;
    image_path?: string;
    image_data?: string;


    constructor(
        image_id: number,
        image_name: string,
        laIcon: boolean,
        image_path: string,
        image_data: string  
    ){
        this.image_id = image_id;
        this.image_name = image_name;
        this.laIcon = laIcon;
        this.image_path = image_path;
        this.image_data = image_data;
    }
}

export default ImageModel;