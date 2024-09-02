import React from "react";
import Card from "../../../components/Card";
import { Icon, VStack, Text, Button, Center, Box } from "@chakra-ui/react";

import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Registersuccess = () => {
  return (
    <Center minH="100vh">
      <Card>
        <VStack spacing={6}>
          <Icon color="green" boxSize="3rem" as={BsFillPatchCheckFill} />
          <Text textStyle="h4" color="p.black">
            Successfully Registration
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            Hurray! You have successfully created your account. Enter the app to
            explore all it’s features.
          </Text>
          <Box w='full'>
            <Link to="/signin">
              <Button w="full">Enter the App</Button>
            </Link>
          </Box>
        </VStack>
      </Card>
    </Center>
  );
};

export default Registersuccess;
