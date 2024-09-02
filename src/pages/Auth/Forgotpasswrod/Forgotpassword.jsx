import React from "react";
import Card from "../../../components/Card";
import { Icon, VStack, Text, Button, Center, Box } from "@chakra-ui/react";

import { HiArrowSmallLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <Center minH="100vh">
      <Card>
        <VStack spacing={6}>
          <Icon boxSize="3rem" as={HiArrowSmallLeft} />
          <Text textStyle="h4" color="p.black">
            Forgot Password{" "}
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
          Enter your email address for which account you want to reset your password.
          </Text>
          <Box w="full">
            <Link to="/signin">
              <Button w="full">Reset Password</Button>
            </Link>
          </Box>
        </VStack>
      </Card>
    </Center>
  );
};

export default Forgotpassword;
