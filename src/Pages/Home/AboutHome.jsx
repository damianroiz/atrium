import React from "react";
import { Image, Stack, Box, Text } from "@chakra-ui/react";
import imagestaffhome from "../../assets/images/homepageStaffPhoto.jpg";
import "./home.css";

export const AboutHome = () => {
  return (
    <>
      <Stack justifyContent="center" alignItems="center">
        <Stack width={1200} justifyContent="center" alignContent="center">
          <Box>
            <Image width={1000} src={imagestaffhome} alt="Dan Abramov" />
          </Box>
          <Stack textAlign="left">
            <Text paddingTop={20} className="title">
              ABOUT ATRIUM PHYSIOTHERAPY
            </Text>
            <Text className="subtitle">
              We proudly provide quality, comprehensive Physiotherapy and
              Massage Therapy and Custom Crafted Orthotics
            </Text>
            <Text paddingTop={30} className="text">
              Atrium Physiotherapy looks to integrate customized physiotherapy
              treatment with injury prevention techniques to ensure overall
              musculoskeletal well being. Our mission is to treat immediate
              needs while providing a strengthening program that will speed up
              recovery and lead to long term health.
            </Text>
            <Text className="text" paddingTop="30px">
              You are in the right hands, experienced therapists you can trust,
              helping you towards an optimal well being.
            </Text>
          </Stack>
        </Stack>
        <Stack
          className="stackContainer"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          paddingTop="40px"
        >
          <Stack justifyContent="center" alignItems="center">
            <Stack
              flexDirection="row"
              justifyContent="center"
              alignItems="start"
            >
              <Box border="2px solid rgb(0, 93, 185)" padding="10px">
                <img
                  className="image-about-home"
                  src="https://cdn-icons-png.flaticon.com/512/4005/4005394.png"
                  width={35}
                />
              </Box>
              <Text
                paddingLeft="10px"
                className="text"
                position="relative"
                bottom="20px"
              >
                We integrate customized physiotherapy treatment with injury
                prevention techniques to ensure overall musculoskeletal well
                being
              </Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="center"
              alignItems="start"
            >
              <Box border="2px solid rgb(0, 93, 185)" padding="10px">
                <img
                  className="image-about-home"
                  src="https://cdn-icons-png.flaticon.com/512/110/110614.png"
                  width={35}
                />
              </Box>
              <Text
                paddingLeft="10px"
                className="text"
                position="relative"
                bottom="20px"
              >
                Physiotherapy modalities, Low Intensity Laser, deep tissue
                massage, active resistive strengthening techniques,
                proprioceptive rehabilitation and therapeutic exercise are just
                some of the scientifically based solutions we apply to our
                patients during their treatment plan.
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              textAlign="left"
              flexDirection="row"
              justifyContent="center"
              alignItems="start"
            >
              <Box border="2px solid rgb(0, 93, 185)" padding="10px">
                <img
                  className="image-about-home"
                  src="https://cdn-icons.flaticon.com/png/512/3070/premium/3070907.png?token=exp=1655415776~hmac=08811c736f72ce5851fae5b0b3570d7b"
                  width={35}
                />
              </Box>
              <Text
                paddingLeft="10px"
                className="text"
                position="relative"
                bottom="20px"
              >
                Our Physiotherapist combine a balanced approach after properly
                diagnosing the problem.
              </Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="center"
              alignItems="start"
            >
              <Box border="2px solid rgb(0, 93, 185)" padding="10px">
                <img
                  className="image-about-home"
                  src="https://cdn-icons-png.flaticon.com/512/7043/7043000.png"
                  width={35}
                />
              </Box>
              <Text
                paddingLeft="10px"
                className="text"
                position="relative"
                bottom="20px"
              >
                We believe that in order to maintain a pain free body it is
                necessary to understand a person's specific injury and prevent
                situations that might exacerbate or aggravate a condition.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Text
          className="text"
          width="1200px"
          p="40px 0 40px 0"
          textAlign="left"
        >
          At Atrium Physiotherapy we strive to educate our patients about their
          condition and collaborate in developing a realistic treatment plan.
          Our teams of Physiotherapists and Massage Therapist have exceptional
          credentials and some 20 years of experience with handling all types of
          musculoskeletal , and neurological issues.
        </Text>
      </Stack>
    </>
  );
};
