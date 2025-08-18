import {
  Box,
  Flex,
  Float,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import property2 from "@/assets/property2.svg";
import property3 from "@/assets/property3.svg";

function PropertiesShowcase() {
  return (
    <HStack>
      <Box height="286" position="relative">
        <Image
          height={286}
          width="full"
          maxWidth="100%"
          rounded="2xl"
          src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.100"
        />
        <VStack
          align="flex-start"
          gap="0"
          position="absolute"
          bottom="10%"
          left="2%"
        >
          <Text
            color="#FFFFFF"
            fontWeight="medium"
            fontSize="sm"
            textTransform="uppercase"
            marginBottom="0"
          >
            Most CLICKED
          </Text>
          <Text color="#FFFFFF" fontWeight="semibold">
            Urban Prime Plaza Premiere
          </Text>
        </VStack>
      </Box>
      <Box position="relative">
        <Image height={286} width="full" rounded="2xl" src={property2} />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.100"
        />
        <VStack
          align="flex-start"
          gap="0"
          position="absolute"
          bottom="10%"
          left="2%"
        >
          <Text
            color="#FFFFFF"
            fontWeight="medium"
            fontSize="sm"
            textTransform="uppercase"
            marginBottom="0"
          >
            most WATCHLISTED
          </Text>
          <Text color="#FFFFFF" fontWeight="semibold">
            Urban Prime Plaza Premiere
          </Text>
        </VStack>
      </Box>
      <Box position="relative">
        <Image
          height={286}
          width="full"
          rounded="2xl"
          src={property3}
          alt="property"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.100"
        />
        <VStack
          align="flex-start"
          gap="0"
          position="absolute"
          bottom="10%"
          left="2%"
        >
          <Text
            color="#FFFFFF"
            fontWeight="medium"
            fontSize="sm"
            textTransform="uppercase"
            marginBottom="0"
          >
            HOTTEST LISTING
          </Text>
          <Text color="#FFFFFF" fontWeight="semibold">
            Urban Prime Plaza Premiere
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
}

export default PropertiesShowcase;
