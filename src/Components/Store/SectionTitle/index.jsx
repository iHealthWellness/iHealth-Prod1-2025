
//Import Styles
import './index.css'

const SectionTitle = ({ text ,center=false}) => {
    return (
      <div className={`store-section-title ${center && 'store-text-center'}`}>
        <h2>{text}</h2>
      </div>
    )
}
export default SectionTitle