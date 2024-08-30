import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import Sidemenu from "./Sidemenu";

const SideDrawer = ({isOpen , onClose}) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody overflowY='hidden'>
           <Sidemenu />
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
