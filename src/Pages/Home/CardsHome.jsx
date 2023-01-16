import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const infoCards = [
  {
    class: "card1",
    title: "Qualified Professionals",
    description:
      "Top-notch customer service and treatment approach that is evidence based and proven to be successful",
  },
  {
    class: "card2",
    title: "Extensive Experience",
    description:
      "Over 20 years of combined experience, and extensive knowledge in many areas of physical and mental health",
  },
  {
    class: "card3",
    title: "Leading Technology",
    description:
      "Agile treatment techniques led by advanced technology to diagnose patient issues and concerns",
  },
  {
    class: "card4",
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
        flexDirection="column"
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
