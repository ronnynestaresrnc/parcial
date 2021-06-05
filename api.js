  export default class API {

        async  getCharacter(){
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        
         return data
        
    
    }
}
