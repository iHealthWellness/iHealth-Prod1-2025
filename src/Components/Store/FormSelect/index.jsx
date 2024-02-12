

//Import Styles
import './index.css'


const FormSelect = ({ label, name, list, defaultValue }) => {
    return (
      <div className='store-form-control'>
        <label htmlFor={name}>
          <span className='label-text'>{label}</span>
        </label>
        <select
          name={name}
          id={name}
          defaultValue={defaultValue}
        >
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
    )
}
export default FormSelect