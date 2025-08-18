import { Tabs } from "@chakra-ui/react";
import type { ReactNode } from "react";

const SimpleTabs = () => {
  return (
    <Tabs.Root
      defaultValue="year"
      variant="subtle"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
    >
      <Tabs.List alignSelf="flex-end">
        <Tabs.Trigger value="week">1 Week</Tabs.Trigger>
        <Tabs.Trigger value="month">1 Month</Tabs.Trigger>
        <Tabs.Trigger value="year">1 Year</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
};

interface TabsContentProps {
  content: ReactNode;
  value: string;
}

export const TabsContent = ({ content, value }: TabsContentProps) => {
  return <Tabs.Content value={value}>{content}</Tabs.Content>;
};

export default SimpleTabs;
