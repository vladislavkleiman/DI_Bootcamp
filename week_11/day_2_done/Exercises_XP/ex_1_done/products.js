const products = [
    {name: 'Sony', price: '100', categoty: 'phone'},
    {name: 'Apple', price: '200', categoty: 'computer'},
    {name: 'ASUS', price: '150', categoty: 'computer'},
    {name: 'Intel', price: '300', categoty: 'CPU'},
]

const callNameProduct = function (name) {
    console.log(products.find(product => product.name === name));
}

module.exports = {products , callNameProduct}

