import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchConatainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchConatainer>
      <Searchbar
        placeholder="Search for a location"
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchConatainer>
  );
};
