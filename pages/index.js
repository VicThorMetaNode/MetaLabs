import Image from "next/image";
import Link from "next/link";
// Import CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  ButtonGroup,
  UnorderedList,
  ListItem,
  Button,
  Container,
} from "@chakra-ui/react";

//Import IMAGES

import ShopNode from "../dist/img/mockrocket-capture3.png";
import FanNode from "../dist/img/mockrocket-capture5.png";
import MarketingNode from "../dist/img/mockrocket-capture6.png";

//IMPORT COMPONENTS
import GetYours from "../components/GetYours";

//INTERNAL COMPONENTS
const TextBoxRight = ({ upTitle, title, text }) => (
  <Box className="textBox-main-section" mr={6}>
    <Stack direction="row">
      <Box>
        <Box className="textBox-section-upTitle" mb={2}>
          <Text className="textBox-upTitle" fontSize={["16px", "28px", "42px"]}>
            {" "}
            {upTitle}{" "}
          </Text>
        </Box>
        <hr className="textBox-line" />
        <Box className="textBox-section-title" mt={2}>
          <Text className="textBox-title" fontSize={["15px", "29px", "37px"]}>
            {title}
          </Text>
        </Box>
        <Box className="textBox-section-text" p={[1, 4, 6]}>
          <Text className="textBox-text" fontSize={["13px", "26px", "32px"]}>
            {" "}
            {text}{" "}
          </Text>
        </Box>
      </Box>
    </Stack>
  </Box>
);

const TextBoxLeft = ({ upTitle, title, text }) => (
  <Box className="textBox-main-section-left" ml={6}>
    <Stack direction="row">
      <Box>
        <Box className="textBox-section-upTitle-left" mb={2}>
          <Text className="textBox-upTitle" fontSize={["16px", "28px", "42px"]}>
            {" "}
            {upTitle}{" "}
          </Text>
        </Box>
        <hr className="textBox-line-left" />
        <Box className="textBox-section-title-left" mt={2}>
          <Text className="textBox-title" fontSize={["15px", "29px", "37px"]}>
            {title}
          </Text>
        </Box>
        <Box className="textBox-section-text-left" p={[1, 4, 6]}>
          <Text className="textBox-text" fontSize={["13px", "26px", "32px"]}>
            {" "}
            {text}{" "}
          </Text>
        </Box>
      </Box>
    </Stack>
  </Box>
);

const BigSingleTitleWhite = ({ title }) => (
  <Box className="bigSingleTitle-section">
    <Flex justifyContent="center" alignItems="center" mt={40}>
      <Text
        className="bigSingleTitle-text"
        mt={40}
        fontSize={["120px", "170px", "197px"]}
      >
        {title}
      </Text>
    </Flex>
  </Box>
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

const BulletPoint6 = ({
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
        fontSize={["26px", "36px", "46px"]}
      >
        {" "}
        {bullet1}{" "}
      </ListItem>
      <ListItem
        className="bulletPoint-item"
        fontSize={["26px", "36px", "46px"]}
      >
        {" "}
        {bullet2}{" "}
      </ListItem>
      <ListItem
        className="bulletPoint-item"
        fontSize={["26px", "36px", "46px"]}
      >
        {" "}
        {bullet3}{" "}
      </ListItem>
      <ListItem
        className="bulletPoint-item"
        fontSize={["26px", "36px", "46px"]}
      >
        {" "}
        {bullet4}{" "}
      </ListItem>
      <ListItem
        className="bulletPoint-item"
        fontSize={["26px", "36px", "46px"]}
      >
        {" "}
        {bullet5}{" "}
      </ListItem>
      <ListItem
        className="bulletPoint-item"
        fontSize={["26px", "36px", "46px"]}
      >
        {" "}
        {bullet6}{" "}
      </ListItem>
    </UnorderedList>
  </Flex>
);

export default function Home() {
  return (
    <>
      <section className="landing-page">
        <Box className="landing-page-header" ml={3}>
          <Box
            className="landing-page-section-upTitle"
            px={[2, 6, 8]}
            mb={[10, 20, 20]}
            mt={[20, 20, 20]}
          >
            <Text
              className="landing-page-upTitle"
              fontSize={["23px", "28px", "34px"]}
            >
              decentralize yourself
            </Text>
          </Box>
          <Box>
            <Flex>
              <Box className="landing-page-section-title" px={[2, 6, 8]}>
                <Text
                  className="landing-page-title"
                  fontSize={["55px", "70px", "82px"]}
                >
                  Web-Services for typical agitators
                </Text>
              </Box>
              {/* <Box backgroundColor="red">
                <Image
                  src={ImpactImage}
                  alt="impactful image mobile"
                  width="200x"
                  height="180px"
                />
              </Box> */}
            </Flex>
            <Box className="landing-page-section-subtitle" px={[2, 6, 8]}>
              <Text
                className="landing-page-subtitle"
                fontSize={["17px", "23px", "30px"]}
              >
                mobile-first features for rebel creators & unorthodox community
                builders
              </Text>
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <Link href="/get">
                <button className="btn-get-black">get</button>
              </Link>
            </Box>
          </Box>
        </Box>
        <section className="landing-page-boxes-section">
          <Stack
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <TextBoxRight
                upTitle="ONLINE SHOP"
                title="Get full ownership of your e-commerce."
                text="Full access of the source code. Make sales using Paypal and Metamask to get paid in cryptos. Keep your customers data protected
          & more."
              />
              <Stack
                direction="row"
                justifyContent="right"
                alignItems="right"
                mt={4}
                mr={6}
              >
                <ButtonGroup gap={[2, 4]}>
                  <Link href="/shopVisuals">
                    <Button className="btn-visuals" size={["xs", "sm", "xl"]}>
                      Visuals
                    </Button>
                  </Link>
                  <Link href="/sell">
                    <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                      Read More
                    </Button>
                  </Link>
                </ButtonGroup>
              </Stack>
            </Box>

            <Box>
              <TextBoxLeft
                upTitle="ONLINE ART"
                title="Sell your art without censorship or restriction."
                text="Sell your art on the blockchain and never get your art censored or deleted ever again. Keep your privacy safe. Make sales in cryptos on your private wallet
         & more."
              />
              <Stack
                direction="row"
                justifyContent="left"
                alignItems="left"
                mt={4}
                ml={6}
                mb={40}
              >
                <ButtonGroup gap={[4, 2]}>
                  <Link href="/sell">
                    <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                      Read More
                    </Button>
                  </Link>
                  <Link href="/artVisuals">
                    <Button className="btn-visuals" size={["xs", "sm", "xl"]}>
                      Visuals
                    </Button>
                  </Link>
                </ButtonGroup>
              </Stack>
            </Box>

            <Box>
              <TextBoxRight
                upTitle="only fans"
                title="Give your audience access to personalized content."
                text="Get paid monthly by offering your community specific content: private sales, fan art, & more. 
            A simple and efficient way to fund your various projects."
              />
              <Stack
                direction="row"
                justifyContent="right"
                alignItems="right"
                mt={4}
                mr={6}
              >
                <ButtonGroup gap={[2, 4]}>
                  <Link href="/fansVisuals">
                    <Button className="btn-visuals" size={["xs", "sm", "xl"]}>
                      Visuals
                    </Button>
                  </Link>
                  <Link href="/grow">
                    <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                      Read More
                    </Button>
                  </Link>
                </ButtonGroup>
              </Stack>
            </Box>
          </Stack>
        </section>
        <Box>
          <BigSingleTitleWhite title="sell" />
        </Box>
        <section className="bulletPoint-Main-Section">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box className="img-shopNode">
              <Image
                width="420px"
                height="560px"
                objectFit="cover"
                src={ShopNode}
                alt="service e-commerce"
              />
            </Box>
            <Box className="landing-page-bullet-div1">
              <BulletPoint5
                bullet1="full ownership"
                bullet2="full privacy"
                bullet3="no censorship"
                bullet4="no charges on sales"
                bullet5="latest technologies"
              />
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <Link href="/sell">
                <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                  discover
                </Button>
              </Link>
            </Box>
          </Stack>
        </section>
        <Box>
          <BigSingleTitleWhite title="grow" />
        </Box>
        <section className="bulletPoint-Main-Section">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box className="img-shopNode">
              <Image
                width="420px"
                height="560px"
                objectFit="cover"
                src={FanNode}
                alt="service e-commerce"
              />
            </Box>
            <Box className="landing-page-bullet-div1">
              <BulletPoint5
                bullet1="full ownership"
                bullet2="full control"
                bullet3="donations in cryptos"
                bullet4="no charges on sales"
                bullet5="latest security protocols"
              />
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <Link href="/grow">
                <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                  discover
                </Button>
              </Link>
            </Box>
          </Stack>
        </section>
        <Box>
          <BigSingleTitleWhite title="seo" />
        </Box>
        <section className="bulletPoint-Main-Section">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box className="img-shopNode">
              <Image
                width="420px"
                height="560px"
                objectFit="cover"
                src={MarketingNode}
                alt="service e-commerce"
              />
            </Box>
            <Box className="landing-page-bullet-div1">
              <BulletPoint5
                bullet1="marketing consultancy"
                bullet2="identify main audience"
                bullet3="copywriting"
                bullet4="seo - sem tactics"
                bullet5="& much more"
              />
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <Link href="/contact">
                <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                  contact
                </Button>
              </Link>
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
}
