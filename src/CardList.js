import './cardliststyle.css'
const CardList = (props) => {
   const monsters = props.filteredMonsters;
    return (
        <div className="cardlist">
            { monsters.length > 0 ?
                [ monsters.map(monster => (
                   <div className="CardContainer" key={monster.id}>
                    <img alt={'monster ${monster.name}'} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                    </div>
                    )) ]
            :
                <p>No monsters found</p>
            }
        </div>
    );
}
 
export default CardList;