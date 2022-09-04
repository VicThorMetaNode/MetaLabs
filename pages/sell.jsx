import React from "react";
import Image from "next/image";
// Import CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  ButtonGroup,
  UnorderedList,
  ListItem,
  Button,
  Container,
} from "@chakra-ui/react";

//Import IMAGES

import ShopNode from "../dist/img/mockrocket-capture3.png";

//IMPORT COMPONENTS
import GetYours from "../components/GetYours";
import TextBoxRight from "../components/TextBoxRight";
import TextBoxLeft from "../components/TextBoxLeft";
import BigSingleTitleBlack from "../components/BigSingleTitleBlack";
const sell = () => {
  return (
    <>
      <section className="sell-page">
        <Box>
          <BigSingleTitleBlack title="sell" />
        </Box>
        <Box mt={10}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Container>
              <Text
                className="sell-page-title"
                textAlign="center"
                fontSize={["26px", "46px", "56px"]}
              >
                Get your very own online shop.
              </Text>
            </Container>
            <Box>
              <Text
                className="sell-page-subText"
                textAlign="center"
                fontSize={["18px", "36px", "46px"]}
                p={4}
              >
                Artists and sellers of all kinds, get your own customer-based
                online shop to sell your artwork, your products & more now.
              </Text>
            </Box>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default sell;
