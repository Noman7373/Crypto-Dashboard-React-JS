import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
import { color } from "framer-motion";
const Transactiontable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2024-31-08",
      time: "10:06 AM",
      type: {
        name: "BHD Deposit",
        text: "E-Transfer",
      },
      amount: {
        Payment: "+ BHD 81,123.10",
      },
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2024-31-08",
      time: "10:06 AM",
      type: {
        name: "INR Withdraw",
        text: "Wire Transfer",
      },
      amount: {
        Payment: "+ BHD 81,123.10",
      },
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2024-31-08",
      time: "9:06 AM",
      type: {
        name: "Buy",
      },
      amount: {
        Payment: "+ BHD81,123.10",
      },
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2024-21-08",
      time: "2:06 PM",
      type: {
        name: "Sell",
      },
      amount: {
        Payment: "- 0.36401628 BTC",
        BHD: "+ $19,378.84",
      },
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2024-20-08",
      time: "1:06 PM",
      type: {
        name: "BTC Deposit",
      },
      amount: {
        Payment: "+ 4.13946104 BTC",
        BHD: "+ $37,929.31",
      },
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2024-10-08",
      time: "9:56 PM",
      type: {
        name: "BTC Withdraw",
      },
      amount: {
        Payment: "- 10.00000000 BTC",
        BHD: "- $62,017.58",
      },
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Cancelled: "#DC2626",
    Completed: "#059669",
  };
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>DATE & TIME</Th>
            <Th>TYPE</Th>
            <Th>AMOUNT</Th>
            <Th>STATUS</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="sm" fontWeight="medium">
                {data.id}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                {" "}
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.type?.text}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.amount.Payment}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.amount?.BHD}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Tag bgColor={statusColor[data.status]} color="white" borderRadius= 'full'>
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Transactiontable;
