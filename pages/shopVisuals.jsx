import React from "react";
import Image from "next/image";

// photo cosmetique https://unsplash.com/photos/_4gFW3mBRCc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// photo white book Photo by <a href="https://unsplash.com/@77hn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">The 77 Human Needs System</a> on <a href="https://unsplash.com/s/photos/manual?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// photo water journal Photo by <a href="https://unsplash.com/@waterjournal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Water Journal</a> on <a href="https://unsplash.com/s/photos/design-book?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// photo nft by Techyo-2050 https://opensea.io/collection/techyo-2050

// Import CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

//Import IMAGES
import nft from "../dist/img/techno.png";
import androSwitch from "../dist/img/androswitch.jpeg";
import cosmetik from "../dist/img/natasha-kendall.jpg";
import whiteBook from "../dist/img/the-77-human-needs-system.jpg";
// import whiteJournal from "../dist/img/water-journal--Evvseg.jpg";

// IMPORT ICONS
import { BsArrowBarRight } from "react-icons/bs";

//IMPORT COMPONENTS
import GetYours from "../components/GetYours";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

//INTERNAL COMPONENTS
const BigSingleTitleBlack = ({ title }) => (
  <>
    <Box className="bigSingleTitleBlack-section">
      <Flex
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mt={1}
      >
        <Text
          className="bigSingleTitleBlack-text"
          mt={[60, 80, 80]}
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

const shopVisuals = () => {
  return (
    <>
      <section className="shopVisuals-page">
        <Box>
          <BigSingleTitleBlack title="SHOP VISUALS" />
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
                Fully customized online shop.
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
                From minimalist layouts to more unusual designs.
              </Text>
            </Box>
          </Stack>

          <section className="shopVisuals-page-swiper-section">
            <Box mb={3}>
              <Swiper
                className="mySwiper"
                slidesPerView={1}
                loop={true}
                spaceBetween={30}
              >
                <SwiperSlide>
                  <Box
                    className="shopVisuals-swiper-box swiper-box-border"
                    w={"20rem"}
                    h={"33.75rem"}
                  >
                    <VStack>
                      <Image
                        src={cosmetik}
                        width={420}
                        height={560}
                        objectFit="cover"
                        alt="Visuals for Online-Shops"
                      />
                      {/* <hr className="shopVisuals-swiper-divider" /> */}
                      <Box>
                        <VStack>
                          <Box>
                            <Text className="slide-1-product-title" mt={5}>
                              Minimalist Design
                            </Text>
                          </Box>

                          <Box mt={2}>
                            <Text
                              className="slide-1-product-text"
                              textAlign="center"
                            >
                              Made for soft, milky
                              <br /> & <i> satisfying</i> vibes
                            </Text>
                          </Box>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>
                </SwiperSlide>

                <SwiperSlide>
                  <Box
                    className="shopVisuals-swiper-box swiper-box-shadow"
                    w={"20rem"}
                    h={"33.75rem"}
                  >
                    <VStack>
                      <Image
                        src={whiteBook}
                        width={420}
                        height={560}
                        objectFit="cover"
                        alt="Visuals for Online-Shops"
                      />
                      <hr className="shopVisuals-swiper-divider-shadow" />
                      <Box>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          textAlign="center"
                        >
                          <Box mt={3}>
                            <Text
                              className="slide-2-product-title"
                              width={"20rem"}
                            >
                              Floating Design
                            </Text>
                          </Box>

                          <Box mt={1}>
                            <Text
                              className="slide-2-product-text"
                              width={"15rem"}
                            >
                              Made for mist, pure
                              <br /> & cloudy vibes
                            </Text>
                          </Box>
                        </Stack>
                      </Box>
                    </VStack>
                  </Box>
                </SwiperSlide>

                <SwiperSlide>
                  <Box
                    className="shopVisuals-swiper-box swiper-box-neon"
                    w={"20rem"}
                    h={"33.75rem"}
                  >
                    <VStack>
                      <Image
                        src={nft}
                        width={420}
                        height={560}
                        objectFit="cover"
                        alt="Visuals for Online-Shops"
                      />

                      <Box m={2}>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          textAlign="center"
                        >
                          <Box mt={5}>
                            <Button className="slide-3-product-title">
                              CyberPunk Design
                            </Button>
                          </Box>

                          <Box>
                            <Text
                              className="slide-3-product-text"
                              width={"15rem"}
                              mt={2}
                            >
                              Made for neon, alien & vibrating vibes
                            </Text>
                          </Box>
                        </Stack>
                      </Box>
                    </VStack>
                  </Box>
                </SwiperSlide>

                <SwiperSlide>
                  <Box
                    className="shopVisuals-swiper-box swiper-box-acid"
                    w={"20rem"}
                    h={"33.75rem"}
                  >
                    <VStack>
                      <Box className="slide-4-img">
                        <Image
                          src={androSwitch}
                          width={420}
                          height={560}
                          objectFit="cover"
                          alt="Visuals for Online-Shops"
                        />
                      </Box>
                      <Box>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          textAlign="center"
                        >
                          <Box>
                            <Text className="slide-4-product-title" mt={3}>
                              Acidulous Design
                            </Text>
                          </Box>

                          <Box>
                            <Button
                              className="slide-4-product-text"
                              width={"15rem"}
                              mt={1}
                            >
                              <HStack>
                                <Text>Made for agitating vibes</Text>
                                <Icon
                                  as={BsArrowBarRight}
                                  color="#e4e5e9"
                                  boxSize={6}
                                />
                              </HStack>
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    </VStack>
                  </Box>
                </SwiperSlide>

                {/* <SwiperSlide>
                  <Box
                    className="shopVisuals-swiper-box and-more"
                    w={"20rem"}
                    h={"33.75rem"}
                  >
                    <Stack
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                    >
                      <Text
                        className="sell-page-title"
                        textAlign="center"
                        fontSize={["26px", "46px", "56px"]}
                        px={[6, 10, 10]}
                      >
                        & more
                      </Text>
                    </Stack>
                  </Box>
                </SwiperSlide> */}
              </Swiper>
            </Box>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="interior-project-bottom-swipe-box">
                <HStack>
                  <BsArrowLeftShort className="arrow-swipe-icon" size="30px" />
                  <Text className="interior-project-bottom-swipe-text">
                    swipe
                  </Text>
                  <BsArrowRightShort className="arrow-swipe-icon" size="30px" />
                </HStack>
              </Box>
            </Stack>
          </section>
        </Box>
      </section>
    </>
  );
};

export default shopVisuals;