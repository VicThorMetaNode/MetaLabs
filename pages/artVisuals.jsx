import React from "react";

// IMPORT CHAKRA TOOLS
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";

//IMPORT COMPONENTS
import ArtVisualsDiv from "../components/ArtVisualsDiv";

// IMPORT ICONS
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

//INTERNAL COMPONENTS
const BigSingleTitleBlack = ({ title }) => (
  <>
    <Box className="bigSingleTitleBlack-section">
      <Flex
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mt={1}
      >
        <Text
          className="bigSingleTitleBlack-text"
          mt={[60, 80, 80]}
          fontSize={["120px", "170px", "197px"]}
        >
          {title}
        </Text>
      </Flex>
    </Box>
  </>
);

const artVisuals = () => {
  return (
    <>
      <section className="artVisuals-page">
        <Box>
          <BigSingleTitleBlack title="ART VISUALS" />
        </Box>
        <Box mt={10}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <Text
                className="sell-page-title"
                textAlign="center"
                fontSize={["26px", "46px", "56px"]}
                px={[2, 10, 10]}
              >
                Fully customized online shop.
              </Text>
            </Box>
            <Box>
              <Text
                className="sell-page-subText"
                textAlign="center"
                fontSize={["20px", "36px", "46px"]}
                px={[6, 10, 10]}
                mt={2}
              >
                From minimalist layouts to more unusual designs.
              </Text>
            </Box>
          </Stack>
          <section className="shopVisuals-page-swiper-section">
            <Box>
              <ArtVisualsDiv />
            </Box>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text className="shopVisuals-page-copyright-mention">
                tap on the picture for copyright & source links
              </Text>
              <Box className="interior-project-bottom-swipe-box">
                <HStack>
                  <BsArrowLeftShort className="arrow-swipe-icon" size="30px" />
                  <Text className="interior-project-bottom-swipe-text">
                    swipe
                  </Text>
                  <BsArrowRightShort className="arrow-swipe-icon" size="30px" />
                </HStack>
              </Box>
            </Stack>
          </section>
        </Box>
      </section>
    </>
  );
};

export default artVisuals;
