class Product{
    name;
    price;
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}
 const shopList = [
    new Product("Banana", 5), 
    new Product("Apple", 4),
    new Product("Orange", 8),
    new Product("Cucumber", 3),
    {pname: "Cherry", price: 10},
    
 ]
 console.log(shopList);
 console.log(shopList.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  }));