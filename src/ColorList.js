import { Link } from "react-router-dom"
import './ColorList.scss'

const ColorList = ({colors}) => {
  return (
    <div className='colorlist'>
        {colors.map(color => (
            <div key={color.name+color.hex}>
                <Link to={color.name}>
                    <h1 style={{color: color.hex}}>{color.name}</h1>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default ColorList