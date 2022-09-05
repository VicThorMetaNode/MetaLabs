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

import FanNode from "../dist/img/mockrocket-capture4.png";
import ArtNode from "../dist/img/mockrocket-capture9.png";

//IMPORT COMPONENTS
import GetYours from "../components/GetYours";

//INTERNAL COMPONENTS
const BigSingleTitleBlack = ({ title }) => (
  <>
    <Box className="bigSingleTitleBlack-section">
      <Flex justifyContent="center" alignItems="center" mt={1}>
        <Text
          className="bigSingleTitleBlack-text"
          mt={40}
          fontSize={["120px", "170px", "197px"]}
        >
          {title}
        </Text>
      </Flex>
    </Box>
  </>
);

const TextBoxLeft = ({ upTitle, text }) => (
  <>
    <Box className="sell-textBox-main-section-left" ml={[3, 4, 6]}>
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

          <Box className="sell-textBox-section-text-left" mt={4} p={[0, 4, 6]}>
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

const TextBoxRight = ({ upTitle, text }) => (
  <>
    <Box className="sell-textBox-main-section-right" mr={[3, 4, 6]}>
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

          <Box className="sell-textBox-section-text-right" p={[0, 4, 6]} mt={4}>
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

const BulletPoint5 = ({
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet5,
  bullet6,
}) => (
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
    </UnorderedList>
  </Flex>
);

const grow = () => {
  return (
    <>
      <section className="sell-page">
        <Box>
          <BigSingleTitleBlack title="grow" />
        </Box>
        <Box mt={10}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Container>
              <Text
                className="sell-page-title"
                textAlign="center"
                fontSize={["26px", "46px", "56px"]}
              >
                Get your very own OnlyFans platform.
              </Text>
            </Container>
            <Box>
              <Text
                className="sell-page-subText"
                textAlign="center"
                fontSize={["18px", "36px", "46px"]}
                p={4}
              >
                Artists and content creators deploy your own{" "}
                <span className="text-bold-600">fan-based</span> platform and
                get financial support every month{" "}
                <span className="text-bold-600">now</span>.
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
                src={FanNode}
                alt="service e-commerce"
              />
            </Stack>
          </Box>
        </section>
        <section className="sell-page-alt-text">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <TextBoxLeft
                upTitle="membership"
                text="Give access to customized and special contents to your fans and supporters. Take full control of membership price and your users base. The new way of financing your projects. "
              />
            </Box>
            <Box>
              <TextBoxRight
                upTitle="cryptos payout"
                text="Get paid in crypto. Let your fans choose in which crypto they want to pay. Fully anonymous & secure, using the most advanced payment platform available: MetaMask. No subscription charge !"
              />
            </Box>
            <Box>
              <TextBoxLeft
                upTitle="latest technologies"
                text="Fully built with MongoDB, ExpressJS, ReactJS, NextJS, NodeJS, SasS & more.
                Using multi-level middleware, encryption protocols to keep everything fully secure and private."
              />
            </Box>
          </Stack>
        </section>
        <Box>
          <BigSingleTitleBlack title="esc" />
        </Box>
        <section className="fight-section">
          <Box mt={10}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Container>
                <Text
                  className="sell-page-title"
                  textAlign="center"
                  fontSize={["26px", "46px", "56px"]}
                >
                  Escape the <span className="text-overwrite">centralized</span>{" "}
                  system.
                </Text>
              </Container>
              <Box>
                <Text
                  className="sell-page-subText"
                  textAlign="center"
                  fontSize={["18px", "36px", "46px"]}
                  p={4}
                >
                  Say goodbye to subscription fees when sharing your content to
                  your fans. Stop giving away 20% of your sales to OnlyFans and
                  pretending not knowing that they own your content forever.
                  <br />{" "}
                  <span className="text-bold-600">Take the power back !</span>
                </Text>
              </Box>
            </Stack>
          </Box>
        </section>
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
                src={ArtNode}
                alt="service e-commerce"
              />
            </Stack>
          </Box>
        </section>
        <section className="sell-page-alt-text">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <TextBoxRight
                upTitle="no restriction"
                text="Deploy your only fans platform on the blockchain and get the full control to your content back. Set the rules, set the price, manage the subscriptions & more under no restrictions. "
              />
            </Box>
          </Stack>
        </section>
        <section className="bulletpoints-section">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            mt={20}
          >
            <Box>
              <Text
                className="sell-page-subText"
                textAlign="center"
                fontSize={["18px", "36px", "46px"]}
                p={4}
              >
                {" "}
                <span className="text-bold-600">OnlyFans</span>
              </Text>
            </Box>
            <Box pl={2}>
              <BulletPoint5
                bullet1="20% of charge on subscription"
                bullet2="You can’t charge less than $4.99 or more than $49.99"
                bullet3="They have ownership of your content forever"
                bullet4="OnlyFans can shut your account down  overnight or ban you from their platform for any reason"
                bullet5="They don’t protect the data of your subscribers"
              />
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                read more
              </Button>
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

export default grow;
