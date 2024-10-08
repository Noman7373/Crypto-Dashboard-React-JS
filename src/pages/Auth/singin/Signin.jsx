import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signinUser } from "../../../Api/Query/userQuery";

const SigninValidationScheme = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Pssword is required"),
});

const Signin = () => {
  
  //  for changes request like DELETE, PUT, PATCH, POST we use [useMutation hook] fro react-query
  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {},
    onError: (error) => {
      toast({
        title: "Signin Error",
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
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              mutate(values);
            }}
            validationSchema={SigninValidationScheme}
          >
            <Form>
              <Stack mt="10" spacing={6}>
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
                        autoComplete="password"
                        name="password"
                        placeholder="Enter Your Password"
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <HStack justify="space-between">
                  <Checkbox>
                    <Text textStyle="p3">Remember me</Text>
                  </Checkbox>{" "}
                  <Link to="/forgot-password">
                    {" "}
                    <Text textStyle="p3" as="span" color="p.purple">
                      Forget password?
                    </Text>
                  </Link>
                </HStack>
                <Box>
                  <Button
                    w="full"
                    type="submit"
                    colorScheme="gray"
                    isLoading={isLoading}
                  >
                    Log In
                  </Button>
                  <Link to="/signup">
                    <Button variant="outline" mt="3" width="full">
                      Create new acount
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

export default Signin;
