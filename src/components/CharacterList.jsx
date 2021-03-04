import { Link } from "react-router-dom";

const CharacterList = ({characters}) => {
    console.log("This is the results: ", characters);
        
    
    return (
        
        <>
            <p>Character List</p>
                {characters.map((character, index) => (
                    <Link to={`/character/${index}`}>
                    <h1 key={index}>{character.name}</h1>
                    </Link>

                )        
    )}   
        </>
    )
}

export default CharacterList;
