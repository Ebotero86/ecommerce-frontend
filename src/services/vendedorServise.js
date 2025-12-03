import axiosInstance from '../helper/axios-config';

const getVendedores = () => {
    return axiosInstance.get('/vendedor', {
        headers: {
            'Content-Type': 'application/json'
        }   
    });
}

const createVendedor = (data) => {
    return axiosInstance.post('/vendedor', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const updateVendedor = (vendedorId, data) => {
    return axiosInstance.put(`/vendedor/${vendedorId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
} 

const deleteVendedor = (vendedorId) => {
    return axiosInstance.delete(`/vendedor/${vendedorId}`, {
        headers: {
            'Content-Type': 'application/json'  
        }
    });
}

export {
    getVendedores,
    createVendedor,
    updateVendedor,
    deleteVendedor
}
