let arr = []

const init = () => {
    fetchAllPokemon()
    fetchSinglePokemon()
}


const fetchAllPokemon = async() => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    let data = await res.json()
    console.log(data)
    fetchEachPokemon(data.results)

}
const fetchSinglePokemon = async(pokemon) => {
    let res = await fetch(`https://pokiapi.co/api/v2/pokemon/$(pokemon)`); // URL to fetch a single pokemon
    let data = await res.json()
    return await data
    
}

const fetchEachPokemon = async (pokemon) => {
    for (let i = 0; i < pokemon.length; i++){
        arr.push(await fetchSinglePokemon(pokemon[i].name))

    }
    console.log(arr)
    ShowPokemon(arr)
}

const ShowPokemon = (pokemon) => {
    const output = document.querySelector(`.output`)
    const map = pokemon.map(each =>{
        return `
            <div>
                <h1>${each.name}</h1>
                <img src=${each.sprites.front_default} alt=${each.name}/>
            </div>
        `
    }).join('')
    return output.innerHTML = map

}


