import { Icon, Show, Tabs } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Icons } from "./icons";

export type TabItem = {
  id: number;
  icon: string;
  label: string;
  value: string;
};

interface SimpleTabsProps extends React.ComponentProps<"div"> {
  tabs?: TabItem[];
  defaultSelected?: string;
}
const SimpleTabs = ({ tabs = [], defaultSelected = "", ...props }: SimpleTabsProps) => {
  return (
    <Tabs.Root
      defaultValue={defaultSelected || tabs?.[0]?.value}
      variant="subtle"
      {...props}
    >
      <Tabs.List {...props}>
        {tabs.length
          ? tabs.map((item: TabItem) => {
              const TabIcon = Icons[item?.icon];
              return (
                <Tabs.Trigger value={item?.value}>
                  <Show when={item?.icon}>
                    <Icon size="lg">
                      <TabIcon />
                    </Icon>
                  </Show>
                  {item.label}
                </Tabs.Trigger>
              );
            })
          : null}
        {/* <Tabs.Trigger value="month">1 Month</Tabs.Trigger>
        <Tabs.Trigger value="year">1 Year</Tabs.Trigger> */}
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
