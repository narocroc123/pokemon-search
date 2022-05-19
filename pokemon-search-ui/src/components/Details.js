import styled from "styled-components";

const dummyData = {
  name: "azelf",
  description:
    "Known as “The Being of Willpower.” It sleeps at the bottom of a lake to keep the world in balance.",
  is_legendary: true,
};

const LegendaryTitle = styled.h1`
  font-style: italic;
`;

const LegendaryLabel = styled.h3`
  color: #0066a2;
`;

const Details = () => {
  const name = dummyData.name.toUpperCase();
  return (
    <>
      {dummyData.is_legendary ? (
        <>
          <LegendaryTitle>{name}</LegendaryTitle>
          <LegendaryLabel>Legendary!</LegendaryLabel>
        </>
      ) : (
        <h1>{name}</h1>
      )}
      <p>{dummyData.description}</p>
    </>
  );
};

export default Details;
