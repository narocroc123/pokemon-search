import React, { useState } from "react";
import styled from "styled-components";

import fetchData from "../utils/api";
import { pokemonArray } from "../utils/pokemon";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 40px;
  width: 400px;
  font-size: xx-large;
  border-radius: 10px;
`;

const Button = styled.button`
  background: #0066a2;
  color: white;
  border-color: #0066a2;
  height: 40px;
  width: 100px;
  border-radius: 20px;
  margin: 20px;
  font-size: inherit;
  &:hover {
    background: #016abc;
    border: 1px solid #eee;
    cursor: pointer;
  }
`;

const Search = () => {
  const [searchData, setSearchData] = useState();

  const searchQuery = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  const sendData = (e) => {
    if (pokemonArray.includes(searchData.toLowerCase())) {
      e.preventDefault();
      fetchData(searchData);
      setSearchData("");
    } else {
      alert("This search needs to be for a valid Pokemon");
    }
  };

  return (
    <Form onSubmit={sendData}>
      <Input
        type="text"
        name="search"
        id="search"
        value={searchData || ""}
        onChange={searchQuery}
        placeholder="Search Pokemon....."
        required
      />
      <Button>Submit</Button>
    </Form>
  );
};

export default Search;
