import {
  Box,
  Button,
  Center,
  Container,
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

const resetValidationScheme = object({
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Pssword is required"),
  repeatpasswrod: string()
    .oneOf([ref("Password "), null], "Password must match")
    .required("Repeat password is required"),
});

const PasswordReset = () => {
  return (
    <Container bg="white">
      <Center minH="100vh">
        <Card>
          <Text fontWeight="medium" textStyle="h4" color="p.black">
          Reset Password
          </Text>
          <Text textStyle="p" color="p.black" mt="2rem">
            Enter your new password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(value) => {
              console.log(value);
            }}
            validationSchema={resetValidationScheme}
          >
            <Form>
              <Stack mt="10" spacing={6}>
                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">New Passwoed</FormLabel>
                      <Input
                        {...field}
                        name="password"
                        type="password"
                        placeholder="Enter new password"
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="repeatpassword">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">
                        Repeat New Password
                      </FormLabel>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="on"
                        name="repeatpassword"
                        placeholder="Enter Repeat Password"
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Box>
                  <Link to="/reset-password-success">
                    <Button variant="outline" mt="3" width="full">
                      Reset Password
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Form>
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default PasswordReset;
