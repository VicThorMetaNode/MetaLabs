import React from "react";
import Link from "next/link";
import {
  Spacer,
  Box,
  Text,
  Flex,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  HStack,
  MenuDivider,
} from "@chakra-ui/react";

//-------------- Import ICONS --------------
import { GoThreeBars } from "react-icons/go";
import {
  TbBrandLinkedin,
  TbBrandTiktok,
  TbBrandInstagram,
} from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Flex mt={3}>
          <Box ml={3}>
            <a href="/">
              <Text
                fontSize={["2xl", "4xl", "5xl"]}
                className="landing-page-navbar-logo"
              >
                MetaNode
              </Text>
            </a>
          </Box>

          <Spacer />
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                bg="transparent"
                color="#000000"
                fontSize={["xl", "4xl", "5xl"]}
                transition="all 0.2s"
                _hover={{ color: "#000000" }}
                _expanded={{ bg: "transparent", color: "#6D6D6D" }}
                _focus={{ boxShadow: "none" }}
              >
                <GoThreeBars />
              </MenuButton>
              <MenuList bg="#000000" color="#A6A6A6" className="menu-list">
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/"> about</Link>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/sell"> sell</Link>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/grow"> grow</Link>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/pricing"> pricing</Link>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/contact"> contact</Link>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/q&a"> q&a</Link>
                </MenuItem>
                <MenuDivider />
                <HStack justifyContent="right" alignItems="right" mr={3}>
                  <Box>
                    {" "}
                    <TbBrandLinkedin />
                  </Box>
                  {/* <Box>
                    <TbBrandTiktok />
                  </Box> */}
                  <Box>
                    <TbBrandInstagram />
                  </Box>
                </HStack>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;
