import { Box, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./home.css";

const infoCards = [
  {
    class: "card1",
    icon: "https://cdn-icons-png.flaticon.com/512/3209/3209080.png",
    title: "Qualified Professionals",
    description:
      "Top-notch customer service and treatment approach that is evidence based and proven to be successful",
  },
  {
    class: "card2",
    icon: "https://cdn-icons-png.flaticon.com/512/3953/3953705.png",
    title: "Extensive Experience",
    description:
      "Over 20 years of combined experience, and extensive knowledge in many areas of physical and mental health",
  },
  {
    class: "card3",
    icon: "https://cdn-icons-png.flaticon.com/512/3953/3953604.png",
    title: "Leading Technology",
    description:
      "Agile treatment techniques led by advanced technology to diagnose patient issues and concerns",
  },
  {
    class: "card4",
    icon: "https://cdn-icons.flaticon.com/png/512/966/premium/966024.png?token=exp=1653958895~hmac=ac169b5c9f685aa96c4f4049f9761ffc",
    title: "Direct Billing", //look for ways to have the word "billing in a seperate line"
    description:
      "Direct billing to various public and private insurance providers in addition to all MVA and WCB Claims",
  },
];

export const CardsHome = () => {
  return (
    <>
      <Stack
        className="cardshome"
        height="100vh"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p={0}
      >
        {infoCards.map((card) => (
          <Stack flexDirection="row" color="white">
            <Stack padding={10}>
              <Box
                className={card.class}
                width="220px"
                height="400px"
                padding={10}
                pb={30}
              >
                <Box boxSize="sm" paddingTop={10}>
                  <Image
                    width="50px"
                    src={card.icon}
                    className="cardIcon"
                    alt="We have..."
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Text
                    m={5}
                    letterSpacing={2}
                    fontSize="25px"
                    fontFamily="Roboto"
                    fontWeight="semibold"
                  >
                    {card.title}
                  </Text>
                  <Text
                    m={0}
                    padding={25}
                    letterSpacing="2px"
                    lineHeight={1.4}
                    fontFamily="Roboto"
                    fontWeight={500}
                  >
                    {card.description}
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
