const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },]


}

  // console.dir(pokemon, { maxArrayLength: null })

  //Exercise 1//
  // console.log(pokemon[58])

  //Exercise 2//
  // console.log(game)

  // Exercise 3//
game.difficulty = ['easy'];
// console.log(game)

//Exercise 4//
game.party = [pokemon[3]]
// console.log(game)

//Exercise 5//
game.party = [pokemon[3], pokemon[33], pokemon[64], pokemon[129]]
// console.log(game);

//Exercise 6//
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
      gym.completed = true;
  }
});
// console.log(game);

//Exercise 7//
game.party.splice(0, 1, pokemon[4])
console.log(game) 

//Exercise 8//
game.party.forEach(banana => {console.log(banana.name) });

  // for (let i = 0; i < game.party.length; i++) 

  //Exercise 9//
  function printStarters(pokemon) {
  
  for  (let i =0; i < pokemon.length; i++)  {
  if (pokemon[i].starter === true) {console.log(pokemon[i]); }
  }
} printStarters(pokemon);

//Exercise 10//
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};

game.catchPokemon(pokemon[144]);
console.log(game.party);