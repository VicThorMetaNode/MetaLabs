import React from "react";
// Import CHAKRA tools
import { Box, Stack, Text } from "@chakra-ui/react";

const TextBoxRight = (upTitle, text) => {
  return (
    <>
      <Box className="textBox-main-section-left" ml={[3, 4, 6]}>
        <Stack direction="row">
          <Box>
            <Box className="textBox-section-upTitle-left" mb={2}>
              <Text className="textBox-upTitle"> {upTitle} </Text>
            </Box>
            <hr className="textBox-line-left" />

            <Box className="textBox-section-text-left" p={[1, 4, 6]}>
              <Text className="textBox-text"> {text} </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default TextBoxRight;
