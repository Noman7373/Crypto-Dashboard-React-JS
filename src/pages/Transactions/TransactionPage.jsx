import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { IoIosDownload } from "react-icons/io";
import Transactiontable from "./components/Transactiontable";
import { CiSearch } from "react-icons/ci";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 411,
    },
    {
      name: "Deposite",
      count: 150,
    },
    {
      name: "Withdraw",
      count: 210,
    },
    {
      name: "Trade",
      count: 51,
    },
  ];
  return (
    <DashboardLayout title= 'Transaction'>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={IoIosDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" justifyContent= 'space-between'>
            <HStack>
              {tabs.map((tabList) => {
                return (
                  <Tab key={tabList.name} display="flex" gap="2" pb= '4'>
                    {tabList.name}{" "}
                    <Tag colorScheme="gray" borderRadius="full">
                      {tabList.count}
                    </Tag>
                  </Tab>
                );
              })}
            </HStack>
            <InputGroup maxWidth="200px"  pr= '6'>
              <InputLeftElement pointerEvents="none">
                <Icon as={CiSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
