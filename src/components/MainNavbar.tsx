import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  useTabs,
  Tabs,
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
    <Box bg="" borderBottom="1px solid #F4F4F5" height={67} as="nav">
      <Container height="full">
        <Flex height="full" justifyContent="space-between" align="center">
          <Tabs.RootProvider flex="2" width="full" value={tabs}>
            <SimpleTabs tabs={navMenu} />
          </Tabs.RootProvider>
          <InputGroup
            width="sm"
            startElement={<BiSearch width={40} height={40} />}
          >
            <Input placeholder="Search" />
          </InputGroup>{" "}
        </Flex>
      </Container>
    </Box>
  );
}

export default MainNavbar;
