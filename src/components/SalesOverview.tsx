import {
  Box,
  Button,
  Card,
  Flex, Tabs,
  useTabs
} from "@chakra-ui/react";
import SimpleTabs, { TabsContent } from "./Tabs";
import YearOverview from "./YearOverview";

const tabsContentList = [
  { id: 1, content: "Coming Soon..", value: "week" },
  { id: 2, content: "Coming Soon...", value: "month" },
  { id: 3, content: YearOverview, value: "year" },
];

const tabList = [
  { id: 1, label: "Week", value: "week" },
  { id: 2, label: "Month", value: "month" },
  { id: 3, label: "Year", value: "year" },
];

function SalesOverview() {
  const tabs = useTabs({
    defaultValue: "year",
  });

  return (
    <Tabs.RootProvider value={tabs}>
      <Card.Root size="lg">
        <Box borderBottom="solid #E4E4E4" borderWidth="1">
          <Card.Header justifyContent="space-between" padding="4">
            <Flex justifyContent="space-between" align="center">
              <Box>
                <Card.Title> Sales Overview</Card.Title>
                <Card.Description>
                  Showing overview Jan 2022 - Sep 2022
                </Card.Description>
              </Box>
              <Button size="sm" variant="outline" rounded="2xl">
                View Transactions
              </Button>
            </Flex>
          </Card.Header>
          <Card.Body color="fg.muted">
            <SimpleTabs tabs={tabList} defaultSelected="year" alignSelf="flex-end" />
          </Card.Body>
        </Box>
        {tabsContentList.length
          ? tabsContentList.map((item) => {
              const component =
                typeof item.content === "string" ? (
                  item.content
                ) : (
                  <item.content />
                );
              return (
                <TabsContent
                  key={item.id}
                  content={component}
                  value={item.value}
                />
              );
            })
          : null}
        <Card.Footer></Card.Footer>
      </Card.Root>
    </Tabs.RootProvider>
  );
}

export default SalesOverview;
