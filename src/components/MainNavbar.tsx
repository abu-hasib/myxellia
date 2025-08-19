import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  useTabs,
  Tabs,
  Icon,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import SimpleTabs, { type TabItem } from "./Tabs";

const navMenu: TabItem[] = [
  { id: 1, icon: "home", label: "Dashboard", value: "dashboard" },
  { id: 2, icon: "toolbox", label: "Listings", value: "listings" },
  { id: 3, icon: "profile", label: "Users", value: "users" },
  { id: 4, icon: "article", label: "Request", value: "request" },
  { id: 5, icon: "scroll", label: "Applications", value: "applications" },
];

function MainNavbar() {
  const tabs = useTabs({
    defaultValue: "dashboard",
  });
  return (
    <Box
      bg=""
      borderBottom="1px solid #F4F4F5"
      height={67}
      as="nav"
      mb={{ base: "4", md: "unset" }}
    >
      <Container height="full">
        <Flex
          height="full"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          gap={{ base: 2, md: 8 }}
          align="center"
        >
          <Tabs.RootProvider
            flex={{ base: "unset", md: "2" }}
            display={{ base: "none", md: "flex" }}
            value={tabs}
          >
            <SimpleTabs
              tabs={navMenu}
              width="full"
              justifyContent={{ base: "center", md: "space-between" }}
            />
          </Tabs.RootProvider>
          <InputGroup
            width="sm"
            bg="gray.300"
            rounded="xl"
            display={{base: "none", md: "block"}}
            startElement={<Icon as={BiSearch} size="lg" color="#3D3D3D" />}
          >
            <Input
              placeholder="Search... properties, customers here"
              fontSize="xs"
            />
          </InputGroup>{" "}
        </Flex>
      </Container>
    </Box>
  );
}

export default MainNavbar;
