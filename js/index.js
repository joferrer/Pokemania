
const urlApi = 'https://pokeapi.co/api/v2/';

function pokeApi (){
    let urlParams = new URLSearchParams(location.search); 
    console.log('param: '+urlParams.get('pokemonName'));
    buscarPokemon(urlParams.get('pokemonName'));
}
function buscarPokemon(pokemon='pikachu'){
    
    let urlPokemon = urlApi+'pokemon/'+pokemon;
    console.log('hola '+ pokemon);

    fetch(urlPokemon).then(response =>response.json()).then(response=>{
        console.log(response.forms[0].name);
        document.getElementById('pokeinfo').innerHTML+=response.forms[0].name;
        document.getElementsByTagName('img')[0].src=response.sprites.front_default;
    });

}
