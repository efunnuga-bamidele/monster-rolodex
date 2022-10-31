import { Component } from "react";

//styles
import './card-list.style.css'
import './card.style.css'

class CardList extends Component{
    render(){
        // console.log('Render from cardList')
        const { monstersList } = this.props;
        return(
            <div className="card-list">
            {
                monstersList.map( (monster) => {
                    const { email, name, id } = monster
                    return(
                        <div className="card-container" key={id}>
                            <img src={`https://www.robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                    
                    })
              }
            </div>
        )
    }
}

export default CardList;