import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustumCard } from "../../../Chakra/Customcart";
import { TbCurrencyBahraini } from "react-icons/tb";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { Fragment } from "react";

const Transactions = () => {
  const transaction = [
    {
      id: "1",
      icon: TbCurrencyBahraini,
      text: "BHD Deposite",
      amount: "+ BHD81,123.10",
      timestamp: "2024-30-08 09:10 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2024-26-08 03:10 AM",
    },
    {
      id: "3",
      icon: TbCurrencyBahraini,
      text: "BHD Deposite",
      amount: "+ BHD81,123.10",
      timestamp: "2024-30-08 09:10 PM",
    },
  ];
  return (
    <CustumCard h="full" bg= 'white'>
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transaction
      </Text>
      <Stack spacing={4}>
        {transaction.map((recentTransfer, i) => {
          return (
            <Fragment key={recentTransfer.id}>
              {i == !0 && <Divider />}
              <Flex gap="4">
                <Grid
                  placeItems="center"
                  bg="black.5"
                  textAlign="center"
                  boxSize={10}
                  borderRadius="full"
                >
                  <Icon as={recentTransfer.icon} />
                </Grid>
                <Flex justify="space-between" w="full">
                  <Stack spacing={0}>
                    <Text textStyle="h6">{recentTransfer.text}</Text>
                    <Text fontSize="small" color="black.40">
                      {recentTransfer.timestamp}
                    </Text>
                  </Stack>
                  <Text textStyle="h6">{recentTransfer.amount}</Text>
                </Flex>
              </Flex>
            </Fragment>
          );
        })}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">
        View All
      </Button>
    </CustumCard>
  );
};

export default Transactions;
