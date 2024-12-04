import React from 'react'
import { useParams } from 'react-router-dom'

const Dog = () => {
    const { name } = useParams();
  return (
    <div>{name}</div>
  )
}

export default Dog