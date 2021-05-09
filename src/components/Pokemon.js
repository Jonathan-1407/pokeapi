import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = props => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = e => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
      <div className="pokemon-img-container">
        <div className="pokemon-number">
          <small>#{pokemon.id}</small>
        </div>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="box">
          <div className={`box-sm ${pokemon.types[0].type.name}-line`}></div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button onClick={clickHeart} className="pokemon-heart-btn">
        <div className="pokemon-favorite">{heart}</div>
      </button>
    </div>
  );
};

export default Pokemon;
