import { Box, Button, Card, Flex, Heading, HStack } from "@chakra-ui/react";

function SalesOverview() {
  return (
    <Card.Root size="lg">
      <Card.Header justifyContent="space-between">
        <Flex justifyContent="space-between">
          <Box>
            <Card.Title> Sales Overview</Card.Title>
            <Card.Description>
              Showing overview Jan 2022 - Sep 2022
            </Card.Description>
          </Box>
            <Button size="sm" >
              Buy Latte
            </Button>
        </Flex>
      </Card.Header>
      <Card.Body color="fg.muted">
        <HStack></HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default SalesOverview;
