import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonDetail from "../components/Pokemon/PokemonDetail";

export const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  return (
    <section>
      <h1>Detail Page</h1>
      <PokemonDetail pokemon={pokemon} />
    </section>
  );
};

export default Detail;