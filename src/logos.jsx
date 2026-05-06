import JSlogo from './assets/JS.png';
import reactlogo from './assets/react.svg';
function Pictures({ image = reactlogo, name, price }) {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Pictures