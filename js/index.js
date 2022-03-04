
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

    fetch(urlPokemon).then(response =>response.json()).then(response=>{
        console.log(response.forms[0].name);
        document.getElementById('pokeinfo').innerHTML+=response.forms[0].name;
        document.getElementsByTagName('img')[0].src=response.sprites.front_default;
    });

}
