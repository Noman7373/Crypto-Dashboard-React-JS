import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg= "#fff">
      <HStack maxW="70rem" mx="auto" h="16" justify="space-between">
        <Icon
          as={TiThMenu}
          onClick={onOpen}
          display={{
            lg: "none",
            base: "block",
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaRegCircleUser} fontSize="24px"></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
