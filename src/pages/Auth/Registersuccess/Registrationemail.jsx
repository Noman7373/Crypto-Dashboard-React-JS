import React, { useEffect } from "react";
import Card from "../../../components/Card";
import {
  Icon,
  VStack,
  Text,
  Button,
  Center,
  Box,
  Container,
  useToast,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { sendVerificationEmail } from "../../../Api/Query/userQuery";

const Registrationemail = () => {
  const toast = useToast();
  const { email } = useParams();


  if (email === "") {
    return <Center h="100vh">Invalid Email</Center>;
  }
  // const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["send-verification-email"],
    mutationFn: () => sendVerificationEmail({ email }),
    onSettled: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

  // if (isLoading) {
  //   <Center h="100vh">
  //     <Spinner />
  //   </Center>;
  // }
  return (
    <Container>
      <Center minH="100vh">
        {/* {isSuccess && ( */}
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon color="p.purple" boxSize="3rem" as={MdEmail} />
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="p.black">
                {email}
              </Box>{" "}
              If you didn’t receive it, click the button below.{" "}
            </Text>
            <Box w="full">
              <Button
                w="full "
                variant="outline"
                onClick={() => {
                  mutate({ email });
                }}
                isLoading={isLoading}
              >
                Re-send Email
              </Button>
            </Box>
          </VStack>
        </Card>
        {/* )} */}
      </Center>
    </Container>
  );
};

export default Registrationemail;
