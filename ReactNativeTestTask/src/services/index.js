const urls = {
    allProducts: 'https://dummyjson.com/products',
    singleProduct: (id) => `https://dummyjson.com/products/${id}`
}

const getAllProducts = async () => {
    const response = await fetch(urls.allProducts);
    const data = await response.json();
    return data;
}

const getSingleProduct = async (id) => {
    const response = await fetch(urls.singleProduct(id));
    const data = await response.json();
    return data;
}

export {
    getAllProducts,
    getSingleProduct
}