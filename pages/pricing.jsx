import React from "react";
import Image from "next/image";
// Import CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Container,
} from "@chakra-ui/react";

//Import IMAGES

import BuildNodes from "../dist/img/mockrocket-capture11.png";

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

const TextBoxRight = ({ upTitle, text }) => (
  <>
    <Box className="sell-textBox-main-section-right" mr={6}>
      <Stack direction="row">
        <Box>
          <Box className="sell-textBox-section-upTitle-right" mb={2}>
            <Text
              className="sell-textBox-upTitle-right"
              fontSize={["16px", "28px", "42px"]}
            >
              {" "}
              {upTitle}{" "}
            </Text>
          </Box>
          <hr className="sell-textBox-line-right" />

          <Box className="sell-textBox-section-text-right" p={[1, 4, 6]} mt={4}>
            <Text
              className="sell-textBox-text-right"
              fontSize={["13px", "26px", "32px"]}
            >
              {" "}
              {text}{" "}
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  </>
);

const TextBoxRightWhite = ({ upTitle, text }) => (
  <>
    <Box className="sell-textBox-main-section-right " mr={6}>
      <Stack direction="row">
        <Box>
          <Box className="sell-textBox-section-upTitle-right" mb={2}>
            <Text
              className="sell-textBox-upTitle-right text-white"
              fontSize={["16px", "28px", "42px"]}
            >
              {" "}
              {upTitle}{" "}
            </Text>
          </Box>
          <hr className="sell-textBox-line-right hr-white" />

          <Box className="sell-textBox-section-text-right" p={[1, 4, 6]} mt={4}>
            <Text
              className="sell-textBox-text-right text-white"
              fontSize={["13px", "26px", "32px"]}
            >
              {" "}
              {text}{" "}
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  </>
);

const TextBoxLeftWhite = ({ upTitle, text }) => (
  <>
    <Box className="sell-textBox-main-section-left" ml={6}>
      <Stack direction="row">
        <Box>
          <Box className="sell-textBox-section-upTitle-left" mb={2}>
            <Text
              className="sell-textBox-upTitle text-white"
              fontSize={["16px", "28px", "42px"]}
            >
              {" "}
              {upTitle}{" "}
            </Text>
          </Box>
          <hr className="sell-textBox-line-left hr-white" />

          <Box
            className="sell-textBox-section-text-left text-white"
            mt={4}
            p={[1, 4, 6]}
          >
            <Text
              className="sell-textBox-text"
              fontSize={["13px", "26px", "32px"]}
            >
              {" "}
              {text}{" "}
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  </>
);

const TextBoxLeft = ({ upTitle, text }) => (
  <>
    <Box className="sell-textBox-main-section-left" ml={6}>
      <Stack direction="row">
        <Box>
          <Box className="sell-textBox-section-upTitle-left" mb={2}>
            <Text
              className="sell-textBox-upTitle"
              fontSize={["16px", "28px", "42px"]}
            >
              {" "}
              {upTitle}{" "}
            </Text>
          </Box>
          <hr className="sell-textBox-line-left" />

          <Box className="sell-textBox-section-text-left" mt={4} p={[1, 4, 6]}>
            <Text
              className="sell-textBox-text"
              fontSize={["13px", "26px", "32px"]}
            >
              {" "}
              {text}{" "}
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  </>
);

const BulletPoint7 = ({
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet6,
  bullet7,
  bullet5,
}) => (
  <Container>
    <Flex justifyContent="center" alignItems="center">
      <UnorderedList mb={6} p={4}>
        <ListItem
          className="bulletPoint-item"
          fontSize={["18px", "36px", "46px"]}
        >
          {" "}
          {bullet1}{" "}
        </ListItem>
        <ListItem
          className="bulletPoint-item"
          fontSize={["18px", "36px", "46px"]}
        >
          {bullet2}
        </ListItem>
        <ListItem
          className="bulletPoint-item"
          fontSize={["18px", "36px", "46px"]}
        >
          {" "}
          {bullet3}{" "}
        </ListItem>
        <ListItem
          className="bulletPoint-item"
          fontSize={["18px", "36px", "46px"]}
        >
          {" "}
          {bullet4}{" "}
        </ListItem>
        <ListItem
          className="bulletPoint-item"
          fontSize={["18px", "36px", "46px"]}
        >
          {" "}
          {bullet5}{" "}
        </ListItem>
        <ListItem
          className="bulletPoint-item"
          fontSize={["18px", "36px", "46px"]}
        >
          {" "}
          {bullet6}{" "}
        </ListItem>
        <ListItem
          className="bulletPoint-item"
          fontSize={["18px", "36px", "46px"]}
        >
          {" "}
          {bullet7}{" "}
        </ListItem>
      </UnorderedList>
    </Flex>
  </Container>
);

const pricing = () => {
  return (
    <>
      <section className="pricing-page">
        <Box>
          <BigSingleTitleBlack title="flex" />
        </Box>

        <Box mt={10}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <Text
                className="sell-page-title"
                textAlign="center"
                fontSize={["26px", "46px", "56px"]}
                px={[6, 10, 10]}
              >
                Flexible prices for specific missions.
              </Text>
            </Box>
            <Box>
              <Text
                className="sell-page-subText"
                textAlign="center"
                fontSize={["20px", "36px", "46px"]}
                px={[6, 10, 10]}
                mt={4}
              >
                Only pay for what your project requires. Set the goals, set the
                rules, set the targets & more.
                <br />
                You are in control !
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
            >
              <Image
                width="600px"
                height="700px"
                objectFit="cover"
                src={BuildNodes}
                alt="service e-commerce"
              />
            </Stack>
          </Box>
        </section>
        <section className="bulletpoints-section">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            mt={20}
            mb={40}
          >
            <Box pl={2}>
              <BulletPoint7
                bullet1="Building websites from A to Z with any features required"
                bullet2="From 3-month to 12-month contract renewable every 3 months"
                bullet3="Payment in monthly instalments"
                bullet4="You own the source code of the website for the very beginning"
                bullet5="No extra cost or fees"
                bullet6="Basic SEO included"
                bullet7="& more"
              />
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                Contact
              </Button>
            </Box>
          </Stack>
        </section>
        <section className="black-bg-section">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box mt={20}>
              <Text
                className="sell-page-subText-white"
                textAlign="center"
                fontSize={["18px", "36px", "46px"]}
                p={4}
              >
                {" "}
                <span className="text-bold-600 stressed-white">
                  Building Steps
                </span>
              </Text>
            </Box>
            <Box>
              <TextBoxLeftWhite
                upTitle="SET THE STAGE"
                text="We work on the design together using Figma: 
                a powerful design system. We define the website's purposes, the graphic charter, themes & more."
              />
            </Box>
            <Box>
              <TextBoxRightWhite
                upTitle="CONSTRUCTION"
                text="The cloning of what has been defined on Figma using the latest and most advanced technologies on the market."
              />
            </Box>
            <Box>
              <TextBoxLeftWhite
                upTitle="OPTIMIZATION"
                text="Based user experience, optimization includes the integration of new functionalities, marketing adaptation, & more."
              />
            </Box>
          </Stack>
        </section>
        <section className="white-bg-section">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box mt={20}>
              <Text
                className="sell-page-subText-white"
                textAlign="center"
                fontSize={["18px", "36px", "46px"]}
                p={4}
              >
                {" "}
                <span className="text-bold-600 stressed-black">Work Ethic</span>
              </Text>
            </Box>
            <Box>
              <TextBoxLeft
                upTitle="Autonomy"
                text="Primary mission is to make you autonomous asap.
                Anything related to your website is yours, with no exception. You hold the source code, domain names, passwords, etc."
              />
            </Box>
            <Box>
              <TextBoxRight
                upTitle="Privacy"
                text="All alternatives to the web giants are used and tracked relentlessly. 
                I am adamant about this. We will not give up anything to the opponents."
              />
            </Box>
            <Box>
              <TextBoxLeft
                upTitle="Security"
                text="Nothing is left at random. The best security protocols are used and tested to ensure that the website is up to standard and unassailable."
              />
            </Box>
          </Stack>
        </section>
        <section className="getYours-section">
          <Box>
            <GetYours />
          </Box>
        </section>
      </section>
    </>
  );
};

export default pricing;
