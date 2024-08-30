import { Text, HStack, Icon, Stack, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={IoIosInformationCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            BHD 112,312.24
          </Text>
        </Stack>
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
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                BHD 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight="medium">
                BHD
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button>
          <Icon as={GoArrowDown} />
          Deposite
        </Button>
        <Button>
          <Icon as={GoArrowUp} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
