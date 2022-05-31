
import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import CardList from './CardList';
function App() {
  //const hadnleClick = () => {
   // setName('ali')


  //}
  const [monsters , setmonsters] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [searchValues , setSearchValue] = useState([]);
  const [ userEnteredValue, setUserEnteredValue ] = useState("");
    
      //{
       // "name" : "linda",
        //"id" : 1
     // },
     // {
      //  "name" : "franky",
      //  "id" : 2

      //},
      //{
       // "name" : "jacky",
        //"id" : 3
      //},

    //]

  

  //const [nonster3 , setmonster3] = useState('Jacky');
  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const monsters = res.data;
      setmonsters(monsters);
      setLoading(false);
    })
    .catch(e => {
      console.log(e);
    });

  },[]);
  //setsearchString()
  
  const myFunction = (event) => { 
    setUserEnteredValue(event.target.value);
    const filteredMonsters = monsters.filter((monster) => {
      const lowerCaseMonsterName = monster.name.toLowerCase();
      return lowerCaseMonsterName.includes(event.target.value.toLowerCase());
    });
    setSearchValue(filteredMonsters);
  }

  return (
    <div className="App">

      { loading ? 
        "loading ..."
      :
      <div>
        <h1 className='app-title'>Monster rolodox</h1>
        <SearchBox  myFunction={myFunction}/>
        <CardList filteredMonsters={ userEnteredValue === "" ? monsters : searchValues } />
      </div>
      }
    </div>
  );
  }

export default App;
