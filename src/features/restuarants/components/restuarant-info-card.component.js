import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Address,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Section,
  SectionEnd,
} from "./restuarant-info-card.styles";
import { Favourites } from "../../../components/Favourites/favourites.component";

export default function RestaurantsInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    userRatingsTotal = 1,
    placeId = "asdfjslkajdfkl;j",
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(
    new Array(Math.floor(rating > 0 ? rating : 0))
  );

  return (
    <RestaurantCard elevation={2}>
      <Favourites restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <Spacer position="left" size="medium">
            <Text variant="caption">{`(${userRatingsTotal.toLocaleString()})`}</Text>
          </Spacer>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
