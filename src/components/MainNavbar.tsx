import {
  Box,
  Container,
  Flex,
  Icon,
  PopoverTrigger,
  Avatar,
  Popover,
  VStack,
  Heading,
  HStack,
  Input,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import { BiBell, BiCalendar, BiMessage, BiSearch } from "react-icons/bi";
import { BsCalculator } from "react-icons/bs";

const navMenu = [
  { id: 1, icon: BiMessage, title: "Dashboard" },
  { id: 1, icon: BiMessage, title: "Dashboard" },
  { id: 1, icon: BiMessage, title: "Dashboard" },
  { id: 1, icon: BiMessage, title: "Dashboard" },
  { id: 1, icon: BiMessage, title: "Dashboard" },
];

function MainNavbar() {
  return (
    <Box bg="gray.50" height={62} as="nav">
      <Container height="full">
        <Flex height="full" justifyContent="space-between" align="center">
          {/* <Box flex={4} marginEnd="auto"> */}
            {/* <HStack align="center"> */}
              {navMenu.length
                ? navMenu.map((el) => (
                    <HStack key={el.id} align="center">
                      <Icon size="sm">
                        <el.icon height={40} width={40} color="black" />
                      </Icon>
                      <Heading size="sm" color="#3D3D3D" fontSize={14}>
                        {el.title}
                      </Heading>
                    </HStack>
                  ))
                : null}
            {/* </HStack> */}
          {/* </Box> */}
          {/* <Spacer /> */}
          <InputGroup width="sm" startElement={<BiSearch width={40} height={40} />}>
            <Input placeholder="Search" />
          </InputGroup>{" "}
        </Flex>
      </Container>
    </Box>
  );
}

export default MainNavbar;
