import React from "react";
import { Stack, Text, Image, Box } from "@chakra-ui/react";

export const Services_Content = (item) => {
  return (
    <Stack mt={80}>
      <Box
        textAlign="left"
        fontSize={18}
        p={(0, 150, 0, 150)}
        color="#2196f3" // blue tone
        justifyContent="justify"
      >
        <Text
          color="#1A2421" //Dark jungle green
          textAlign="left"
          letterSpacing={2}
          fontSize={18}
          fontWeight="500"
        >
          {item.title}
        </Text>
        <Text>{item.description}</Text>
      </Box>
      <Box>
        <Image mb={50} boxSize="450px" src={item.image} alt="Image" />
      </Box>
      {/* <Box pl={150} pr={150} mt={60}>
        <Text
          textAlign="left"
          fontSize={30}
          letterSpacing={2}
          fontWeight="bold"
        >
          {item.subtitle}
        </Text>
        <Text textAlign="left" fontSize={18} color="gray" letterSpacing={1}>
          {item.descriptionp7}
        </Text>
      </Box> */}
    </Stack>
  );
};
