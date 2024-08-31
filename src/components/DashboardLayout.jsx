import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidemenu from "./Sidemenu";
import Topnav from "./Topnav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidemenu />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          height="calc(130vh-88px)"
          mt="6"
          maxWidth="70rem"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
