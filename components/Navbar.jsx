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
  TbBrandInstagram,
  TbBrandTwitter,
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
                MetaNodes
              </Text>
            </a>
          </Box>

          <Spacer />
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                bg="transparent"
                color="#080808"
                fontSize={["xl", "4xl", "5xl"]}
                transition="all 0.2s"
                _hover={{ color: "#080808" }}
                _expanded={{ bg: "transparent", color: "#6D6D6D" }}
                _focus={{ boxShadow: "none" }}
                mt={[0, 2, 3]}
              >
                <GoThreeBars />
              </MenuButton>
              <MenuList
                bg="#080808"
                color="#A6A6A6"
                className="menu-list"
                mr={1}
                mt={1}
              >
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/about"> about</Link>
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
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/technologies"> techno</Link>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  _focus={{ bg: "transparent" }}
                  justifyContent="right"
                  alignItems="right"
                >
                  <Link href="/docs"> docs</Link>
                </MenuItem>
                <MenuDivider />
                <HStack justifyContent="right" alignItems="right" mr={3}>
                  <Link href="https://www.instagram.com/metanodefink/">
                    <Box>
                      <TbBrandInstagram fontSize={25} />
                    </Box>
                  </Link>
                  <Link href="https://www.linkedin.com/in/vic-thor-6aa023100">
                    <Box>
                      <TbBrandLinkedin fontSize={25} />
                    </Box>
                  </Link>
                  <Link href="https://twitter.com/thor_vee">
                    <Box>
                      <TbBrandTwitter fontSize={25} />
                    </Box>
                  </Link>
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
