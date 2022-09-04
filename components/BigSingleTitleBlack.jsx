import React from "react";
// Import CHAKRA tools
import { Box, Flex, Text } from "@chakra-ui/react";

const BigSingleTitleBlack = ({ title }) => {
  return (
    <>
      <Box className="bigSingleTitleBlack-section">
        <Flex justifyContent="center" alignItems="center" mt={1}>
          <Text
            className="bigSingleTitleBlack-text"
            mt={40}
            fontSize={["120px", "170px", "197px"]}
          >
            {title}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default BigSingleTitleBlack;
