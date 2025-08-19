import {
  Box,
  Card,
  Flex, HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { BiBracket } from "react-icons/bi";
import Stat from "./Stat";
import { FaPerson } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";
import { Icons } from "./icons";

const statsData = [
  { label: "Total", value: "20.7k" },
  { label: "Riders", value: "8.5k" },
  { label: "Subscribers", value: "7.5k" },
];

function UsersOverview() {
  return (
    <Card.Root width="full">
      <Box borderBottom="solid #E4E4E4" borderWidth="1">
        <Card.Header bg="#F9FAFB" justifyContent="space-between" paddingBlock="4">
          <Flex justifyContent="space-between">
            <HStack>
              <Icon  as={Icons.person} size="lg" />
              <Card.Title fontWeight="medium" fontSize="sm">
                Users Overview
              </Card.Title>
            </HStack>
            <HStack>
              <Link color="#4545FE" fontWeight="medium" fontSize="xs">
                View all
              </Link>
              <Icon>
                <LuChevronRight />
              </Icon>
            </HStack>
          </Flex>
        </Card.Header>
      </Box>
      <Card.Body flexDirection="row" gap="2">
        {statsData.length ? statsData.map((item) => <Stat {...item} />) : null}
      </Card.Body>
    </Card.Root>
  );
}

export default UsersOverview;
