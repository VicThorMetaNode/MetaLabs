import React, { useState } from "react";
import Image from "next/image";

//Import CHAKRA tools
import { Box, Flex, Stack, Text, Button, Container } from "@chakra-ui/react";

//Import IMAGES
import BookNode from "../dist/img/book.jpg";

import PreOrderBookForm from "../components/PreOrderBookForm";

const PreOrderBook = () => {
  //toggle const
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Box>
        <Container py={10}>
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Box m={2}>
              <Text
                className="sell-page-title"
                textAlign="center"
                fontSize={["120px", "170px", "197px"]}
                textTransform="uppercase"
                px={[6, 10, 10]}
              >
                Book
              </Text>
              {/* <Text
                className="sell-page-title book-title"
                textAlign="center"
                fontSize={["20px", "26px", "36px"]}
              >
                Will be released on{" "}
                <span className="modal-text-span">february 2023</span>
              </Text> */}
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
                "According to (McAndrew 2019, p. 260), in 2018 online sales in
                the art markets have reached nearly USD 6 billion, representing
                9% of the turnover of this sector, doubling the USD 3 billion
                achieved in 2013. However, not only is this percentage slightly
                behind the online sales’ percentage of the retail sector in
                general, where it represents 12% of the total, but it is also
                growing at a slower rate than the online sales of that sector,
                9.8% against 18% (Hiscox 2019, p. 2). <br />
                {showMore && (
                  <>
                    <Text
                      className="sell-page-subText"
                      fontSize={["13px", "17px", "17px"]}
                    >
                      {" "}
                      <br />
                      This divergence can be explained by the specificity of the
                      art markets.
                      <br />
                      <br />
                      1) First, a large percentage of the art markets’ value
                      originates from the top-segment, which involves the
                      trading of highly valuable and unique items, or nearly
                      unique, each one with its singularity and with a low
                      degree of substitutability, features that do not benefit
                      agents competing on the basis of price (McAndrew 2010, p.
                      17–19; Samdanis 2016).
                      <br />
                      <br />
                      2) Second, the most relevant customers belong to an older
                      generation (Silent Generation, Baby Boomers) who are more
                      resistant to online buying, in contrast to younger
                      generation (Generation X) and especially with the youngest
                      generation (Millennials, Generation Z). The latter use
                      mobile devices and social media more intensively for
                      sourcing and purchasing art, dismissing the need of
                      experiencing the work of art in person before buying it,
                      particularly in the case of less expensive works (Hiscox
                      2019, p. 12; McAndrew 2019, pp. 264–67; Sidorova 2019).
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

            <Stack justifyContent="center" alignItems="center">
              <Box mt={10} mx={2} p={10} className="form-box">
                <PreOrderBookForm />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default PreOrderBook;
