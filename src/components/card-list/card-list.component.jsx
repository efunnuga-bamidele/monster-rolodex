import { Component } from "react";

class CardList extends Component{
    render(){
        console.log('Render from cardList')
        const { monstersList } = this.props;
        return(
            <div>
            {
                monstersList.map( (monster) => {
                  return <div key={monster.id}><h1>{monster.name}</h1></div>
                })
              }
            </div>
        )
    }
}

export default CardList;