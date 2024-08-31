import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMdMail} boxSize={6} color="p.purple" />
        <Text fontWeight="medium" as="h1" textStyle="h1">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p="6" borderRadius="1rem" bg="white">
        <Stack spacing={6}>
          <Text fontWeight="medium" fontSize="small">
            You will receive response within 24 hours of time of submit.
          </Text>

          <HStack>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter Your Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input type="text" placeholder="Arthur" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="name@gmail.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your message" />
          </FormControl>
          <Checkbox defaultUnChecked fontSize= 'xx'>
            I agree with
            <Box as="span" color="p.purple">
              Terms & Conditions{" "}
            </Box>
          </Checkbox>
          <Stack>
            <Button>Send a Message</Button>
            <Button colorScheme="gray">Book a Metting</Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
