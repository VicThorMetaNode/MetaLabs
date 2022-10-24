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

import ShopNode from "../dist/img/mockrocket-capture10.png";
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

const BulletPoint5 = ({ bullet1, bullet2, bullet3, bullet4, bullet5 }) => (
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
      </UnorderedList>
    </Flex>
  </Container>
);

const sell = () => {
  return (
    <>
      <section className="sell-page">
        <Box>
          <BigSingleTitleBlack title="sell" />
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
                Get your very own online shop.
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
                Artists and insurgents of all kinds, get your own{" "}
                <span className="text-bold-600">customer-based</span> online
                shop to sell your artwork, your products
                <br />& more.
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
                width="420px"
                height="560px"
                objectFit="cover"
                src={ShopNode}
                alt="service e-commerce"
              />
            </Stack>
          </Box>
        </section>
        <section className="sell-page-alt-text">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <TextBoxLeft
                upTitle="full control"
                text="Get full ownership of your website's source code. Protect your data and those of your customers. Create your own rules & manage everything like never before."
              />
            </Box>
            <Box>
              <TextBoxRight
                upTitle="payout options"
                text="Make sales in any currency efficiently and safely using the Paypal platform. Decentralize yourself opening your web-store on the blockchain and get paid in cryptos using the most advanced and most secured Metamask Wallet.  "
              />
            </Box>
            <Box>
              <TextBoxLeft
                upTitle="latest technologies"
                text="Fully built with Sanity, Stripe, MongoDB, ExpressJS, NextJS, NodeJS, SasS & more.
                Using multi-level middleware, encryption protocols to keep everything fully secure and private."
              />
            </Box>
          </Stack>
        </section>
        <Box>
          <BigSingleTitleBlack title="fight" />
        </Box>
        <section className="fight-section">
          <Box mt={10}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Text
                  className="sell-page-title"
                  textAlign="center"
                  fontSize={["26px", "46px", "56px"]}
                  px={[6, 10, 10]}
                >
                  Fight the <span className="text-overwrite">centralized</span>{" "}
                  system.
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
                  Say goodbye to monthly fees to host your website on Wix or
                  Shopify. Stop paying them{" "}
                  <span className="text-bold-600">sales fees</span> and
                  pretending not knowing that those companies sell your clients
                  data and yours.
                  <br />{" "}
                  <span className="text-bold-600">Take the power back !</span>
                </Text>
              </Box>
            </Stack>
          </Box>
        </section>
        <section className="sell-page-img-section">
          <Box my={10}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                width="420px"
                height="560px"
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
                upTitle="no extra fees"
                text="Wix & Shopify make up to 20% on your sales and can influence algorithm of their platforms to force you to pay for upgrades.
                Free yourself. Get your own online commerce. "
              />
            </Box>
            <Box>
              <TextBoxLeft
                upTitle="no censorship"
                text="Deploy your web-shop on the blockchain and never be banned or censored ever again ! Own the source code of your website so you can make any upgrades or updates with no restriction. "
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
                <span className="text-bold-600">Wix & Shopify</span>
              </Text>
            </Box>
            <Box pl={2}>
              <BulletPoint5
                bullet1="Up to 900€/year just for using their platform"
                bullet2="Up to 20% of charge on sales"
                bullet3="They have ownership of your website"
                bullet4="They can shut it down overnight or ban you from their platform for any reason"
                bullet5="They can make what they want with your data and those of your customers"
              />
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <a
                href="https://www.websitebuilderexpert.com/website-builders/comparisons/wix-vs-wordpress/"
                target="_blank"
              >
                <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                  read more
                </Button>
              </a>
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

export default sell;
