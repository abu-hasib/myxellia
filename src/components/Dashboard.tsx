import { Box, Container, VStack } from "@chakra-ui/react";
import WelcomeMessage from "./WelcomeMessage";
import OverviewSection from "./OverviewSection";
import PropertiesShowcase from "./PropertiesShowcase";

function Dashboard() {
  return (
    <Box>
      <Container>
        <VStack gap={4} align="start">
          <WelcomeMessage />
          <OverviewSection />
          <PropertiesShowcase />
        </VStack>
      </Container>
    </Box>
  );
}

export default Dashboard;
