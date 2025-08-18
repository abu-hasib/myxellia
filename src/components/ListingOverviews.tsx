import { Box, Card, Flex, HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import Stat from "./Stat";
import { BsArrowBarRight } from "react-icons/bs";
import { TbBracketsAngle } from "react-icons/tb";
import { BiBracket } from "react-icons/bi";

const statsData = [
  { label: "Total", value: "1.8k" },
  { label: "Active", value: "80" },
  { label: "Archived", value: "1k" },
];

function ListingsOverview() {
  return (
    <Card.Root width="full">
      <Box borderBottom="solid #E4E4E4" borderWidth="1">
        <Card.Header bg="#F9FAFB" justifyContent="space-between" paddingBlock="4">
          <Flex justifyContent="space-between">
            <HStack>
              <Icon>
                <FaHome />
              </Icon>
              <Card.Title fontWeight="medium" fontSize="sm">
                Listings Overview
              </Card.Title>
            </HStack>
            <HStack>
              <Link color="#4545FE" fontWeight="medium" fontSize="xs">
                View all
              </Link>
              <Icon>
                <BiBracket />
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

export default ListingsOverview;
