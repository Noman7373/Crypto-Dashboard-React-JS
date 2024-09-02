import React from "react";
import Card from "../../../components/Card";
import {
  Icon,
  VStack,
  Text,
  Button,
  Center,
  Box,
  Container,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Registrationemail = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <VStack spacing={6}>
            <Icon color="p.purple" boxSize="3rem" as={MdEmail} />
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="p.black">
                jenny.wilson@gmail.com
              </Box>{" "}
              If you didn’t receive it, click the button below.{" "}
            </Text>
            <Box w="full">
              <Link to="/forgot-password">
                <Button w="full ">Re-send Email</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default Registrationemail;
