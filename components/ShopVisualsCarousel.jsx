import React, { useState } from "react";
import Image from "next/image";

// Import CHAKRA tools
import {
  Box,
  Stack,
  Text,
  Button,
  Icon,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

// IMPORT ICONS
import { BsArrowBarRight } from "react-icons/bs";

//Import IMAGES
import nft from "../dist/img/techno.png";
import androSwitch from "../dist/img/androswitch.jpeg";
import cosmetik from "../dist/img/natasha-kendall.jpg";
import whiteBook from "../dist/img/the-77-human-needs-system.jpg";
import metaLand from "../dist/img/Metaverse-land.webp";
import sandLogo from "../dist/img/sandboxlogo.png";
// import whiteJournal from "../dist/img/sandboxlogo.png";

const ShopVisualsCarousel = () => {
  //TAP TO DISCOVER
  const [showSource1, setShowSource1] = useState(false);
  const [showSource2, setShowSource2] = useState(false);
  const [showSource3, setShowSource3] = useState(false);
  const [showSource4, setShowSource4] = useState(false);
  const [showSource5, setShowSource5] = useState(false);
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        spaceBetween={50}
      >
        <SwiperSlide>
          <Box className="shopVisuals-swiper-box swiper-box-border">
            <VStack>
              <a onClick={() => setShowSource1(!showSource1)}>
                {showSource1 ? (
                  <>
                    <Image
                      src={cosmetik}
                      width={420}
                      height={560}
                      objectFit="cover"
                      alt="Natasha Kendall on UnSplash"
                    />

                    <Box mb={"-1rem"}>
                      <Text className="slide-1-source">
                        *
                        <a
                          href="https://unsplash.com/photos/_4gFW3mBRCc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-artist-link"
                        >
                          @NatashaKendall
                        </a>{" "}
                        on{" "}
                        <a
                          href="https://unsplash.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-unsplash-link"
                        >
                          <i> unsplash</i>
                        </a>
                      </Text>
                    </Box>
                  </>
                ) : (
                  <Image
                    src={cosmetik}
                    width={420}
                    height={560}
                    objectFit="cover"
                    alt="Natasha Kendall on UnSplash"
                  />
                )}
              </a>
              {/* <hr className="shopVisuals-swiper-divider" /> */}
              <Box>
                <VStack>
                  <Box>
                    <Text className="slide-1-product-title" mt={5}>
                      Minimalist Design
                    </Text>
                  </Box>

                  <Box>
                    <Text className="slide-1-product-text" textAlign="center">
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
          <Box className="shopVisuals-swiper-box swiper-box-shadow">
            <VStack>
              <a onClick={() => setShowSource2(!showSource2)}>
                {showSource2 ? (
                  <>
                    <Image
                      src={whiteBook}
                      width={420}
                      height={560}
                      objectFit="cover"
                      alt="Visuals for Online-Shops"
                    />
                    <Box mb={"-1.1rem"}>
                      <Text className="slide-1-source">
                        *
                        <a
                          href="https://unsplash.com/photos/_4gFW3mBRCc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-artist-link"
                        >
                          @77hn
                        </a>{" "}
                        on{" "}
                        <a
                          href="https://unsplash.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-unsplash-link"
                        >
                          <i> unsplash</i>
                        </a>
                      </Text>
                    </Box>
                  </>
                ) : (
                  <Image
                    src={whiteBook}
                    width={420}
                    height={560}
                    objectFit="cover"
                    alt="Visuals for Online-Shops"
                    className="shopVisuals-image-slide2"
                  />
                )}
              </a>
              <hr className="shopVisuals-swiper-divider-shadow" />
              <Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <Box mt={3}>
                    <Text className="slide-2-product-title" width={"20rem"}>
                      Floating Design
                    </Text>
                  </Box>

                  <Box mt={1}>
                    <Text className="slide-2-product-text" width={"15rem"}>
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
          <Box className="shopVisuals-swiper-box swiper-box-neon ">
            <VStack>
              <a onClick={() => setShowSource3(!showSource3)}>
                {showSource3 ? (
                  <>
                    <Image
                      src={nft}
                      width={420}
                      height={560}
                      objectFit="cover"
                      alt="Visuals for Online-Shops"
                      className="shopVisuals-image-slide3-reverse"
                    />
                    <Box mb={"-1rem"}>
                      <Text className="slide-1-source light">
                        *
                        <a
                          href="https://opensea.io/collection/techyo-2050"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-artist-link"
                        >
                          @TechYo-2050
                        </a>{" "}
                        on{" "}
                        <a
                          href="https://opensea.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-unsplash-link light"
                        >
                          <i> OpenSea</i>
                        </a>
                      </Text>
                    </Box>
                  </>
                ) : (
                  <Image
                    src={nft}
                    width={420}
                    height={560}
                    objectFit="cover"
                    alt="Visuals for Online-Shops"
                    className="shopVisuals-image-slide3"
                  />
                )}
              </a>
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
          <Box className="shopVisuals-swiper-box swiper-box-acid">
            <VStack>
              <a onClick={() => setShowSource4(!showSource4)}>
                {showSource4 ? (
                  <>
                    <Box className="slide-4-img ">
                      <Image
                        src={androSwitch}
                        width={420}
                        height={560}
                        objectFit="cover"
                        alt="Visuals for Online-Shops"
                      />
                    </Box>
                    <Box mb={"-1rem"}>
                      <Text className="slide-1-source colorful">
                        *
                        <a
                          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lamaisondesmaternelles.fr%2Farticle%2Fj-ai-invente-l-anneau-contraceptif-masculin-rencontre-avec-l-homme-qui-veut-revolutionner&psig=AOvVaw0nBhVpMkPUVVVKFgXYEUEe&ust=1664376526904000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJD6lfGbtfoCFQAAAAAdAAAAABAD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-artist-link colorful"
                        >
                          @Andro-Switch
                        </a>{" "}
                        on{" "}
                        <a
                          href="https://thoreme.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-unsplash-link colorful"
                        >
                          <i>Thoreme</i>
                        </a>
                      </Text>
                    </Box>
                  </>
                ) : (
                  <Box className="slide-4-img ">
                    <Image
                      src={androSwitch}
                      width={420}
                      height={560}
                      objectFit="cover"
                      alt="Visuals for Online-Shops"
                    />
                  </Box>
                )}
              </a>

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

        <SwiperSlide>
          <Box className="shopVisuals-swiper-box swiper-box-meta">
            <VStack>
              <a onClick={() => setShowSource5(!showSource5)}>
                {showSource5 ? (
                  <>
                    <Box className="slide-5-product-title-div" px={4}>
                      <Stack justifyContent="center" alignItems="center">
                        <Text className="slide-5-product-title">
                          MetaVerse Design
                        </Text>
                      </Stack>
                    </Box>
                    <Image
                      src={metaLand}
                      width={420}
                      height={360}
                      objectFit="cover"
                      alt="Metaverse Land on SandBox"
                      className="shopVisuals-image-slide5-reverse"
                    />

                    <Box mb={"-1rem"}>
                      <Text className="slide-1-source meta-link">
                        *
                        <a
                          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnairametrics.com%2F2021%2F12%2F02%2F106-million-worth-of-metaverse-land-was-sold-last-week%2F&psig=AOvVaw1-B4sxu3_cI2Ah7R5LyW5G&ust=1664450375474000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDFw4Ovt_oCFQAAAAAdAAAAABAD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-artist-link meta-link"
                        >
                          @MetaLand
                        </a>{" "}
                        on{" "}
                        <a
                          href="https://www.sandbox.game/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shopVisuals-unsplash-link meta-link"
                        >
                          <i> SandBox</i>
                        </a>
                      </Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box className="slide-5-product-title-div" px={4}>
                      <Stack justifyContent="center" alignItems="center">
                        <Text className="slide-5-product-title">
                          MetaVerse Design
                        </Text>
                      </Stack>
                    </Box>
                    <Image
                      src={metaLand}
                      width={420}
                      height={360}
                      objectFit="cover"
                      alt="Metaverse Land on SandBox"
                      className="shopVisuals-image-slide5"
                    />
                  </>
                )}
              </a>
              {/* <hr className="shopVisuals-swiper-divider" /> */}
              <Box className="blur">
                <VStack>
                  <Box>
                    <Text
                      className="slide-5-product-text"
                      textAlign="center"
                      padding={2}
                    >
                      Made for web3, MegaNerd
                      <br /> & <i> gaming</i> vibes
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </VStack>
            <Box className="slide-5-Bottom-div">
              <HStack>
                <Button
                  colorScheme="yellow"
                  variant="ghost"
                  isLoading
                  loadingText="NFT is Loading"
                >
                  NFT
                </Button>
                <Divider className="meta-divider" />
                <Box>
                  <Image
                    src={sandLogo}
                    width={45}
                    height={45}
                    objectFit="cover"
                    alt="SandBox Logo"
                    className="slide-5-sandBox-logo"
                  />
                </Box>
              </HStack>
            </Box>
          </Box>
        </SwiperSlide>

        {/* <SwiperSlide>
                  <Box
                    className="shopVisuals-swiper-box swiper-box-acid"
                    w={"20rem"}
                    h={"33.75rem"}
                  >
                    <video
                      src={require("../dist/img/visualshop-animation.mp4")}
                    />
                  </Box>
                </SwiperSlide>  */}

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
                </SwiperSlide>  */}
      </Swiper>
    </>
  );
};

export default ShopVisualsCarousel;
