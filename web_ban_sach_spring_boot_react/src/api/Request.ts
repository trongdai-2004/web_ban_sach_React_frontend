
export async function my_request(endpoint:string) {
    // truy vấn đến đường dẫn
    const respone = await fetch(endpoint);

    // nếu trả về lỗi
    if(!respone.ok) {
      throw new Error(`không thể truy cập ${endpoint} `);
    }
    // nếu trả về ok
    return respone.json();
}