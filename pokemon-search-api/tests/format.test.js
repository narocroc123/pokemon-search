import format from "../format.js";

const mockData = {
  base_happiness: 50,
  capture_rate: 45,
  color: {
    name: "red",
  },
  egg_groups: [
    {
      name: "monster",
    },
    {
      name: "dragon",
    },
  ],
  flavor_text_entries: [
    {
      flavor_text:
        "Spits fire that\nis hot enough to\nmelt boulders.\fKnown to cause\nforest fires\nunintentionally.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      version: {
        name: "red",
        url: "https://pokeapi.co/api/v2/version/1/",
      },
    },
    {
      flavor_text:
        "On raconte que la flamme du\nDracaufeu s’intensifie après\nun combat difficile.",
      language: {
        name: "fr",
        url: "https://pokeapi.co/api/v2/language/5/",
      },
      version: {
        name: "black",
        url: "https://pokeapi.co/api/v2/version/17/",
      },
    },
  ],
  form_descriptions: [],
  forms_switchable: true,
  gender_rate: 1,
  generation: {
    name: "generation-i",
  },
  growth_rate: {
    name: "medium-slow",
  },
  habitat: {
    name: "mountain",
  },
  has_gender_differences: false,
  hatch_counter: 20,
  id: 6,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,
  name: "charizard",
};

const alternativeDescription = [
  {
    flavor_text:
      "Spits fire that\nis hot enough to\nmelt boulders.\fKnown to cause\nforest fires\nunintentionally.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    flavor_text:
      "On raconte que la flamme du\nDracaufeu s’intensifie après\nun combat difficile.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "black",
      url: "https://pokeapi.co/api/v2/version/17/",
    },
  },
];

const formattedData = {
  name: "charizard",
  description:
    "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
  is_legendary: false,
};

describe("API tests", () => {
  test("formats pokeAPI data", () => {
    expect(format.formatSearchResult(mockData)).toStrictEqual(formattedData);
  });
  test("formats pokeAPI description", () => {
    expect(
      format.pokemonDescription(mockData.flavor_text_entries)
    ).toStrictEqual(formattedData.description);
    
    expect(format.pokemonDescription(alternativeDescription)).toStrictEqual(
      formattedData.description
    );
  });
});
