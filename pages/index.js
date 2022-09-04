import Image from "next/image";
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
} from "@chakra-ui/react";

//Import IMAGES

import ShopNode from "../dist/img/mockrocket-capture3.png";
import FanNode from "../dist/img/mockrocket-capture5.png";
import MarketingNode from "../dist/img/mockrocket-capture6.png";

//IMPORT COMPONENTS
import GetYours from "../components/GetYours";

//INTERNAL COMPONENTS
const TextBoxRight = ({ upTitle, title, text }) => (
  <Box className="textBox-main-section" mr={[2, 4, 6]}>
    <Stack direction="row">
      <Box>
        <Box className="textBox-section-upTitle" mb={2}>
          <Text className="textBox-upTitle"> {upTitle} </Text>
        </Box>
        <hr className="textBox-line" />
        <Box className="textBox-section-title" mt={2}>
          <Text className="textBox-title">{title}</Text>
        </Box>
        <Box className="textBox-section-text" p={[1, 4, 6]}>
          <Text className="textBox-text"> {text} </Text>
        </Box>
      </Box>
    </Stack>

    <Stack direction="row" justifyContent="right" alignItems="right" mt={4}>
      <ButtonGroup gap={[2, 4]}>
        <Button className="btn-visuals" size={["xs", "sm", "xl"]}>
          Visuals
        </Button>
        <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
          Read More
        </Button>
      </ButtonGroup>
    </Stack>
  </Box>
);

const TextBoxLeft = ({ upTitle, title, text }) => (
  <Box className="textBox-main-section-left" ml={[3, 4, 6]}>
    <Stack direction="row">
      <Box>
        <Box className="textBox-section-upTitle-left" mb={2}>
          <Text className="textBox-upTitle"> {upTitle} </Text>
        </Box>
        <hr className="textBox-line-left" />
        <Box className="textBox-section-title-left" mt={2}>
          <Text className="textBox-title">{title}</Text>
        </Box>
        <Box className="textBox-section-text-left" p={[1, 4, 6]}>
          <Text className="textBox-text"> {text} </Text>
        </Box>
      </Box>
    </Stack>

    <Stack direction="row" justifyContent="left" alignItems="left" mt={4}>
      <ButtonGroup gap={[4, 2]}>
        <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
          Read More
        </Button>
        <Button className="btn-visuals" size={["xs", "sm", "xl"]}>
          Visuals
        </Button>
      </ButtonGroup>
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
          <Box className="landing-page-section-upTitle" px={4}>
            <Text className="landing-page-upTitle">Decentralize Yourself</Text>
          </Box>
          <Box>
            <Flex>
              <Box className="landing-page-section-title" px={[4]}>
                <Text className="landing-page-title">your own online shop</Text>
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
            <Box className="landing-page-section-subtitle" px={4}>
              <Text
                className="landing-page-subtitle"
                fontSize={["xl", "2xl", "auto"]}
              >
                mobile-first features for sellers & community builders
              </Text>
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <button className="btn-get-black">get</button>
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
                title="Get full ownership of your online commerce."
                text="Get full ownership of the source code. Make sales using Paypal and Metamask to get paid in cryptos. Keep your customers data protected.
          & more."
              />
            </Box>
            <Box>
              <TextBoxLeft
                upTitle="ONLINE ART"
                title="Sell your art without censorship or restriction."
                text="Sell your art on the blockchain and never get your art censored or deleted ever again. Keep your privacy safe. Make sales in cryptos on your private wallet.
         & more."
              />
            </Box>
            <Box>
              <TextBoxRight
                upTitle="only fans"
                title="Give your audience access to personalized content."
                text="Get paid monthly by offering your community specific content: private sales, fan art, and more. 
            A simple and efficient way to fund your various projects."
              />
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
                width="600px"
                height="700px"
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
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                discover
              </Button>
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
                width="600px"
                height="780px"
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
                bullet4="no charges memberships"
                bullet5="latest security protocols"
              />
            </Box>
            <Box className="landing-page-section-btn" px={4}>
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                discover
              </Button>
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
                width="600px"
                height="700px"
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
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                discover
              </Button>
            </Box>
          </Stack>
        </section>
        <section>
          <Box>
            <GetYours />
          </Box>
        </section>
      </section>
    </>
  );
}
