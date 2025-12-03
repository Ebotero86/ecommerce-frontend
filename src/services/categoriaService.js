import axiosInstance from '../helper/axios-config';

const getCategorias =  () => {
    return axiosInstance.get('/categoria', {
        headers: {
            'Content-Type': 'application/json'
        }

    });
}

const createCategoria = (data) => {
    return axiosInstance.post('/categoria', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const updateCategoria = (categoriaId, data) => {
    return axiosInstance.put(`/categoria/${categoriaId}`, data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

const deleteCategoria = (categoriaId, data) => {
    return axiosInstance.delete(`/categoria/${categoriaId}`,data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    getCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria
}