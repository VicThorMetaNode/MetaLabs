import React from "react";
import Image from "next/image";

// Import CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Container,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

//Import IMAGES
import ShopNode from "../dist/img/mockrocket-capture10.png";
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
                  <Box className="shopVisuals-swiper-box swiper-box-border">
                    <VStack>
                      <Image
                        src={ShopNode}
                        width={420}
                        height={560}
                        objectFit="cover"
                        alt="Visuals for Online-Shops"
                      />
                      <hr className="shopVisuals-swiper-divider" />
                      <Box m={2}>
                        <VStack>
                          <Box>
                            <Text className="slide-1-product-title">
                              Minimalist Design
                            </Text>
                          </Box>

                          <Box mt={2}>
                            <Text
                              className="slide-1-product-text"
                              textAlign="center"
                            >
                              Made for soft, milky & satisfying vibes
                            </Text>
                          </Box>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>
                </SwiperSlide>

                <SwiperSlide>
                  <Box className="shopVisuals-swiper-box swiper-box-shadow">
                    <VStack>
                      <Image
                        src={ShopNode}
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
                          <Box>
                            <Text
                              className="slide-2-product-title"
                              width={"20rem"}
                            >
                              Floating Design
                            </Text>
                          </Box>

                          <Box mt={2}>
                            <Text
                              className="slide-2-product-text"
                              width={"15rem"}
                            >
                              Made for mist, pure & cloudy vibes
                            </Text>
                          </Box>
                        </Stack>
                      </Box>
                    </VStack>
                  </Box>
                </SwiperSlide>

                <SwiperSlide>
                  <Box className="shopVisuals-swiper-box swiper-box-neon">
                    <VStack>
                      <Image
                        src={ShopNode}
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
                          <Box>
                            <Button className="slide-3-product-title">
                              CyberPunk Design
                            </Button>
                          </Box>

                          <Box mt={2}>
                            <Text
                              className="slide-3-product-text"
                              width={"15rem"}
                            >
                              Made for neon, alien & vibrating vibes
                            </Text>
                          </Box>
                        </Stack>
                      </Box>
                    </VStack>
                  </Box>
                </SwiperSlide>

                {/* <SwiperSlide>
                  <Box
                    className="shopVisuals-swiper-box and-more"
                    width={420}
                    height={560}
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
