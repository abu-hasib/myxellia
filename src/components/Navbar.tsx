import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import BrandLogo from "../assets/logo.svg";
import ProfileMenu from "./ProfileMenu";
import { Icons } from "./icons";
import Budgeter from "./Budgeter";
import Calendar from "./Calendar";

function Navbar() {
  return (
    <Box bg="#191919" height={82} as="nav">
      <Container height="full">
        <Flex height="full" justifyContent="space-between" align="center">
          <Icon>
            <img src={BrandLogo} alt="logo" />
          </Icon>
          <Flex gap={4} align="center">
            <Icon as={Icons.notif} size="lg" />
            <Budgeter />
            <Calendar />
            <Icon as={Icons.message} size="lg" />
            <ProfileMenu name="Dylan"/>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
