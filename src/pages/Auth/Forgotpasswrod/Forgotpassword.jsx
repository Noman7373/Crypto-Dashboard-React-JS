import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  useToast,
  Stack,
} from "@chakra-ui/react";

import { HiArrowSmallLeft } from "react-icons/hi2";

import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { sendForgotMail } from "../../../Api/Query/userQuery";

const Forgotpassword = () => {
  const ForgotValidationScheme = object({
    email: string().email("Email is invalid").required("Email is required"),
  });
  // const { email } = useParams();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, isLoading,isSuccess } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,
    onSettled: (data) => {
      if (email) {
        navigate(`/forgot-success/${email}`);
      }
    },
    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
      });
    },
  });

  useEffect(() => {
    if (email) {
      navigate(`/forgot-success/${email}`);
    }
  }, [email, navigate]);

  return (
    <>
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
              <Link to="/signin">
                {" "}
                <Icon boxSize="3rem" as={HiArrowSmallLeft} />
              </Link>
              <Text mt="4" textStyle="h4" color="p.black" fontWeight="medium">
                Forgot Password{" "}
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                Enter your email address for which account you want to reset
                your password.
              </Text>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={(values) => {
                  setEmail(values.email);
                  mutate({ email: values.email });
                  // console.log(values);
                }}
                validationSchema={ForgotValidationScheme}
              >
                <Form>
                  <Stack mt="8" spacing={6}>
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

                    <Box w="full">
                      <Button
                        w="full"
                        type="submit"
                        variant="outline"
                        isLoading={isLoading}
                      >
                        Reset Password
                      </Button>
                    </Box>
                  </Stack>
                </Form>
              </Formik>
            </VStack>
          </Card>
        </Center>
      </Container>
    </>
  );
};

export default Forgotpassword;
