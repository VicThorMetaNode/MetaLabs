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
import { BsFillPlayFill } from "react-icons/bs";
import { TbPaperBag } from "react-icons/tb";

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

        <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Box className="audio-container">
            <Box className="audio-img-background-container">
              <h5>23.11.2023 ( MON ) 2400 - 0100 (HKT)</h5>
              <Box className="audio-text-container">
                <Box className="audio-text-container-1">
                  <h4>on this day</h4>
                  <h2>2022</h2>
                </Box>
                <Box className="audio-text-container-2">
                  <h3>Coping Mechanisms w/ Korea Town Acid</h3>
                </Box>
              </Box>
            </Box>

            <Box className="audio-text-box">
              <h2>
                Coping Mechanisms <span>w/ </span> Korea Town Acid
              </h2>
              <h5>
                <span>airdate</span> : 23/11/2022
              </h5>
            </Box>

            <Box className="audio-tags-box">
              <article className="tag-item tag-black">
                <p>
                  <span>Tags:</span>
                </p>
              </article>
              <article className="tag-item">
                <p>acid</p>
              </article>
              <article className="tag-item">
                <p>avant-Garde</p>
              </article>
              <article className="tag-item">
                <p>Experimental</p>
              </article>
              <article className="tag-item">
                <p>jazz</p>
              </article>
              <article className="tag-item">
                <p>korea town acid</p>
              </article>
            </Box>
            <Box className="audio-btn-box">
              <Button className="audio-btn play">
                {" "}
                <BsFillPlayFill className="audio-logo" /> Listen Now
              </Button>
              <Button className="audio-btn shop">
                {" "}
                <TbPaperBag className="audio-logo" /> Shop Now
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ArtVisualsDiv;
