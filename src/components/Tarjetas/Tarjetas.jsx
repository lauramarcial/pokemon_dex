import React from 'react';
import './style.css';

//colores de los tipos
const colores = {
    bug: '#aabb22',
    fire: '#ff4422',
    normal: '#bbbbaa',
    flying: '#6699ff',
    grass: '#9bcc50',
    poison: '#aa5599',
    water: '#3399ff'
};

//traducciones: tipos y habilidades----
const tipos = {
    bug: 'Bicho',
    fire: 'Fuego',
    normal: 'Normal',
    flying: 'Volador',
    grass: 'Planta',
    poison: 'Veneno',
    water: 'Agua'
};
const habilidades = {
    overgrow: 'Espesura',
    blaze: 'Llamarada ',
    torrent: 'Torrente',
    "shield-dust": 'Polvo escudo',
    "shed-skin":'Mudar',
    "compound-eyes": 'Ojo compuesto',
    swarm:'Enjambre',
    "keen-eye": 'Vista lince',
    "run-away": 'Fuga',
};
//--------------------------------
function tarjeta({ pokemon }) {
    return (
        <div className="tarjeta">
            <div className='numeroPkm'>
                #{pokemon.id}
            </div>          
            <div className="imagenPkm">         
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="nombrePkm">
                {pokemon.name}
            </div>
            <div className="tiposPkm">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="tipoTarjeta" style={{ backgroundColor: colores[type.type.name], border: "2px solid #fff",outline: "2px solid black" }}>
                                {tipos[type.type.name]} 
                            </div>
                        )
                    })
                }
            </div>
            <div className="infoPkm">
                <div className="datosTarjeta datosTarjetaPeso">
                    <p className="titulo">Peso</p>
                    <p>{pokemon.weight}</p>
                    <p className="titulo">Altura</p>
                    <p>{pokemon.height}</p><hr/>
                </div>
                <div className="datosTarjeta datosTarjetaPeso">
                    <p className="titulo">Experiencia base</p>
                    <p>{pokemon.base_experience}</p>               
                </div>
                <div className="datosTarjeta datosTarjetaHabilidad">
                    <p className="titulo">Habilidad</p>
                    <p>{habilidades[pokemon.abilities[0].ability.name]}</p>
                 
                </div>
            </div>
        </div>
    );
}

export default tarjeta;