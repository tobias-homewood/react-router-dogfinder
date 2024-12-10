import { Link } from "react-router-dom"
import './ColorList.scss'

const ColorList = ({colors}) => {
  return (
    <div className='colorlist'>
      <Link to="new"><button className="btn btn-secondary">Add a color</button></Link>
        {colors.map(color => (
            <div key={color.name+color.hex}>
                <Link to={color.name}>
                    <h1>{color.name}</h1>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default ColorList