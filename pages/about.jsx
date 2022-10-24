import React from "react";
import Image from "next/image";

// Import CHAKRA tools
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

//Import IMAGES
// import Dago1 from "../dist/img/dago1.jpg";
// import Dago2 from "../dist/img/dago2.jpg";
// import Dago3 from "../dist/img/dago3.jpeg";
import Dago4 from "../dist/img/dago4.jpg";
// import Dago5 from "../dist/img/dago5.jpg";
// import Dago6 from "../dist/img/dago6.jpg";
// import Dago7 from "../dist/img/dago7.jpg";

//IMPORT COMPONENTS
import GetYours from "../components/GetYours";

//INTERNAL COMPONENTS
const BigSingleTitleBlack = ({ title }) => (
  <>
    <Box className="bigSingleTitleBlack-section">
      <Flex justifyContent="center" alignItems="center" mt={1}>
        <Text
          className="bigSingleTitleBlack-text"
          mt={80}
          fontSize={["120px", "170px", "197px"]}
        >
          {title}
        </Text>
      </Flex>
    </Box>
  </>
);

const about = () => {
  return (
    <>
      <section className="about-page">
        <Box>
          <BigSingleTitleBlack title="about" />
        </Box>
        <hr className="about-hr" />

        <Box mt={10}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <Text
                className="sell-page-title white"
                textAlign="center"
                fontSize={["26px", "46px", "56px"]}
                px={[6, 10, 10]}
              >
                Aloha, <br /> I’m VicThor, <br />
                Web Developer
              </Text>
            </Box>
            <Box>
              <Text
                className="sell-page-subText white"
                textAlign="center"
                fontSize={["20px", "36px", "46px"]}
                px={[6, 10, 10]}
                mt={4}
              >
                Full Stack Web Dev - Online Business Dev - Decentralize
                Activist.
              </Text>
            </Box>
          </Stack>
        </Box>
        <section className="sell-page-img-section">
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              my={20}
            >
              <Image
                width="320px"
                height="520px"
                objectFit="cover"
                src={Dago4}
                className="about-img "
                alt="picture of me"
              />
            </Stack>
          </Box>
        </section>
        <section className="sell-page-alt-text">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            mb={20}
          >
            <Box>
              <Text
                className="sell-page-subText white"
                textAlign="left"
                fontSize={["20px", "36px", "46px"]}
                px={[6, 10, 10]}
                mt={4}
              >
                Art lover and business development enthusiast, specialized in
                online-shop websites creation. <br /> <br />
                After graduating from a British business school in London, I
                have worked with young entrepreneurs to help them develop a
                variety of commercial projects.
                <br /> <br />
                As an entrepreneur, I have worked in a vast spectrum of sectors,
                from the opening of a Danish furniture gallery to the launch of
                an Urban Farm.
                <br /> <br />
                Since the beginning of my journey as a freelance developer, I've
                done remote and on-site work with companies & startups, and
                collaborated with talented people to create web services for
                both business and consumer use.
                <br /> <br />
                Today, I create powerful mobile-first websites built with the
                best practices and the latest technologies to keep them
                easy-to-use, customer-based, fast and fully secured. <br />
                <br />
                My services are intended for artists who are likely to be
                censored or banned from conventional platforms. <br />
                Together, we cross the bridge to the decentralized world, to
                make sure they keep their ideas flowing without any
                restrictions, in the name of free speech and personal freedom.
              </Text>
            </Box>
          </Stack>
        </section>
        <hr className="footer-hr" />
        <section className="getYours-section">
          <GetYours />
        </section>
      </section>
    </>
  );
};

export default about;
