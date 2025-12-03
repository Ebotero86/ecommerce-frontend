import axiosInstance from '../helper/axios-config';

const getProductos =  () => {
    return axiosInstance.get('/producto', {
        headers: {
            'Content-Type': 'application/json'
        }   
    });
}
const createProducto = (data) => {
    return axiosInstance.post('/producto', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const updateProducto = (productoId, data) => {
    return axiosInstance.put(`/producto/${productoId}`, data, {
        headers: {  
            'Content-Type': 'application/json'
        }
    });
}
const deleteProducto = (productoId, data) => {
    return axiosInstance.delete(`/producto/${productoId}`,data, {
        headers: {
            'Content-Type': 'application/json'  
        }
    });
}
export {
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
}