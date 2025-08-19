import { Box, HStack, VStack, Flex, Icon, Text } from "@chakra-ui/react";
import { FiUsers, FiUser, FiLock, FiShield, FiLogOut } from "react-icons/fi";
import { Avatar } from "./ui/avatar";
import { PopoverProvider, PopoverTrigger } from "./ui/popover";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Popover from "./Popover";
import type { TabItem } from "./Tabs";
import { Icons } from "./icons";

const navMenu: TabItem[] = [
  { id: 1, icon: "home", label: "Dashboard", value: "dashboard" },
  { id: 2, icon: "toolbox", label: "Listings", value: "listings" },
  { id: 3, icon: "profile", label: "Users", value: "users" },
  { id: 4, icon: "article", label: "Request", value: "request" },
  { id: 5, icon: "scroll", label: "Applications", value: "applications" },
];

function MobileNav() {
  return (
    <Box>
      {/* User Info */}
      <HStack bg="#F4F4F5" padding="2" rounded="2xl" gap={4} mb={4}>
        <Avatar name="Dylan" bg="green.500" size="lg" />
        <VStack align="start" gap={0}>
          <Text fontWeight="bold" fontSize="lg">
            Dylan Frank
          </Text>
          <Text fontSize="sm" color="gray.500">
            dylan96@mail.com
          </Text>
        </VStack>
      </HStack>

      {/* <Divider mb={3} /> */}

      {/* Menu Items */}
      <Flex flexDir="column" gap="3" divideY="1px">
        <HStack
          gap="3"
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          pb={2}
          align="center"
        >
          <Icon as={FiUsers} boxSize={5} />
          <Text fontWeight="semibold">Teams</Text>
        </HStack>

        <HStack
          gap="3"
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          pb={2}
          pt={4}
        >
          <Icon as={FiUser} boxSize={5} />
          <Text fontWeight="semibold">Contact Persons</Text>
        </HStack>

        <HStack
          gap="3"
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          pb={2}
          pt={4}
        >
          <Icon as={FiLock} boxSize={5} />
          <Text fontWeight="semibold">Change password</Text>
        </HStack>

        <HStack
          gap="3"
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          pb={2}
          pt={4}
        >
          <Icon as={FiShield} boxSize={5} />
          <Text fontWeight="semibold">2 - Factor Authentication</Text>
        </HStack>

        {/* <Divider /> */}
        {navMenu.map((item) => {
          const menuIcon = Icons[item.icon];
          return (
            <HStack
              key={item.id}
              gap="3"
              cursor="pointer"
              _hover={{ bg: "gray.50" }}
              py={2}
              color="gray.500"
              fontWeight="semibold"
            >
              <Icon as={menuIcon} boxSize={5} />
              <Text>{item.label}</Text>
            </HStack>
          );
        })}

        <HStack
          gap="3"
          cursor="pointer"
          _hover={{ bg: "red.50" }}
          py={2}
          color="red.500"
          fontWeight="semibold"
        >
          <Icon as={FiLogOut} boxSize={5} />
          <Text>Logout</Text>
        </HStack>
      </Flex>
    </Box>
  );
}

interface MobileNavWithProviderProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const MobileNavWithProvider = ({
  open,
  onClose,
  onOpen,
}: MobileNavWithProviderProps) => {
  return (
    <PopoverProvider>
      <PopoverTrigger>
        <Icon
          aria-label="Open Menu"
          as={open ? CgClose : GiHamburgerMenu}
          display={{ base: "flex", md: "none" }}
          color="white"
          onClick={open ? onClose : onOpen}
        />
      </PopoverTrigger>
      <Popover padding="2">
        <MobileNav />
      </Popover>
    </PopoverProvider>
  );
};

export default MobileNavWithProvider;
