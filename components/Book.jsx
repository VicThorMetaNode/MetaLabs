import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";

import Image from "next/image";

// Import CHAKRA tools
import {
  Box,
  Text,
  Stack,
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// import Chrono from "../components/Chrono/ChronoSetUp";

//Import IMAGES
import BookNode from "../dist/img/book.jpg";

import PreOrderBookForm from "../components/PreOrderBookForm";

const Book = () => {
  //toggle const
  const [showMore, setShowMore] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container py={10}>
        <Stack justifyContent="center" alignItems="center" direction="column">
          <Box m={2}>
            <Text
              className="sell-page-title book-title"
              textAlign="center"
              fontSize={["20px", "26px", "36px"]}
            >
              Want to know more about how to sell your art online ?
            </Text>
          </Box>
          <Box>
            <Image
              width="420px"
              height="560px"
              objectFit="cover"
              src={BookNode}
              alt="Book about how to master the art of selling online"
            />
          </Box>
          <Box>
            <Text
              className="sell-page-subText"
              fontSize={["13px", "17px", "17px"]}
            >
              "Every year online sales represent a higher percentage of the
              sales total in nearly all sectors of the economy, and the art
              markets are no exception. However, there are few empirical studies
              showing how online sales and digital technologies are transforming
              the art markets at a micro-level. <br />
              {showMore && (
                <>
                  <Text
                    className="sell-page-subText"
                    fontSize={["13px", "17px", "17px"]}
                  >
                    {" "}
                    <br />
                    Ultimately, these new cyber-physical technologies intend to
                    improve the communication between systems using artificial
                    intelligence methods of auto-optimization, self-diagnosis
                    and self-configuring, in the spirit of the so-called
                    Industry 4.0 (Vrchota et al. 2019).
                    <br />
                    <br />
                    However, at least until now, all this digital technology is
                    being used mainly to promote global art-world brand names
                    and a celebrity culture in the arts, creating the Soc. Sci.
                    2020, 9, 7 2 of 15 illusion that the art markets are
                    democratic and that the masses are part of it (Zarobell
                    2017, pp. 212– 15; Milano 2019)".
                  </Text>
                </>
              )}
            </Text>
            <Button
              mt={4}
              className="btn-book-readMore"
              size={"xs"}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? <p>read less</p> : <p>read more</p>}
            </Button>
          </Box>

          <Box>
            <Button
              mt={20}
              className="btn-getYourBook-yellow"
              size={["xs", "sm", "xl"]}
              onClick={onOpen}
            >
              get the book
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent mx={4} mt={40} className="modal-container">
                <ModalHeader className="modal-title">
                  Not available yet
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text
                    className="modal-text"
                    fontSize={["15px", "17px", "20px"]}
                  >
                    {/* <Chrono /> */}
                    The book will be released on{" "}
                    <span className="modal-text-span">february 2023</span>
                  </Text>
                  <Stack justifyContent="center" alignItems="center">
                    <Box mt={10} mx={2} p={10} className="form-box">
                      <PreOrderBookForm />
                    </Box>
                  </Stack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="gray"
                    mr={3}
                    onClick={onClose}
                    className="btn-getYourBook-modal-close"
                  >
                    Close
                  </Button>
                  <Link href="/preorder-book">
                    <Button className="btn-getYourBook-modal-preOrder">
                      The Book
                    </Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Book;
