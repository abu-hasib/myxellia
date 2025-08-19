import { Box, Text, VStack, HStack, Icon, Flex } from "@chakra-ui/react";
import { FiUsers, FiUser, FiLock, FiShield, FiLogOut } from "react-icons/fi";
import { Avatar } from "./ui/avatar";

const ProfileMenu = () => {
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
        <HStack gap="3" cursor="pointer" _hover={{ bg: "gray.50" }} pb={2} align="center">
          <Icon as={FiUsers} boxSize={5} />
          <Text fontWeight="semibold">Teams</Text>
        </HStack>

        <HStack gap="3" cursor="pointer" _hover={{ bg: "gray.50" }} pb={2} pt={4}>
          <Icon as={FiUser} boxSize={5} />
          <Text fontWeight="semibold">Contact Persons</Text>
        </HStack>

        <HStack gap="3" cursor="pointer" _hover={{ bg: "gray.50" }} pb={2} pt={4}>
          <Icon as={FiLock} boxSize={5} />
          <Text fontWeight="semibold">Change password</Text>
        </HStack>

        <HStack gap="3" cursor="pointer" _hover={{ bg: "gray.50" }} pb={2} pt={4}>
          <Icon as={FiShield} boxSize={5} />
          <Text fontWeight="semibold">2 - Factor Authentication</Text>
        </HStack>

        {/* <Divider /> */}

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
};

export default ProfileMenu;
