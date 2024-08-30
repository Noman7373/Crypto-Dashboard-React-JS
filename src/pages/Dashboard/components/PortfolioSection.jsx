import { Text, HStack, Icon, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";

const PortfolioSection = () => {
  return (
    <HStack >
      <Stack flexDir='row' color= '#535d66'>
        <Text fontSize= '14px'>Total Portfolio Value</Text>
        <Icon as={IoIosInformationCircle} />
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
