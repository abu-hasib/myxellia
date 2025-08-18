import { Card, Icon as ChakraIcon, Flex, Text } from "@chakra-ui/react";
import { Icons } from "./icons";
import { FcEmptyTrash } from "react-icons/fc";
import { BiQuestionMark } from "react-icons/bi";

function StatsCard({
  title = "₦120,000,000.00",
  description = "Total Inflow",
  iconName = "",
  text = "",
  colors = { title: "", text: "" },
  ...props
}) {
  const Icon = Icons[iconName] || BiQuestionMark;
  return (
    <Card.Root>
      <Card.Header padding="2" minW={170}>
        <Card.Title color={colors.title}>{title}</Card.Title>
        <Flex alignItems="center" gap="1">
          <Card.Description
            color="#3D3D3D"
            fontSize="x-small"
            fontWeight="medium"
          >
            {description}
          </Card.Description>
          <ChakraIcon size="sm">
            <Icon />
          </ChakraIcon>
          <Text color={colors.text} fontSize="x-small" fontWeight="medium">
            {text}
          </Text>
        </Flex>
      </Card.Header>
    </Card.Root>
  );
}

export default StatsCard;
