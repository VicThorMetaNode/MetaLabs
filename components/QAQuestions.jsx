import React, { useState } from "react";

// Import CHAKRA tools
import { Box, Flex, Text, Container } from "@chakra-ui/react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question, answer }) => {
  //toggle const
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <Container className="question-content">
        <Flex justifyContent="space-between" alignItems="center">
          <Text
            className="sell-page-title"
            px={10}
            fontSize={["16px", "20px", "30px"]}
            fontWeight="300"
          >
            {" "}
            {question}{" "}
          </Text>

          <button
            className="question-btn"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </Flex>
        <Box>
          {showAnswer && (
            <Text
              className="sell-page-subText"
              fontSize={["14px", "16px", "25px"]}
              fontWeight="100"
              mt={2}
              p={4}
            >
              {answer}
            </Text>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Question;
