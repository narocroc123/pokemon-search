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
  float: left;
  margin: 20px;
`;

const HistoryContainer = styled.div`
  float: right;
  margin: 20px;
`;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Pokemon Search</Title>
      </header>
      <section className="App-search">
        <Search />
      </section>
      <section className="App-details-history">
        <DetailsContainer>
          <Details />
        </DetailsContainer>
        <HistoryContainer>
          <History />
        </HistoryContainer>
      </section>
    </div>
  );
};

export default App;
