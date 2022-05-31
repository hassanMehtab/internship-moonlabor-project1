import './SearchBox.css';

const SearchBox = (props) => {
    const myFunction = props.myFunction;
    return ( 
        
        
        <div>
        <input className="SearchBox" type="text" onChange={ myFunction }/>
        </div>


     );
}
 
export default SearchBox;