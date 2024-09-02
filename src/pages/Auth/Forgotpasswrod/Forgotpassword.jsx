import React from "react";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import {
  Icon,
  VStack,
  Text,
  Button,
  Center,
  Box,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Container,
} from "@chakra-ui/react";

import { HiArrowSmallLeft } from "react-icons/hi2";

import { Field, Formik } from "formik";
import { object, string } from "yup";

const Forgotpassword = () => {
  const ForgotValidationScheme = object({
    email: string().email("Email is invalid").required("Email is required"),
  });
  return (
    <Container>
      <Center minH="100vh">
        <Card
        // p={{
        //   base: "4",
        //   md: "10",
        // }}
        // showCard={true}
        >
          <VStack spacing={6}>
            <Link to="/signin">
              {" "}
              <Icon boxSize="3rem" as={HiArrowSmallLeft} />
            </Link>
            <Text mt="4" textStyle="h4" color="p.black" fontWeight="medium">
              Forgot Password{" "}
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Enter your email address for which account you want to reset your
              password.
            </Text>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={ForgotValidationScheme}
            >
              <Field name="email">
                {({ field, meta }) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      name="email"
                      type="email"
                      placeholder="name@gamil.com"
                    />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Formik>
            <Box w="full">
              <Link to="/register-verify-email">
                <Button w="full">Reset Password</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default Forgotpassword;
