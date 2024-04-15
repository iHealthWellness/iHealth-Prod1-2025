import { formatPrice } from '../utils'
import { useState } from 'react'

//Import Styles
import "./index.css"


const FormRange = ({ label, name,price }) => {
  const step = 50
  const maxPrice = 10000
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)

  return (
    <div className='store-form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text'>{label}</span>
        <span className='price'>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range`}
        step={step}
      />
    </div>
  )
}
export default FormRange