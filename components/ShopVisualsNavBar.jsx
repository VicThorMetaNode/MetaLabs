import React from "react";
import Image from "next/image";

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
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Spacer,
} from "@chakra-ui/react";

//IMPORT IMGA
import Techno1 from "../dist/img/webp/techno.webp";
import Techno2 from "../dist/img/webp/techyo2.webp";

// IMPORT SWIPER FEATURES
import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SWIPER CSS
import "swiper/css";

//IMPORT ICONS
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdBubbleChart,
  MdOutlineSmartToy,
  MdLocalFireDepartment,
} from "react-icons/md";

import { RiUserHeartLine } from "react-icons/ri";

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
                      colorScheme="teal"
                      className="toolbar-basic-title"
                    >
                      {isOpen ? "Close" : "Open"}
                    </MenuButton>
                    <MenuList mr={5}>
                      <MenuItem className="toolbar-basic">Download</MenuItem>
                      <MenuItem className="toolbar-basic">
                        Create a Copy
                      </MenuItem>
                      <MenuItem className="toolbar-basic">
                        Mark as Draft
                      </MenuItem>
                      <MenuItem className="toolbar-basic">Delete</MenuItem>
                      <MenuItem className="toolbar-basic">
                        Attend a Workshop
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
          </Stack>
        </SwiperSlide>
        <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Stack justifyContent="center" alignItems="center">
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<BiChevronDown />}
                  className="toolbar-img-menu-title"
                  colorScheme="twitter"
                  mr={7}
                >
                  Your Categories
                </MenuButton>
                <MenuList>
                  <MenuItem minH="48px">
                    <Image
                      boxSize="2rem"
                      width="40px"
                      height="40px"
                      borderRadius="50px"
                      src={Techno1}
                      alt="Fluffybuns the destroyer"
                      className="toolbar-img"
                    />
                    <Spacer />
                    <span className="toolbar-img-title red-arrival">
                      -> Latest Arrival
                    </span>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Image
                      boxSize="2rem"
                      width="40px"
                      height="40px"
                      borderRadius="50px"
                      src={Techno2}
                      alt="Simon the pensive"
                      mr="12px"
                      className="toolbar-img"
                    />
                    <Spacer />
                    <span className="toolbar-img-title">Urban Art</span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>
        </SwiperSlide>
        <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Stack justifyContent="center" alignItems="center">
            <Box>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<GiHamburgerMenu />}
                      variant="outline"
                      ml={10}
                      colorScheme="purple"
                    ></MenuButton>
                    <MenuList>
                      <MenuItem
                        className="toolbar-burger-emoji"
                        icon={<MdLocalFireDepartment fontSize={25} />}
                        _focus={{ bg: "#58427C", color: "#fff" }}
                        _hover={{ bg: "#58427C", color: "#fff" }}
                      >
                        Hot News
                      </MenuItem>
                      <MenuItem
                        className="toolbar-burger-emoji"
                        icon={<MdBubbleChart fontSize={25} />}
                        _focus={{ bg: "#58427C", color: "#fff" }}
                        _hover={{ bg: "#58427C", color: "#fff" }}
                      >
                        Collections
                      </MenuItem>
                      <MenuItem
                        className="toolbar-burger-emoji"
                        icon={<MdOutlineSmartToy fontSize={25} />}
                        _focus={{ bg: "#58427C", color: "#fff" }}
                        _hover={{ bg: "#58427C", color: "#fff" }}
                      >
                        Bot-Made Art
                      </MenuItem>
                      <MenuItem
                        className="toolbar-burger-emoji"
                        icon={<RiUserHeartLine fontSize={25} />}
                        _focus={{ bg: "#58427C", color: "#fff" }}
                        _hover={{ bg: "#58427C", color: "#fff" }}
                      >
                        Human-Made Art
                      </MenuItem>
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
