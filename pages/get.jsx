import React from "react";
import Link from "next/link";

// Import CHAKRA tools
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

import GetForm from "../components/GetForm";

//INTERNAL COMPONENTS
const BigSingleTitleBlack = ({ title }) => (
  <>
    <Box className="bigSingleTitleBlack-section">
      <Flex justifyContent="center" alignItems="center" mt={1}>
        <Text
          className="bigSingleTitleBlack-text"
          mt={80}
          fontSize={["120px", "170px", "197px"]}
        >
          {title}
        </Text>
      </Flex>
    </Box>
  </>
);

const get = () => {
  return (
    <>
      <section className="get-page">
        <Box>
          <BigSingleTitleBlack title="get" />
        </Box>
        <Box mt={10}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <Text
                className="sell-page-title"
                textAlign="center"
                fontSize={["26px", "46px", "56px"]}
                textTransform="uppercase"
                px={[6, 10, 10]}
              >
                Order Form.
              </Text>
            </Box>
            <Box>
              <Text
                className="sell-page-subText"
                textAlign="center"
                fontSize={["18px", "36px", "46px"]}
                px={[6, 10, 10]}
                mt={4}
              >
                Tell me all about your project
              </Text>
            </Box>
            <Box mt={8}>
              <Text
                className="get-page-alertText"
                textAlign="center"
                color="#CCFF00"
                fontSize={["26px", "26px", "36px"]}
                px={[6, 10, 10]}
                mt={4}
              >
                ! Full until February 2023 !
              </Text>
            </Box>
          </Stack>
        </Box>

        <section>
          <Stack justifyContent="center" alignItems="center">
            <Box mt={10} mx={2} p={10} className="form-box">
              <GetForm />
            </Box>
          </Stack>
        </section>

        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box mb={2}>
            <Text
              className="sell-page-subText"
              textAlign="center"
              fontSize={["16px", "26px", "30px"]}
              px={[6, 10, 10]}
              mt={4}
            >
              Not ready to order yet ? Contact me instead
            </Text>
          </Box>
          <Box>
            <Link href="/contact">
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                contact
              </Button>
            </Link>
          </Box>
        </Stack>
      </section>
    </>
  );
};

export default get;
