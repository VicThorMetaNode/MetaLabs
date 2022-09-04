import React from "react";
// Import CHAKRA tools
import { Box, Text, Stack, Button } from "@chakra-ui/react";
const getYours = () => {
  return (
    <>
      <Box className="getYours-section" py={10}>
        <Stack justifyContent="center" alignItems="center" direction="column">
          <Box m={2}>
            <Text className="getYours-text" fontSize={["18px", "36px", "46px"]}>
              get yours today
            </Text>
          </Box>
          <Box>
            <Button
              mt={4}
              className="btn-getYours-white"
              size={["xs", "sm", "xl"]}
            >
              get
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default getYours;
