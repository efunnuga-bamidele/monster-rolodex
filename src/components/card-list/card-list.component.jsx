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
                        return(
                            <Card monster={monster}/>
                        )
                    })
              }
            </div>
        )
    }
}

export default CardList;