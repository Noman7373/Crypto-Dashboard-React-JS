import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, ref, string } from "yup";
import Card from "../../../components/Card";

const signUpValidationScheme = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Pssword is required"),
  repeatPasswrod: string()
    .oneOf([ref("Password "), null], "Password must match")
    .required("Repeat password is required"),
});

const Signup = () => {
  return (
    <Container bg="white">
      <Center minH="100vh">
        <Card>
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPasswrod: "",
            }}
            onSubmit={(value) => {
              console.log(value);
            }}
            validationSchema={signUpValidationScheme}
          >
            <Form>
              <Stack mt="10" spacing={6}>
                <Flex gap="4">
                  <Field name="name">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                          {...field}
                          name="name"
                          type="text"
                          placeholder="Enter Your Name"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="surname">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="surname">Surname</FormLabel>
                        <Input
                          {...field}
                          name="surname"
                          type="text"
                          placeholder="Arthur"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>

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

                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="on"
                        name="password"
                        placeholder="Enter Your Password"
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="repeatPassword">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="repeatPassword">
                        Repeat Password
                      </FormLabel>
                      <Input
                        {...field}
                        autoComplete="on"
                        type="password"
                        name="repeatPassword"
                        placeholder="Enter Your Repeat Password"
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Checkbox>
                  <Text textStyle="p3">
                    I agree with{" "}
                    <Text as="span" color="p.purple">
                      Terms & Condition
                    </Text>
                  </Text>
                </Checkbox>
                <Button type="submit">Create Account</Button>
                <Text textStyle="p3" color="black.60" textAlign="center">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <Text as="span" color="p.purple">
                      Log In
                    </Text>
                  </Link>
                </Text>
              </Stack>
            </Form>
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
