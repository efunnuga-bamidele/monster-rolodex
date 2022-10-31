import { Component } from "react";

//Components
import Card from '../card/card.component'

//styles
import './card-list.style.css'


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
                            <Card email={email} name={name} id={id} />
                        )
                    })
              }
            </div>
        )
    }
}

export default CardList;