import React, { useState } from "react";
import Link from "next/link";

// Import CHAKRA tools
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

// import GetForm from "../components/GetForm";
import Book from "../components/Book";

// Import PropTypes from 'prop-types'
import data from "../components/QAData";
import SingleQuestion from "../components/QAQuestions";

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

const QandA = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <section className="qa-page-section">
        <Box>
          <BigSingleTitleBlack title="Q&A" />
        </Box>

        <Box className="qa-title-box">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Text
              className="sell-page-title"
              textAlign="center"
              fontSize={["26px", "46px", "56px"]}
              textTransform="uppercase"
              px={[6, 10, 10]}
              mt={10}
            >
              Questions & Answers
            </Text>
          </Stack>
        </Box>

        <Box className="qa-question-mapping-section">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </Box>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          mb={20}
        >
          <Box mb={2}>
            <Text
              className="sell-page-subText"
              textAlign="center"
              fontSize={["16px", "26px", "30px"]}
              px={[6, 10, 10]}
            >
              Not convince yet ? Contact me
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
        <Box>
          <Book />
        </Box>
      </section>
    </>
  );
};

export default QandA;
