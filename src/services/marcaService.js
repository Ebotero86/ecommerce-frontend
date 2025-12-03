import axiosInstance from '../helper/axios-config';


const getMarcas =  () => {
    return axiosInstance.get('/marca', {
        headers: {
            'Content-Type': 'application/json'
        }   
    });
}
const createMarca = (data) => {
    return axiosInstance.post('/marca', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const updateMarca = (marcaId, data) => {
    return axiosInstance.put(`/marca/${marcaId}`, data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}
const deleteMarca = (marcaId, data) => {
    return axiosInstance.delete(`/marca/${marcaId}`,data, {
        headers: {
            'Content-Type': 'application/json'  
        }
    });
}
export {
    getMarcas,
    createMarca,
    updateMarca,
    deleteMarca
}   