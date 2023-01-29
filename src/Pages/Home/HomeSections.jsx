import React from "react";
import { Image, Stack, Box, Text, VStack, HStack } from "@chakra-ui/react";
import { benefitCards, AboutUsContent } from "./HomeContent";
import '../../style.css'

export const HomeCards = () => {
  return (
    <>
      <Stack
        direction={["column", "row"]}
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
                    fontFamily="roboto"
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

export const AboutUs = () => {
  return (
    <>
      <VStack>
          <Box>
            <Image maxWidth={1000} width="100%" height="100%" src={`src/assets/images/${AboutUsContent.image}`} alt="staff image" />
          </Box>
          <VStack maxWidth={1200}>
          <Text p={30} fontFamily="Crimson Text, Georgia, Cambria, serif" fontSize="4em" color="#262B2F">
              {AboutUsContent.title}
            </Text>
            <VStack fontSize="1.5rem" fontFamily="Fira Sans, Droid Sans, Century, sans-serif" color="#262B2F" pl={40} pr={40} spacing={20} lineHeight={1.3}>
            <Text>
              {AboutUsContent.subtitle1}
            </Text>
            <Text>
              {AboutUsContent.subtitle2}
            </Text>
            </VStack>
            <VStack paddingBlock="40" pl={60} pr={60} color="#1A2228" fontSize="1.25rem" textAlign="left" width="100%" fontFamily="Poppins, Roboto, Arial Narrow, sans-serif" spacing={20}>
                <Text>
                {AboutUsContent.paragraph1}
                </Text>
                <Text>
                  {AboutUsContent.paragraph2}
                </Text>
                <Text width="inherit">
                {AboutUsContent.paragraph3}
                </Text>
                <Text>
                {AboutUsContent.paragraph4}
                </Text>
            </VStack>         
            <Text pl={30} pr={30} pb={40} color="#1A2228" fontSize="1.25rem" textAlign="left" fontFamily="Poppins, Roboto, Arial Narrow, sans-serif">
              {AboutUsContent.paragraph5}
            </Text>
          </VStack>         
      </VStack>
    </>  
  );
};

export const MissionBanner = () => {
  return (
    <div className="banner-container">
        <div className="text-banner">
          <h2>We Provide High Quality Services</h2>
          <p>
            We believe that in order to maintain a pain free body it is
            necessary to understand a person's specific injury and prevent
            situations that might exacerbate or aggravate a condition.
          </p>
        </div>
        <div>
          <button className="appointment-btn">
            Book Your Appoinment
          </button>
        </div>
      </div>
  );
};

export const Reviews = () => {
  return (
    <div className="reviews">
      <div className="elfsight-app-7c8824c3-96b9-4222-ab5c-f8f827c1feaa reviewbox review_google"></div>
    </div>
  );
};
