import styled from "styled-components";
import fetchData from "../utils/api";

const dummyData = ["pikachu", "azelf", "charizard", "florges", "swirlix"];

const Button = styled.input`
  background: #0066a2;
  color: white;
  border-color: #0066a2;
  height: 40px;
  width: 100px;
  margin: 5px;
  float: left;
  font-size: inherit;
  &:hover {
    cursor: pointer;
  }
`;

const History = () => {
  return (
    <>
      <h1>Recent Searches</h1>
      {dummyData.map((item) => (
        <ul key={item}>
          <Button type="button" onClick={() => fetchData(item)} value={item} />
        </ul>
      ))}
    </>
  );
};

export default History;
