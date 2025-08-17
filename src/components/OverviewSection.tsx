import React from "react";
import SalesOverview from "./SalesOverview";
import { Box, Center, Flex, HStack, VStack } from "@chakra-ui/react";
import ListingsOverview from "./ListingOverviews";
import UsersOverview from "./UsersOverview";

function OverviewSection() {
  return (
    <Box width="full">
      <Flex gap="4">
        <Box flex="2" width="full">
          <SalesOverview />
        </Box>
        <VStack flex="1">
          <ListingsOverview />
          <UsersOverview />
        </VStack>
      </Flex>
    </Box>
  );
}

export default OverviewSection;
