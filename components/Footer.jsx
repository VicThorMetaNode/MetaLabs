import React from "react";
import Link from "next/link";
// Import CHAKRA tools
import {
  Box,
  Text,
  Flex,
  Container,
  Button,
  HStack,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

//-------------- Import ICONS --------------
import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <footer>
        <section className="footer-page">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            mb={5}
          >
            <Box>
              <Box className="cookie-footer-section" mb={4}>
                <Box paddingTop={1}>
                  <Flex justifyContent="center" alignItems="center">
                    <a onClick={onOpen} className="cursor-cookie-link">
                      <Text className="cookie-text-click">cookies</Text>
                    </a>
                  </Flex>
                </Box>
              </Box>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className="cookie-modal-section">
                  <ModalHeader className="cookie-modal-title sell-page-title ">
                    Cookies Policy
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody className="cookie-modal-body-section">
                    <Container className="cookie-modal-text sell-page-subText">
                      <span className="cookie-modal-text-capitalize sell-page-subText">
                        Privacy Policy{" "}
                      </span>
                      <br /> <br /> This Privacy Policy describes how
                      www.metanodelabs.vercel.app (the “Site” or “we” or "I")
                      collects, uses, and discloses your Personal Information
                      when you visit the Site.
                      <br /> <br />
                      <span className="cookie-modal-text-capitalize sell-page-subText">
                        Collecting Personal Information{" "}
                      </span>
                      <br /> <br />
                      When you visit the Site, we collect certain information
                      about your device, your interaction with the Site based on
                      Google Analytics policies.
                      <br />
                      We DO NOT collect additional information.
                      <br /> <br />
                      See the list below for more information about what
                      Personal Information Google Analytics collect and why.
                      <br /> <br />
                      <br />{" "}
                      <span className="cookie-modal-text-capitalize sell-page-subText">
                        TYPES OF COOKIES AND OTHER TECHNOLOGIES USED BY GOOGLE
                      </span>
                      <br />
                      <br />
                      Some or all of the cookies or other technologies described
                      below may be stored in your browser, app, or device. To
                      manage how cookies are used, including rejecting the use
                      of certain cookies, you can visit{" "}
                      <a
                        href="https://myaccount.google.com/data-and-personalization"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cookie-modal-external-link sell-page-subText"
                      >
                        Google Data
                      </a>{" "}
                      .
                      <br />
                      <br />
                      You can also manage cookies in your browser (though
                      browsers for mobile devices may not offer this
                      visibility).
                      <br />
                      <br />
                      Other technologies used to identify apps and devices may
                      be managed in your device settings or in an app's
                      settings.
                      <br />
                      <br />
                      <a
                        href="https://policies.google.com/technologies/cookies?hl=en-US"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          className="btn-Google-readMore sell-page-subText"
                        >
                          Read More about Google Policy
                        </Button>
                      </a>
                      <br />
                    </Container>
                  </ModalBody>

                  <ModalFooter>
                    <button className="btn-contact" mr={3} onClick={onClose}>
                      Close
                    </button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
            <HStack justifyContent="right" alignItems="right" mr={3}>
              <Link href="https://www.instagram.com/metanodefink/">
                <Box>
                  <TbBrandInstagram fontSize={25} />
                </Box>
              </Link>
              <Link href="https://www.linkedin.com/in/vic-thor-6aa023100">
                <Box>
                  <TbBrandLinkedin fontSize={25} />
                </Box>
              </Link>
              <Link href="https://twitter.com/thor_vee">
                <Box>
                  <TbBrandTwitter fontSize={25} />
                </Box>
              </Link>
            </HStack>
          </Stack>
        </section>
      </footer>
    </>
  );
};

export default Footer;
