import { Text, HStack, Icon, Stack, Heading, Box } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidemenu = () => {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      justify="space-between"
      bg="white"
      w="16rem"
      h="140vh"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      width={{
        base: "full",
        lg: "16rem",
      }}
    >
      <Box>
        <Heading
          as="h1"
          textAlign="center"
          fontSize="20px"
          pt="3.5rem"
          color="Purple"
        >
          DOSOMECODING
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                mx="3"
                py="3"
                px="4"
                _hover={{
                  bg: "#f3f3f7",
                  cursor: "pointer",
                  color: "#171717",
                }}
                color="#797e82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#f3f3f7",
              cursor: "pointer",
              color: "#171717",
            }}
            color="#797e82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidemenu;
