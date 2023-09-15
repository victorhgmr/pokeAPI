async function getPokemonDetails() {
    const pokemonId = Math.floor(Math.random() * 898) + 1;  // Random Pokémon ID between 1 and 898
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const pokemonData = await response.json();
  
      displayPokemonInfo(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  }
  
  function displayPokemonInfo(pokemon) {
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    pokemonInfoDiv.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p>Height: ${pokemon.height} dm</p>
      <p>Weight: ${pokemon.weight} hg</p>
    `;
  }
  