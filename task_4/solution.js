function parseProducts(json) {
    let data = JSON.parse(json);
    let products = data.products;
    return products;
}

function renderProductsCards(json) {
    clearProducts ();
    let products = parseProducts(json);
    length = products.length;
    for (let i = 0; i < length; i += 1) {
        addProduct(products[i]);
    }
}
