import React from "react";
import Card from "../../../components/Card";
import { Icon, VStack, Text, Button, Center } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const Registrationemail = () => {
  return (
    <Center minH="100vh">
      <Card>
        <VStack spacing={6}>
          <Icon color="p.purple" boxSize="3rem" as={MdEmail} />
          <Text textStyle="h4" color="p.black">
            Email Verification
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            We have sent you an email verification to jenny.wilson@gmail.com. If
            you didn’t receive it, click the button below.
          </Text>
          <Button w="full" variant="outline">
            Re-Send Email
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default Registrationemail;
