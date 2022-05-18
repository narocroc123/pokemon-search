const pokemonDescription = (data) => {
  for (const item of data) {
    if (item.language.name === "en") {
      const unformattedDescription = item.flavor_text;
      const formattedDescription = unformattedDescription.replace(
        /(\r\n|\n|\r|\f)/gm,
        " "
      );
      return formattedDescription;
    }
  }
};

const formatSearchResult = (data) => {
  const pokemonDataObj = {
    name: data.name,
    description: pokemonDescription(data.flavor_text_entries),
    is_legendary: data.is_legendary,
  };
  return pokemonDataObj;
};

export default {
  formatSearchResult,
};
