const pokemonDescription = (data) => {
  const descriptionFormatting = (description) => {
    return description.replace(/(\r\n|\n|\r|\f)/gm, " ");
  };
  for (const item of data) {
    if (item.language.name === "en") {
      const description = descriptionFormatting(item.flavor_text);
      return description;
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
  pokemonDescription,
};
