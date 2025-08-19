import { Box, VStack, HStack, Text, Icon, Button } from "@chakra-ui/react";
import { FiSliders, FiBarChart2, FiTrendingUp } from "react-icons/fi";
import { Icons } from "./icons";
import { PopoverProvider, PopoverTrigger } from "./ui/popover";
import Popover from "./Popover";

const Budgeter = () => {
  return (
    <Box>
      {/* Top Section with Icon */}
      <Box bg="blue.900" py={10} display="flex" justifyContent="center">
        <Icon as={Icons.budgeter} boxSize={16} color="white" />
      </Box>

      {/* Content */}
      <VStack align="stretch" spacing={6} p={6}>
        {/* Feature 1 */}
        <HStack align="start" spacing={3}>
          <Icon as={FiSliders} boxSize={5} color="gray.600" />
          <Box>
            <Text fontWeight="bold">
              Set up annual budgets by account category
            </Text>
            <Text fontSize="sm" color="gray.600">
              Allocate funds across income and expense lines with full
              visibility.
            </Text>
          </Box>
        </HStack>

        {/* Feature 2 */}
        <HStack align="start" spacing={3}>
          <Icon as={FiBarChart2} boxSize={5} color="gray.600" />
          <Box>
            <Text fontWeight="bold">Track actuals vs budget in real time</Text>
            <Text fontSize="sm" color="gray.600">
              See how your community is performing against plan, month by month.
            </Text>
          </Box>
        </HStack>

        {/* Feature 3 */}
        <HStack align="start" spacing={3}>
          <Icon as={FiTrendingUp} boxSize={5} color="gray.600" />
          <Box>
            <Text fontWeight="bold">Adjust figures and forecast with ease</Text>
            <Text fontSize="sm" color="gray.600">
              Edit amounts, apply percentage changes, or roll forward last
              year’s data—all in one place.
            </Text>
          </Box>
        </HStack>
      </VStack>
      {/* CTA Button */}
      <Box p={6} textAlign="center">
        <Button
          w="full"
          size="lg"
          borderRadius="full"
          colorScheme="blackAlpha"
          bg="black"
          color="white"
          _hover={{ bg: "gray.800" }}
        >
          Create Budget
        </Button>
      </Box>
    </Box>
  );
};

const BudgeterWithProvider = () => {
  return (
    <PopoverProvider>
      <PopoverTrigger>
        <Icon as={Icons.budgeter} size="lg" />
      </PopoverTrigger>
      <Popover>
        <Budgeter />
      </Popover>
    </PopoverProvider>
  );
};

export default BudgeterWithProvider;
