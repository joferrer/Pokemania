
//Url de la API PokeApi
const urlApi = 'https://pokeapi.co/api/v2/';

const btnCounter = document.getElementById('counter');


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
        console.log("List: "+response.types.forEach(poke =>console.log(poke.type.name)));

        document.getElementsByClassName('card-text')[0].innerHTML = await descripcion(response);
        
        //Tipo de los pokemon
        response.types.forEach(poke =>document.getElementsByClassName('card-text')[1].innerHTML+=" "+poke.type.name)
       
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

btnCounter.onclick =()=>{
    console.log('Aver 1')

}
const counterText = async (types)=>{
    
    return jsonP;
    
    
}
async function counterT(){
    console.log('Aver');
    const types = document.getElementsByClassName('card-text')[1].innerHTML.split(' ');
    types.shift(); //Eliminar el string 'Tipo:' que esta ene la etiqueta.
    const preua = ['a'];
    console.log(preua.toString().split(','));

    console.log(types);
    const urlC = "http://localhost:3200/counter?types="+types.toString();
    console.log(urlC);
    let promiseF;
    
    try{
        promiseF=await fetch(urlC);
    }
    catch (e){console.log(e);}
    
    //const jsonP =await promiseF.json();
    //console.log( "WAT:"+await promiseF.text());
    let debilidades = await promiseF.text();
    document.getElementById('counterText').innerHTML+=debilidades;
    //document.innerHTML+= textC;
    
}

