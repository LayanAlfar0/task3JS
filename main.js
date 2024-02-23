async function getProducts(){
    const response = await fetch('https://dummyjson.com/products');
    const results= await response.json();
    const products =results.products;
    const items = products.map(function(item){
        return `
            <div class="product">
            <img src = "${item.thumbnail}">
            <h2>${item.title}</h2>
            <p>${item.price}</p>
            </div>
        `
    }
    ).join('');
    document.querySelector('.products').innerHTML=items;
}
getProducts();