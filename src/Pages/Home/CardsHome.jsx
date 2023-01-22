import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { benefitCards } from "./homeContent";

export const CardsHome = () => {
  return (
    <>
      <Stack
        height="100vh"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p={0}
      >
        {benefitCards.map(card => (
          <Stack flexDirection="row" color="#fff">
            <Stack padding={10}>
              <Box
                className={card.class}
                w="230px"
                h="400px"
                pt={10}
                pb={30}
                bg={`center / cover no-repeat url(${card.coverImage})`}
              >
              <Box display="flex" flexDirection="column" >
                  <Text
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h={60}
                    zIndex={1}
                    m={5}
                    letterSpacing={2}
                    fontSize="25px"
                    fontFamily="Roboto"
                    fontWeight="semibold"
              >
                    {card.title}
                  </Text>
                  <Text
                    zIndex={1}
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
