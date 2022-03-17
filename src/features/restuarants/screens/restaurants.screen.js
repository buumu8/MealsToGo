import React, { useState } from "react";
import styled from "styled-components/native";

import { FlatList } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Searchbar } from "react-native-paper";
import RestaurantsInfoCard from "../components/restuarant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
const SearchConatainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contnentContainerStyle: {
    padding: 16,
  },
})`
  padding: 16px;
`;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  var array = [...Array(10).keys()];
  array.map((a, index) => {
    name: index;
  });
  return (
    <SafeArea>
      <SearchConatainer>
        <Searchbar
          placeholder="search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchConatainer>
      <RestaurantList
        data={array}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
