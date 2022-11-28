import React from "react";
import Image from "next/image";

// Import CHAKRA TOOLS
import {
  Box,
  Stack,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";

//IMPORT IMGA

import yolo from "../dist/img/webp/yolo.webp";
import walk from "../dist/img/webp/walk.webp";
import rec from "../dist/img/gif/8Etj.gif";
import avatar from "../dist/img/gif/RarityGold.gif";

// IMPORT SWIPER FEATURES
import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SWIPER CSS
import "swiper/css";

//IMPORT ICONS
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiChevronDown, BiData } from "react-icons/bi";
import { GiHamburgerMenu, GiCubes } from "react-icons/gi";
import {
  MdBubbleChart,
  MdOutlineSmartToy,
  MdLocalFireDepartment,
  MdOutlineSell,
} from "react-icons/md";

import { RiUserHeartLine } from "react-icons/ri";
// import { GrDocumentStore } from "react-icons/gr";

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
          <Box className="terror-container">
            <Box className="terror-box">
              <Box className="terror-navbar">
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
                        <MenuItem className="toolbar-basic">
                          Download Flyer
                        </MenuItem>
                        <MenuItem className="toolbar-basic">
                          Create a Copy
                        </MenuItem>
                        <MenuItem className="toolbar-basic">Attending</MenuItem>
                        <MenuItem className="toolbar-basic">Delete</MenuItem>
                        <MenuItem className="toolbar-basic">Cancel</MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>
              <Box className="terror-text-container">
                <Stack
                  justifyContent="left"
                  alignItems="left"
                  direction="column"
                >
                  <h3>Ronono</h3>
                  <h4>Free live webinar</h4>
                  <h2>
                    The <span>easiest</span> way to animate characters
                  </h2>
                  <h5>
                    thursday, dec 17, 11am <span>PST</span>
                  </h5>
                </Stack>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Box className="wix-container">
            <Box className="wix-navbar">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<BiChevronDown />}
                  className="toolbar-img-menu-title"
                  colorScheme="twitter"
                >
                  Your Menu
                </MenuButton>
                <MenuList backgroundColor={"mediumslateblue"}>
                  <MenuItem minH="48px">
                    <Image
                      boxSize="2rem"
                      width="40px"
                      height="40px"
                      borderRadius="50px"
                      src={yolo}
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
                      src={walk}
                      alt="Simon the pensive"
                      mr="12px"
                      className="toolbar-img"
                    />
                    <Spacer />
                    <span className="toolbar-img-title">Urban Art</span>
                  </MenuItem>
                  <Divider />
                  <MenuItem minH="20px">
                    <span className="toolbar-img-title">Join Live Auction</span>
                    <Spacer />
                    <Image
                      boxSize="2rem"
                      width="20px"
                      height="20px"
                      borderRadius="50px"
                      src={rec}
                      alt="Simon the pensive"
                      mr="12px"
                      className="toolbar-img"
                    />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box className="wix-text-container">
              <h4>Nix</h4>
              <h5>live auction</h5>
              <h2>The best of two worlds of art</h2>
            </Box>
            <Box className="wix-artists-container">
              <Box className="yolo-artist-box">
                <a
                  href="https://opensea.io/collection/yolofantasy"
                  target="_blank"
                  rel="yolo fantasy opensea"
                  className="shopVisuals-artist-link"
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "120px",
                      height: "120px",
                    }}
                  >
                    <Image
                      src={yolo}
                      width={120}
                      height={120}
                      objectFit="cover"
                      alt="yolo-official"
                    />
                  </div>
                </a>
                <Stack
                  justifyContent="left"
                  alignItems="left"
                  direction="column"
                >
                  <h4>Yolo-Official</h4>
                  <h5>
                    <q>
                      Fantasy is not a way to escape reality, but another way of
                      understanding reality.
                    </q>
                  </h5>
                </Stack>
              </Box>
              <Box className="walk-artist-box">
                <a
                  href="https://opensea.io/collection/letswalk"
                  target="_blank"
                  rel="letswalk opensea"
                  className="shopVisuals-artist-link"
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "120px",
                      height: "120px",
                    }}
                  >
                    <Image
                      src={walk}
                      width={120}
                      height={120}
                      objectFit="cover"
                      alt="walk-official"
                    />
                  </div>
                </a>
                <Stack>
                  <h4>deekaymotion</h4>
                  <h5>
                    <q>First ever 'Walking' NFT collection.</q>{" "}
                  </h5>
                </Stack>
              </Box>
            </Box>
            <Box className="wix-bottom-date">
              <h3>
                July 26 / <span>1pm edt</span>
              </h3>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Box className="blockchain-container">
            <Box className="blockchain-box">
              <Box className="blockchain-navbar">
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<GiHamburgerMenu />}
                        variant="outline"
                        colorScheme="purple"
                      ></MenuButton>
                      <MenuList>
                        <MenuItem
                          className="toolbar-burger-emoji"
                          icon={<MdLocalFireDepartment fontSize={25} />}
                          _focus={{ bg: "#FF00CC", color: "#fff" }}
                          _hover={{ bg: "#FF00CC", color: "#fff" }}
                        >
                          Hot News
                        </MenuItem>
                        <MenuItem
                          className="toolbar-burger-emoji"
                          icon={<MdBubbleChart fontSize={25} />}
                          _focus={{ bg: "#FF00CC", color: "#fff" }}
                          _hover={{ bg: "#FF00CC", color: "#fff" }}
                        >
                          Collections
                        </MenuItem>
                        <MenuItem
                          className="toolbar-burger-emoji"
                          icon={<MdOutlineSmartToy fontSize={25} />}
                          _focus={{ bg: "#FF00CC", color: "#fff" }}
                          _hover={{ bg: "#FF00CC", color: "#fff" }}
                        >
                          Bot-Made Art
                        </MenuItem>
                        <MenuItem
                          className="toolbar-burger-emoji"
                          icon={<RiUserHeartLine fontSize={25} />}
                          _focus={{ bg: "#FF00CC", color: "#fff" }}
                          _hover={{ bg: "#FF00CC", color: "#fff" }}
                        >
                          Human-Made Art
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>
              <Box className="blockchain-text-container">
                <Box className="blockchain-text-box-right">
                  <h2>
                    The Blockchain for <span>A</span>rtF<span>i</span>
                  </h2>
                  <h4>
                    As new artists enter crypto, MetaNodes provides an
                    experience that meets their needs for quality workspace,
                    storage and finance.
                  </h4>
                </Box>
                <Box className="blockchain-text-box-left">
                  {" "}
                  <h5>MetaNodes </h5>
                </Box>
              </Box>

              <Box className="blockchain-icons-container">
                <Box className="blockchain-icons-box">
                  <Box className="icon-blockchain">
                    <GiCubes fontSize={30} color="aquamarine" />
                    <h3>Stake</h3>
                  </Box>
                  <Box className="icon-blockchain">
                    <BiData fontSize={30} color="aquamarine" />
                    <h3>Store</h3>
                  </Box>
                  <Box className="icon-blockchain">
                    <MdOutlineSell fontSize={30} color="aquamarine" />
                    <h3>Sell</h3>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>

        {/* <SwiperSlide className="shopVisuals-navbar-swiper-box">
          <Box className="avatar-container">
            <Box className="avatar-navbar">
              <input type="checkbox" id="active" />
              <label for="active" class="avatar-menu-btn">
                <GiHamburgerMenu />
              </label>
              <div class="wrapper">
                <ul>
                  <li>
                    <p>About</p>
                  </li>
                  <li>
                    <p>Mint</p>
                  </li>
                  <li>
                    <p>Shop</p>
                  </li>
                  <li>
                    <p>Gallery</p>
                  </li>
                  <li>
                    <p>Feedback</p>
                  </li>
                </ul>
              </div>
              <div class="content">
                <div class="title">Fullscreen Overlay Navigation Bar</div>
                <p>with HTML & CSS Neon Effect</p>
              </div>
            </Box>
          </Box>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default ShopVisualsNavBar;
