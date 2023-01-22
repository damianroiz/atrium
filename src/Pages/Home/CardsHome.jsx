import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { benefitCards } from "./homeContent";

export const CardsHome = () => {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        justifyContent="center"
        flexWrap="wrap"
        gap={15}
        mt={50}
        mb={70}
      >
        {benefitCards.map((card) => (
          <Stack flexDirection="column" color="#fff">
            <Stack p={15}>
              <Box
                className={card.class}
                w={230}
                h={400}
                pt={30}
                bg={`center / cover no-repeat url(${card.coverImage})`}
              >
                <Box display="flex" flexDirection="column">
                  <Text
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h={60}
                    zIndex={1}
                    m={5}
                    letterSpacing={2}
                    fontSize={25}
                    fontFamily="Roboto"
                    fontWeight={500}
                  >
                    {card.title}
                  </Text>
                  <Text
                    zIndex={1}
                    m={0}
                    p={25}
                    letterSpacing={2}
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
