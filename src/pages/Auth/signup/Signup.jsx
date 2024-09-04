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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signupUser } from "../../../Api/Query/userQuery";

const signUpValidationScheme = object({
  firstName: string().required("firstName is required"),
  lastName: string().required("lastName is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  // repeatPassword: string()
  //   .oneOf([ref("Password "), null], "Password must match")
  //   .required("Repeat password is required"),
});

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSettled: (data) => {
      if (email !== "") {
        navigate(`/register-verify-email/${email}`);
      }
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container bg="white">
      <Center minH="100vh">
        <Card>
          <Text textStyle="h1" fontWeight="medium">
            Welcome to Crypto App
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              setEmail(values.email);
              mutate({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
              });
            }}
            validationSchema={signUpValidationScheme}
          >
            <Form>
              <Stack mt="10" spacing={6}>
                <Flex gap="4">
                  <Field name="firstName">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Input
                          {...field}
                          autoComplete="first-Name"
                          name="firstName"
                          type="text"
                          placeholder="Enter Your First Name"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="lastName">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input
                          {...field}
                          name="lastName"
                          type="text"
                          placeholder="Enter your Last Name"
                          autoComplete="last-Name"
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
                        autoComplete="email"
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
                        autoComplete="current-password"
                        name="password"
                        placeholder="Enter Your Password"
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
                <Button type="submit" isLoading={isLoading}>
                  Create Account
                </Button>
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
