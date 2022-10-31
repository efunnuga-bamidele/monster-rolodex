// import { Component } from "react";

//Components
import Card from '../card/card.component'

//styles
import './card-list.style.css'

const CardList = ({ monstersList }) => {
    return(
        <div className="card-list">
            {
                monstersList.map( (monster) => {
                        return(
                            <Card key={monster.id} monster={monster}/>
                        )
                    })
                }
        </div>
    )
}

// class CardList extends Component{
//     render(){
//         // console.log('Render from cardList')
//         const { monstersList } = this.props;
//         return(
//             <div className="card-list">
//             {
//                 monstersList.map( (monster) => {
//                         return(
//                             <Card monster={monster}/>
//                         )
//                     })
//               }
//             </div>
//         )
//     }
// }

export default CardList;