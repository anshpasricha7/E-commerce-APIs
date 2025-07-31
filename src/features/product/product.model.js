export default class ProductModel{
    constructor(id , name, desc ,price, imageUrl , category , sizes){
        
        this.id= id;
        this.name=name;
        this.desc=desc;
        this.imageUrl=imageUrl;
        this.category=category
        this.price=price;
        this.sizes=sizes;
    }
    static GetAll(){
        return products;
    }
    

}
var products = [
    new ProductModel(1, 'Atomic Habits', 'Description for product 1', 100, 'https://m.media-amazon.com/images/I/81F90H7hnML._AC_UY327_FMwebp_QL65_.jpg' , 'Category1' ),
    new ProductModel(2, 'Rich Dad Poor Dad', 'Description for product 2',   200, 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg' , 'Category2',  ['M' , 'XL' , 'S']),
    new ProductModel(3, 'The Subtle Art Of Not Giving A F*ck', 'Description for product 3', 300, 'https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UY327_FMwebp_QL65_.jpg' , 'Category3' ,  ['M' , 'XL' , 'S']),
   ];
