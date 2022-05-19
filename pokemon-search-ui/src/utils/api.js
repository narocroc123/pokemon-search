const fetchData = (pokemonId) => {
  const searchData = pokemonId.toLowerCase();
  fetch(`http://localhost:5000/pokemon/${searchData}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export default fetchData;
