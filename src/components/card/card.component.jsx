import {Component} from "react";
import './card.styles.css'
class Card extends Component {
    render() {
        const {name, email, id} = this.props.monster;
        return (
            <div className='card-container' key={id}>
                <img src={`https://www.robohash.org/${id}?set=set&size=180x180`} alt={`monster ${name}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }

}
export default Card;