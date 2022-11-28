import React from "react";
import Image from "next/image";

// Import CHAKRA TOOLS
import {
  Box,
  Stack,
  Text,
  Button,
  Flex,
  Icon,
  VStack,
  HStack,
  Divider,
  Spacer,
} from "@chakra-ui/react";

//IMPORT IMG
import pec from "../dist/img/webp/pec.webp";
import avatarReverse from "../dist/img/gif/RarityGold.gif";

// IMPORT SWIPER FEATURES
import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SWIPER CSS
import "swiper/css";

//IMPORT ICONS
import { FaUncharted } from "react-icons/fa";

const ArtVisualsDiv = () => {
  return (
    <>
      <Swiper
        className="mySwiper navbar-swiper"
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        spaceBetween={10}
      >
        <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Box className="jakman-container"></Box>
          <Box className="jakman-box">
            <Box className="jakman-image-box">
              <Box className="wrapper-img">
                <Image
                  width="270px"
                  height="240px"
                  src={pec}
                  alt="jakman artist"
                  quality={70}
                  objectFit="cover"
                  className="custom-img"
                />
              </Box>
            </Box>
            <Box className="jakman-text-box">
              <h2>Blur Background </h2>
              <a href="https://opensea.io/collection/pecfriends">
                <h3>
                  <i>pecland-official</i>
                </h3>
              </a>
              <Stack
                justifyContent="left"
                alignItems="left"
                direction="row"
                mt={5}
              >
                <FaUncharted color="#A9B2C3" size="25px" />
                <h4>NFT</h4>
              </Stack>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Box className="avatar-reverse-container">
            <Stack direction="row" pt={4} px={2}>
              <Button className="btn-date-avatar">09 - 11 DEC</Button>
              <Spacer />
              <Button className="btn-online-avatar">Online</Button>
            </Stack>
            <Box className="avatar-reverse-image-box">
              <Image
                width="300px"
                height="340px"
                src={avatarReverse}
                alt="sandbox avatar danse"
                quality={70}
              />
            </Box>
            <Box className="avatar-reverse-text-box">
              <h2>Changing color background !</h2>
              <h3>
                Discover our Interoperable Avatars collection to explore the
                Metaverse. <span>more info</span>
              </h3>
              <Box className="avatar-reverse-btn-box">
                <Stack direction="row">
                  <Button className="btn-buy-avatar">Buy AVATAR</Button>

                  <Button className="btn-browse-avatar">Browse</Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ArtVisualsDiv;
