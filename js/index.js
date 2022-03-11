
//Url de la API PokeApi
const urlApi = 'https://pokeapi.co/api/v2/';



/**
 * Se ejecuta al inciar la pagina. Lee la url buscando parametros y los manda a cargar. 
 */
function pokeApi (){
    let urlParams = new URLSearchParams(location.search); 
    console.log('param: '+urlParams.get('pokemonName'));
    buscarPokemon(urlParams.get('pokemonName'));
}
/**
 * Carga la info del pokemon pasado por parametro. Si no hay parametro o es null, el pokemon que se carga es Pikachu
 * @param {string} pokemon 
 */
function buscarPokemon(pokemon='pikachu'){
    if(pokemon == null ){
        pokemon = 'pikachu';
    }
    let urlPokemon = urlApi+'pokemon/'+pokemon;
    console.log('hola '+ pokemon);

    fetch(urlPokemon).then(response =>response.json()).then( async response=>{
        console.log(response.forms[0].name);
        document.getElementsByClassName('card-title')[0].innerHTML+=response.forms[0].name;
        document.getElementsByTagName('img')[0].src=response.sprites.front_default;
        console.log(response.types[0].type.name);

        document.getElementsByClassName('card-text')[0].innerHTML = await descripcion(response);
        document.getElementsByClassName('card-text')[1].innerHTML+=" "+response.types[0].type.name;

        document.getElementsByClassName('list-group-item')[0].innerHTML+= " "+ response.stats[0].base_stat;
        document.getElementsByClassName('list-group-item')[1].innerHTML+= " "+ response.stats[1].base_stat;
        document.getElementsByClassName('list-group-item')[2].innerHTML+= " "+ response.stats[2].base_stat;
        document.getElementsByClassName('list-group-item')[3].innerHTML+= " "+ response.stats[3].base_stat;

    });

}
const descripcion = async (response)=>{
    console.log(response.id);
    try{
    let resp =await fetch('https://pokeapi.co/api/v2/characteristic/'+response.id);
    let jsonD = await resp.json();
    let descripcion = jsonD.descriptions[5].description;
    console.log(descripcion);
    return descripcion;
    }
    catch (e) {
        return  'Sin descripción :('
    }
    
    
}
