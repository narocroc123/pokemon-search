import styled from "styled-components";

import Search from "./components/Search.js";
import History from "./components/History";
import Details from "./components/Details";

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xxx-large;
`;

const DetailsContainer = styled.div`
  display: inherit;
  float: left;
  margin: 20px;
  width: 60%;
`;

const HistoryContainer = styled.div`
  display: inherit;
  float: right;
  margin: 20px;
  width: auto;
`;

const App = () => {
  return (
    <>
      <Title>Pokemon Search</Title>
      <Search />
      <DetailsContainer>
        <Details />
      </DetailsContainer>
      <HistoryContainer>
        <History />
      </HistoryContainer>
    </>
  );
};

export default App;
