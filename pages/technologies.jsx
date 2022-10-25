import React, { useState } from "react";
import Link from "next/link";

// Import CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Container,
  Spacer,
} from "@chakra-ui/react";

// Import PropTypes from 'prop-types'
import data from "../components/TechnoData";
import SingleQuestion from "../components/TechnoQuestions";

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

const techno = () => {
  //toggle const
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <section className="techno-page-section">
        <Box>
          <BigSingleTitleBlack title="Techno" />
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
              Technologies glossary
            </Text>
          </Stack>
        </Box>

        <Box className="qa-question-mapping-section">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </Box>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box mb={2}>
            <Text
              className="sell-page-subText"
              textAlign="center"
              fontSize={["16px", "26px", "30px"]}
              px={[6, 10, 10]}
            >
              Any question ?
            </Text>
          </Box>
          <Box>
            <Link href="/q&a">
              <Button className="btn-readMore" size={["xs", "sm", "xl"]}>
                Q&A
              </Button>
            </Link>
          </Box>
        </Stack>
      </section>
    </>
  );
};

export default techno;
