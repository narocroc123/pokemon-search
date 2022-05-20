import styled from "styled-components";
import fetchData from "../utils/api";
import { updateSearch } from "../actions/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const historyResults = useSelector((state) => state.history);

  const formattedResults =
    historyResults.length >= 5
      ? historyResults.slice(historyResults.length - 5, historyResults.length)
      : historyResults;

  return (
    <>
      <h1>Recent Searches</h1>
      {formattedResults.map((item) => (
        <ul key={item}>
          <Button
            type="button"
            onClick={async () => {
              const searchResult = await fetchData(item);
              dispatch(updateSearch(searchResult));
            }}
            value={item}
          />
        </ul>
      ))}
    </>
  );
};

export default History;
