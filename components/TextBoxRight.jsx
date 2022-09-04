import React from "react";
// Import CHAKRA tools
import { Box, Stack, Text } from "@chakra-ui/react";

const TextBoxRight = ({ upTitle, text }) => {
  return (
    <>
      <Box className="textBox-main-section" mr={[2, 4, 6]}>
        <Stack direction="row">
          <Box>
            <Box className="textBox-section-upTitle" mb={2}>
              <Text className="textBox-upTitle"> {upTitle} </Text>
            </Box>
            <hr className="textBox-line" />

            <Box className="textBox-section-text" p={[1, 4, 6]}>
              <Text className="textBox-text"> {text} </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default TextBoxRight;
