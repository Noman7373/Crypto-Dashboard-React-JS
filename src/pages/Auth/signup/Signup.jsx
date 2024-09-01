import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
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
          >
            <Form>
              <Stack mt="10" spacing={6}>
                <Flex gap="4">
                  <Field name="name">
                    {({ field, meta }) => (
                      <FormControl isInvalid = {!!(meta.error && meta.touch)}>
                        <FormLabel htmlfor="name">Name</FormLabel>
                        <Input
                          {...field}
                          name="name"
                          placeholder="Enter Your Name"
                        />
                      </FormControl>
                    )}
                  </Field>

                  <FormControl>
                    <FormLabel htmlfor="surname">Surname</FormLabel>
                    <Input name="surname" placeholder="Arthur" />
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel htmlfor="email">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="name@gamil.com"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlfor="password">Password</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlfor="repeatPassword">
                    Repeat Password
                  </FormLabel>
                  <Input
                    name="repeatPassword"
                    type="password"
                    placeholder="Enter Your Repeat Password"
                  />
                </FormControl>
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
