import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { CustumCard } from "../../../Chakra/Customcart";
import { FaPlusCircle } from "react-icons/fa";
import { AiFillMinusCircle } from "react-icons/ai";

const Currentprice = () => {
  const timeStamp = ["7:15 PM", "9:55 PM", "11:25 PM", "1:15 AM", "4:15 AM"];
  return (
    <CustumCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              xl: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack fontWeight="medium" color="green">
                <Icon as={GoArrowUpRight} />
                <Text fontSize="small" fontWeight="medium">
                  22%
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button>
            <Icon as={FaPlusCircle} />
            Buy
          </Button>
          <Button>
            <Icon as={AiFillMinusCircle} />
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px" spacing="4">
            {["1H", "1D", "1M", "1Y"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                key={tab}
                fontSize="small"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        {/* <TabPanels>
          <TabPanel></TabPanel>
        </TabPanels> */}
      </Tabs>
      <Image w="100%" src="/grap.svg" alt="grap" mt="3rem" />
      <HStack justify="space-between">
        {timeStamp.map((time) => (
          <Text key={time} fontSize="small" color="black.80">
            {time}
          </Text>
        ))}
      </HStack>
    </CustumCard>
  );
};

export default Currentprice;
