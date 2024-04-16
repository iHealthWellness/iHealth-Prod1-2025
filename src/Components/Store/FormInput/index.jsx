
//Import Styles
import './index.css'

const FormInput = ({ name, type, defaultValue }) => {
    return (
      <div className='store-form-control'>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder='Search'
        />
      </div>
    );
  };
  export default FormInput;