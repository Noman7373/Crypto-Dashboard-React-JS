import React from "react";
import Card from "../../../components/Card";
import { Icon, VStack, Text, Center, Box, Container } from "@chakra-ui/react";

import { BsPatchCheckFill } from "react-icons/bs";

const Forgotpasswordsent = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon color="green" boxSize="3rem" as={BsPatchCheckFill} />
            <Text fontWeight="medium" textStyle="h4" color="p.black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="p.black">
                jenny.wilson@gmail.com
              </Box>{" "}
              Please follow the instructions from the email.We hava sent on an
              email verification to{" "}
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default Forgotpasswordsent;
