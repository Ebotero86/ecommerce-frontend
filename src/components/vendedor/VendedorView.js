import React, { useState, useEffect }from 'react'
import { getVendedores } from '../../services/vendedorServise'

export const VendedorView = () => {

  const [vendedores, setVendedores] = useState([])

  const listVendedores = async () => {
    try {
      const { data } = await getVendedores()
      console.log(data)
      setVendedores(data) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listVendedores()
  }, [])  

  return (
    <div>
      <h1>Vendedores</h1>
      <ul>
        {
          vendedores.map( vendedor => (
            <li key={ vendedor._id }>{ vendedor.nombre }</li>
          ))
        }
      </ul>
    </div>
  )
}

