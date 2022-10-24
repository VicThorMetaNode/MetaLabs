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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

// IMPORT SWIPER FEATURES
import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SWIPER CSS
import "swiper/css";

//IMPORT ICONS
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const ShopVisualsNavBar = () => {
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
          <Stack justifyContent="center" alignItems="center">
            <Box>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      rightIcon={<BsFillArrowDownCircleFill />}
                    >
                      {isOpen ? "Close" : "Open"}
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ShopVisualsNavBar;
