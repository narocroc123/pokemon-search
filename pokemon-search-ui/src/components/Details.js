import styled from "styled-components";
import { useSelector } from "react-redux";

const LegendaryTitle = styled.h1`
  font-style: italic;
`;

const LegendaryLabel = styled.h3`
  color: #0066a2;
`;

const Details = () => {
  const searchResult = useSelector((state) => state.search);

  const name = searchResult.data.name.toUpperCase();
  const description = searchResult.data.description;

  return (
    <>
      {searchResult.data.is_legendary ? (
        <>
          <LegendaryTitle>{name}</LegendaryTitle>
          <LegendaryLabel>Legendary!</LegendaryLabel>
        </>
      ) : (
        <h1>{name}</h1>
      )}
      <p>{description}</p>
    </>
  );
};

export default Details;
