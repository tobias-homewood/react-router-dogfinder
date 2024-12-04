import React from 'react'
import { useParams } from 'react-router-dom'

const DogDetails = () => {
    const { name } = useParams();
  return (
    <div>{name}</div>
  )
}

export default DogDetails