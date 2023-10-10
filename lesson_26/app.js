
class ProductsService {
    constructor(url){
        this.url = url;
    }

    getOneProduct(id){  
        const oneProductUrl = `${this.url}/${id}`; 
        fetch(oneProductUrl).then(res => res.json()).then(console.log);
    }
    searchByKeyword(){
        const searchProdUrl = `${this.url}/search?q=phone`;
        fetch(searchProdUrl).then(res => res.json()).then(console.log);
    }
    prodsTitlePrice(){
        const specificData = `${this.url}?limit=0&select=title,price`;
        fetch(specificData).then(res => res.json()).then(console.log);
    }
    limitQuantityOfProds(){
        const limitUrl = `${this.url}?limit=2`;
        fetch(limitUrl).then(res => res.json()).then(console.log);
    };
    limitAndSpecificDataOfProd(){
        const limitSkipData = `${this.url}?limit=15&skip=2&select=brand,category,price`;
        fetch(limitSkipData).then(res => res.json()).then(console.log);
    }
    searchAllCategories(){
        const categoriesUrl = `${this.url}/categories`;
        fetch(categoriesUrl).then(res => res.json()).then(console.log);
    }
    searchByCategory(){
        const category = `${this.url}/category/smartphones`;
        fetch(category).then(res => res.json()).then(console.log);
    }

    addNewProduct(title, description, price, brand){
        fetch(`${this.url}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                brand: brand
            })
        })
        .then(res => res.json())
        .then(console.log);
        };
    updateProd(id, title){
        fetch(`${this.url}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                title: title
            })
        })
        .then( res => res.json())
        .then(console.log)
    }

    deleteProd(id = Math.floor(Math.random() * (150 - 5)) + 5){
        console.log(`id is ${id}`)
        fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        }).then( res => {
            if(!res.ok){
                throw Error(`No such id ${id}`)
            }
           return res.json();
        })
        .then(console.log)
        .catch( err => {
            console.error(err)
        })
    }
    
}
const products = new ProductsService('https://dummyjson.com/products');

 products.getOneProduct(3);
products.searchByKeyword();
// products.prodsTitlePrice();
// products.limitQuantityOfProds();
products.limitAndSpecificDataOfProd();
products.searchAllCategories();
// products.searchByCategory();
products.addNewProduct('iPhone 20', '20th model of apple phone', 500, 'Apple');
products.updateProd(10,'iPhone 15');
products.deleteProd(1);
products.deleteProd(2);
products.deleteProd(3);
products.deleteProd(4);
products.deleteProd();