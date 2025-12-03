import React, { useState, useEffect }from 'react'
import { getMarcas } from '../../services/marcaService'


export const MarcaView = () => {

  const [marcas, setMarcas] = useState([])

  const listMarcas = async () => {
    try {
      const { data } = await getMarcas()
      console.log(data)
      setMarcas(data) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listMarcas()
  }, [])  
  

  return (
    <div>
      <h1>Marcas</h1>
      <ul>
        {
          marcas.map( marca => (
            <li key={ marca._id }>{ marca.nombre }</li>
          ))
        }
      </ul>
    </div>    
  )
}


