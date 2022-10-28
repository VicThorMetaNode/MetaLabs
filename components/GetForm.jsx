import React from "react";
//Import FORM HANDLER
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
// Import CHAKRA tools
import {
  Text,
  Box,
  Container,
  Button,
  FormLabel,
  Textarea,
  Input,
  VStack,
  HStack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

const GetForm = () => {
  //FORM HANDLER on submit
  const [state, handleSubmit] = useForm("xrgdpvwp");
  if (state.succeeded) {
    return (
      <>
        <VStack
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          borderRadius="25px"
          mt={7}
        >
          <Box m={5} p={2}>
            <Container
              textAlign="center"
              className="title-span"
              fontSize="2rem"
              textTransform="uppercase"
              fontWeight="400"
              color="#000000"
            >
              {" "}
              Message Sent !{" "}
            </Container>
          </Box>
          <Box p={2}>
            <Container
              color="#000000"
              textAlign="center"
              className="text-container"
              fontSize="1.1rem"
              fontWeight="100"
              mb={7}
            >
              Thank you for contacting me !
            </Container>
            <Text
              className="get-page-alertText"
              textAlign="center"
              color="#CCFF00"
              fontWeight={600}
              fontSize={["13px", "26px", "36px"]}
              px={[6, 10, 10]}
              mt={4}
            >
              ! Full until February 2023 !
            </Text>
          </Box>
          <Box>
            <Link href="/">
              <Button
                mt={4}
                className="btn-getYours-white"
                size={["xs", "sm", "xl"]}
              >
                Back Home
              </Button>
            </Link>
          </Box>
        </VStack>
      </>
    );
  }
  return (
    <>
      <form className="form-form" method="post" onSubmit={handleSubmit}>
        <FormLabel className="form-label">Your Name</FormLabel>
        <Input
          className="form-input"
          placeholder=" e.g Jack Manifold"
          type="string"
          id="name"
          name="name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <FormLabel className="form-label">Your Email</FormLabel>
        <Input
          className="form-input"
          placeholder="e.g jackmanifoldiscute@test.net"
          type="email"
          id="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <FormLabel className="form-label">Project's Type</FormLabel>
        <RadioGroup defaultValue="OnlineShop">
          <HStack spacing="24px">
            <Radio value="OnlineShop" colorScheme="gray">
              Online-Shop
            </Radio>
            <Radio value="OnlyFans" colorScheme="gray">
              OnlyFans Clone
            </Radio>
          </HStack>
        </RadioGroup>

        <FormLabel className="form-label">
          Project's Controversial Level
        </FormLabel>
        <RadioGroup defaultValue="0">
          <HStack spacing="24px">
            <Radio value="0" colorScheme="gray">
              0
            </Radio>
            <Radio value="4" colorScheme="teal">
              4
            </Radio>
            <Radio value="8" colorScheme="purple">
              8
            </Radio>
            <Radio value="10" colorScheme="red">
              10
            </Radio>
          </HStack>
        </RadioGroup>

        <FormLabel className="form-label">
          how many ban or report a year on IG
        </FormLabel>
        <RadioGroup defaultValue="0">
          <HStack spacing="24px">
            <Radio value="0" colorScheme="gray">
              0
            </Radio>
            <Radio value="-6" colorScheme="purple">
              -6
            </Radio>
            <Radio value="+10" colorScheme="red">
              +10
            </Radio>
          </HStack>
        </RadioGroup>

        <FormLabel className="form-label">Your Message</FormLabel>
        <Textarea
          className="form-input"
          id="message"
          name="message"
          placeholder="Type your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          className="btn-getYours-white"
          size={["xs", "sm", "xl"]}
          m={3}
          type="submit"
          disabled={state.submitting}
        >
          SEND
        </Button>
      </form>
    </>
  );
};

export default GetForm;
