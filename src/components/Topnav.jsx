import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaRegCircleUser } from "react-icons/fa6";

const Topnav = ({title}) => {
  return (
    <Box>
      <HStack maxW="80rem" mx="auto" h="16" justify="space-between" px="32">
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
