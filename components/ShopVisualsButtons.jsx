import React from "react";

// Import CHAKRA TOOLS
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

// IMPORT SWIPER FEATURES
import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SWIPER CSS
import "swiper/css";

// IMPORT ICONS
// import { BsArrowBarRight } from "react-icons/bs";

const ShopVisualsButtons = () => {
  return (
    <>
      <Swiper
        className="mySwiper buttons-designs"
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        spaceBetween={10}
      >
        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-50">Minimalist</button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-56">Floating</button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-33">Cyber Punk</button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-32">Acidulous</button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-64">
                  <span className="text">Metaverse</span>
                </button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-86">Bubble</button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-53">Painter</button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box className="shopVisuals-buttons-swiper-box ">
            <Stack justifyContent="center" alignItems="center">
              <Box>
                <button className="button-52">Out of</button>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ShopVisualsButtons;
