import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Sidemenu from "./Sidemenu";
import Topnav from "./Topnav";

const DashboardLayout = ({ title }) => {
  return (
    <Flex>
      <Sidemenu />
      <Box flexGrow={1}>
        <Topnav title={title} />
        <Container maxWidth ="80rem" bg= 'red'></Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
