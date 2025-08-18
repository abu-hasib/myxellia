import SalesOverview from "./SalesOverview";
import { Box, Flex, VStack } from "@chakra-ui/react";
import ListingsOverview from "./ListingOverviews";
import UsersOverview from "./UsersOverview";

function OverviewSection() {
  return (
    <Box width="full">
      <Flex gap="4">
        <Box flex="2" width="full">
          <SalesOverview />
        </Box>
        <VStack justifyContent="space-between" flex="1" width="full">
          <ListingsOverview />
          <UsersOverview />
        </VStack>
      </Flex>
    </Box>
  );
}

export default OverviewSection;
