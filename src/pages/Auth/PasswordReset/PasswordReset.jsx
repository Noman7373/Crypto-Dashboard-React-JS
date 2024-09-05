import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field} from "formik";
import { object, ref, string } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { verifyForgotToken } from "../../../Api/Query/userQuery";

const resetValidationScheme = object({
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Pssword is required"),
  repeatpasswrod: string()
    .oneOf([ref("Password "), null], "Password must match")
    .required("Repeat password is required"),
});

const PasswordReset = () => {
  const toast = useToast();
  const navigate = useNavigate();

  /// get token from URL
  const { token } = useParams();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["verify-token"],
    mutationFn: verifyForgotToken,
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "signUp error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },
    onSettled: () => {
      navigate("/reset-password-success");
    },
  });

  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );

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
              mutate({ token, password: value.password });
            }}
            validationSchema={resetValidationScheme}
          >
            <Form>
              <Stack mt="10" spacing={6}>
                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">New Password</FormLabel>
                      <Input
                        {...field}
                        autoComplete="password"
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
                        autoComplete="repeat-password"
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
