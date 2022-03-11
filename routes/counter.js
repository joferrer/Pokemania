const {Router}= require('express');
const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));
const router = Router();


    router.route('/').get(async (req,res)=>{
    console.log("LLega types q: "+req.query.types);
    const types= req.query.types;
    console.log("LLega: "+types);
    const url = `https://pokeapi.co/api/v2/type/${types}`;
    
    let r = await fetch(url);
    let json = await r.json();

    const damageRealtion = json.damage_relations;
    let countersT = `Este pokemon es tipo `;
    types.split(",").forEach(types => {
        countersT+= `${types} `;        
    });
    countersT += 'por lo tanto es debil a: '

   console.log("COMO: "+damageRealtion)
      damageRealtion.double_damage_from.forEach(typeDD => countersT+=`${typeDD.name} `);
    
    res.status(200).send(countersT);
    
});



//Exportar router para usarlo en otros lados.
exports.router = router; 