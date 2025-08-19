import SalesOverview from "./SalesOverview";
import { Box, Flex, VStack } from "@chakra-ui/react";
import ListingsOverview from "./ListingOverviews";
import UsersOverview from "./UsersOverview";

function OverviewSection() {
  return (
    <Box width="full">
      <Flex gap="4" flexWrap="wrap" direction={{ base: "column", md: "row" }}>
        <Box flex={{ base: "1", md: "2" }} width="full">
          <SalesOverview />
        </Box>
        <VStack
          flex={{ base: "1", md: "1" }}
          justifyContent="space-between"
          width="full"
        >
          <ListingsOverview />
          <UsersOverview />
        </VStack>
      </Flex>
    </Box>
  );
}

export default OverviewSection;
