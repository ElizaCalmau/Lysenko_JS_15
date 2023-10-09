
class ProductsService {
    constructor(url){
        this.url = url;
        this.products = fetch(this.url).then(res => res.json()).then(console.log);
    }
    // getProducts(){
    //     //this.response = fetch(this.url)//returns response
    //     console.log(this.response);
    //     this.response.then(res => { //res - body of response
    //         if(!res.ok){//res.ok - means status: 200, no low-level errors
    //             throw new Error(`Network response was not ok`);//if response has mistake I will throw error
    //         }
    //         return res.json();//if response is ok read it from json format 
    //     }).then(res => {console.log(res)})//output arr with products (typrof product is obj)
    // }
    getOneProduct(){  
        const oneProductUrl = `${this.url}/1`; //add to url /1
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

    addNewProduct(){
        fetch(`${this.url}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'iPhone XX',
                description: 'The 20\'s model of apple phone',
                price: 1000,
                brand: 'Apple'
            })
        })
        .then(res => res.json())
        .then(console.log);
        };
    updateProd(){
        fetch(`${this.url}/54`, {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                title:'iPhone 15'
            })
        })
        .then( res => res.json())
        .then(console.log)
    }
    deleteProd(){
        fetch(`${this.url}/32`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(console.log)
    }
    delete4Prods(){
        for(let i = 1; i <= 4; i++){
            fetch(`${this.url}/${i}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(console.log)
        }
    }
    deleteRandomly(){
        let n = Math.floor(Math.random() * (101 - 5)) + 5
        console.log(`The random id is ${n}`)
        fetch(`${this.url}/${n}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(console.log);
    }
}
const products = new ProductsService('https://dummyjson.com/products');
// products.getProducts();
products.getOneProduct();
products.searchByKeyword();
products.prodsTitlePrice();
// products.limitQuantityOfProds();
products.limitAndSpecificDataOfProd();
products.searchAllCategories();
products.searchByCategory();
products.addNewProduct();
products.updateProd();
products.deleteProd();
products.delete4Prods();
products.deleteRandomly();