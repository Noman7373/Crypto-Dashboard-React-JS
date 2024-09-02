import React from "react";
import Card from "../../../components/Card";
import { Icon, VStack, Text, Center, Box, Container, Button } from "@chakra-ui/react";

import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Resetpasswordsucess = () => {
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
              Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Now you can access you account.
            </Text>
          </VStack>
          <Box w="full">
            <Link to="/signin" >
              <Button w="full" mt= '2rem'>Sign In</Button>
            </Link>
          </Box>
        </Card>
      </Center>
    </Container>
  );
};

export default Resetpasswordsucess;
