import styles from './Books.module.css'

function Book(props){
    return(
        <div className={styles.Booked}>
           <img src={props.image} alt="" />
           <h3>{props.name}</h3>
           <p>{props.by}</p>
        </div>        
    )
}

export default Book