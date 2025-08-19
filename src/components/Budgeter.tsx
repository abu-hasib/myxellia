import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Button,
  Dialog,
  Portal,
  Image,
} from "@chakra-ui/react";
import { Icons } from "./icons";
import { PopoverProvider } from "./ui/popover";
import sketch from "@/assets/url motion.png";

const Budgeter = () => {
  return (
    <Box>
      <Image src={sketch} alt="sketch" w="full" />
      <VStack align="stretch" gap={6} p={6}>
        <HStack align="center" gap={3}>
          <Icon as={Icons.settings} size="xl" color="gray.600" />
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

        <HStack align="center" gap={3}>
          <Icon as={Icons.trendUp} size="xl" color="gray.600" />
          <Box>
            <Text fontWeight="bold">Track actuals vs budget in real time</Text>
            <Text fontSize="sm" color="gray.600">
              See how your community is performing against plan, month by month.
            </Text>
          </Box>
        </HStack>

        <HStack align="center" gap={3}>
          <Icon as={Icons.up} size="xl" color="gray.600" />
          <Box>
            <Text fontWeight="bold">Adjust figures and forecast with ease</Text>
            <Text fontSize="sm" color="gray.600">
              Edit amounts, apply percentage changes, or roll forward last
              year’s data—all in one place.
            </Text>
          </Box>
        </HStack>
      </VStack>
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
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Icon as={Icons.budgeter} size="lg" />
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Body p={0}>
                <Budgeter />
              </Dialog.Body>
              <Dialog.Footer />
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </PopoverProvider>
  );
};

export default BudgeterWithProvider;
