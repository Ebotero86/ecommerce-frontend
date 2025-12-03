import React, { useState, useEffect }from 'react'
import { getProductos } from '../../services/productoService'

export const ProductoView = () => {

  const [productos, setProductos] = useState([])
  const listProductos = async () => {
    try {
      const { data } = await getProductos()
      console.log(data)
      setProductos(data) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listProductos()
  }, [])

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {
          productos.map( producto => (
            <li key={ producto._id }>{ producto.nombre }</li>
          ))
        }
      </ul>
    </div>
  )
}


