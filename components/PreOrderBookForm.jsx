import React from "react";
import Link from "next/link";
//Import FORM HANDLER
import { useForm, ValidationError } from "@formspree/react";

// Import CHAKRA tools
import {
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

const PreOrderBookForm = () => {
  //FORM HANDLER on submit
  const [state, handleSubmit] = useForm("xyyvnljr");
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
              Order Sent !{" "}
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
              Thank you for pre-ordering the book !
            </Container>
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
          placeholder=" e.g Joe Tatcher"
          type="string"
          id="name"
          name="name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <FormLabel className="form-label">Your Email</FormLabel>
        <Input
          className="form-input"
          placeholder="e.g joetatcheriscute@test.net"
          type="email"
          id="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <FormLabel className="form-label">Book's Version</FormLabel>
        <RadioGroup defaultValue="OnlineShop">
          <HStack spacing="24px">
            <Radio value="OnlineShop" colorScheme="yellow">
              Virtual Book
            </Radio>
            <Radio value="OnlyFans" colorScheme="orange">
              Tangible Book
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
          className="btn-getYourBook-modal-preOrder"
          size={["xs", "sm", "xl"]}
          type="submit"
          disabled={state.submitting}
        >
          Order now
        </Button>
      </form>
    </>
  );
};

export default PreOrderBookForm;
