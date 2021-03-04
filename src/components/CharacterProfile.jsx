import { useParams } from "react-router-dom";

const CharacterProfile = ({characters}) => {
    const { id } = useParams()
    console.log(characters)
    console.log(id)
    const character = characters[id]
    return (
       <> 
        <h1>Name : {character.name}</h1>
        <h2>Height :{character.height}</h2>
        </>
    )
}

export default CharacterProfile;