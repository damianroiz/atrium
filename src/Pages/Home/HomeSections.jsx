import React from "react";
import { BenefitCards, AboutUsContent } from "./home_content";
import "../../styles.css";
import staffImage from "../../../src/assets/images/staff-photo.jpg";

export const HomeCards = () => {
  return (
    <>
      <div
        direction={["column", "row"]}
        justifyContent="center"
        flexWrap="wrap"
        gap={15}
        mt={50}
        mb={70}
      >
        {BenefitCards.map((card) => (
          <div key={card.id} flexDirection="column" color="#fff">
            <div p={15}>
              <div
                className="card"
                w={230}
                h={400}
                pt={30}
                bg={`center / cover no-repeat url(${card.coverImage})`}
              >
                <div display="flex" flexDirection="column">
                  <p
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
                  </p>
                  <p
                    zIndex={1}
                    m={0}
                    p={25}
                    letterSpacing={2}
                    lineHeight={1.4}
                    fontFamily="Roboto"
                    fontWeight={500}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const AboutUs = () => {
  return (
    <>
      <div>
        <div>
          <img
            maxWidth={1200}
            width="100%"
            height="100%"
            src={
              staffImage
            } /* /Users/damiancoz/Sites/atrium/src/assets/images/staff-photo.jpg */
            alt="staff image"
          />
        </div>
        <div maxWidth={1200} borderColor="red" borderWidth="10px">
          <p
            p={30}
            fontFamily="Crimson text, Georgia, Cambria, serif"
            fontSize="4em"
            color="#262B2F"
          >
            {AboutUsContent.title}
          </p>
          <div
            maxW="1020px"
            fontSize="1.5rem"
            fontFamily="Fira Sans, Droid Sans, Century, sans-serif"
            color="#262B2F"
            pl={40}
            pr={40}
            spacing={20}
            lineHeight={1.3}
          >
            <p>{AboutUsContent.subtitle1}</p>
            <p>{AboutUsContent.subtitle2}</p>
          </div>
          <div
            paddingBlock="40"
            color="#1A2228"
            fontSize="1.25rem"
            textAlign="left"
            maxW="70%"
            fontFamily="Poppins, Roboto, Arial Narrow, sans-serif"
            spacing={20}
          >
            <p>{AboutUsContent.paragraph1}</p>
            <p>{AboutUsContent.paragraph2}</p>
            <p width="inherit">{AboutUsContent.paragraph3}</p>
            <p>{AboutUsContent.paragraph4}</p>
            <p>{AboutUsContent.paragraph5}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const MissionBanner = () => {
  return (
    <div className="banner-container">
      <div className="text-banner">
        <h2>We Provide High Quality Services</h2>
        <p>
          We believe that in order to maintain a pain free body it is necessary
          to understand a person's specific injury and prevent situations that
          might exacerbate or aggravate a condition.
        </p>
      </div>
      <div>
        <button className="appointment-btn">Book Your Appoinment</button>
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
