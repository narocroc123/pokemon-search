const fetchData = async (pokemonId) => {
  const searchData = pokemonId.toLowerCase();

  try {
    const response = await fetch(`http://localhost:5000/pokemon/${searchData}`, {
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export default fetchData;
