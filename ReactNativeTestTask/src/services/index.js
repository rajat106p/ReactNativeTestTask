const urls = {
    allProducts:(limit,skip)=> `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    singleProduct: (id) => `https://dummyjson.com/products/${id}`
}

const getAllProducts = async () => {
    const response = await fetch(urls.allProducts(20,0));
    const data = await response.json();
    return data;
}

const getMoreProducts = async (limit,skip) => {
    const response = await fetch(urls.allProducts(limit,skip));
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
    getSingleProduct,
    getMoreProducts
}