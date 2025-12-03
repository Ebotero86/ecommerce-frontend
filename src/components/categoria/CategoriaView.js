import React, { useState, useEffect } from 'react'

import { getCategorias } from '../../services/categoriaService'

export const CategoriaView = () => {

  const [categorias, setCategorias] = useState([])

  const listCategorias = async () => {

    try {

      const { data } = await getCategorias()
      console.log(data)
      setCategorias(data) 

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listCategorias()
  }, [])

  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        {
          categorias.map( categoria => (
            <li key={ categoria._id }>{ categoria.nombre }</li>
          ))
        }
      </ul>
    </div>
  )
}
