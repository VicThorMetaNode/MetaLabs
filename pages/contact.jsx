import React from "react";
import Link from "next/link";
// Import CHAKRA tools
import { Text, Box, Stack, Flex, Button } from "@chakra-ui/react";

import Form from "../components/Form";

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

const contact = () => {
  return (
    <>
      <section className="contact-page">
        <Box>
          <BigSingleTitleBlack title="Contact" />
        </Box>
        <Box mt={10}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Box>
              <Text
                className="contact-page-title"
                textAlign="center"
                textTransform="uppercase"
                fontSize={["26px", "46px", "56px"]}
                px={[6, 10, 10]}
              >
                CONTACT FORM.
              </Text>
            </Box>
            <Box>
              <Text
                className="contact-page-subText"
                textAlign="center"
                fontSize={["18px", "36px", "46px"]}
                px={[6, 10, 10]}
                mt={4}
              >
                Let's keep in touch
              </Text>
            </Box>
          </Stack>
        </Box>
      </section>
      <section>
        <Stack justifyContent="center" alignItems="center">
          <Box mt={10} mx={2} p={10} className="form-box">
            <Form />
          </Box>
        </Stack>

        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box mb={2}>
            <Text
              className="sell-page-subText"
              textAlign="center"
              fontSize={["16px", "26px", "30px"]}
              px={[6, 10, 10]}
              mt={4}
            >
              Ready to order already ? Reach the order form instead
            </Text>
          </Box>
          <Box>
            <Link href="/get">
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                get
              </Button>
            </Link>
          </Box>
        </Stack>
      </section>
    </>
  );
};

export default contact;
