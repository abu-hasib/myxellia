import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import BrandLogo from "../assets/logo.svg";
import ProfileMenu from "./ProfileMenu";
import { Icons } from "./icons";
import Budgeter from "./Budgeter";
import Calendar from "./Calendar";
import MobileNavWithProvider from "./MobileNav";

function Navbar() {
  const { open, onClose, onOpen } = useDisclosure();
  return (
    <Box bg="#191919" height={82} as="nav">
      <Container height="full">
        <Flex height="full" justifyContent="space-between" align="center">
          <Icon>
            <img src={BrandLogo} alt="logo" width={153} />
          </Icon>
          <Box as={HStack}>
            <Flex gap={4} display={{ base: "none", md: "flex" }} align="center">
              <Icon as={Icons.notif} size="lg" />
              <Budgeter />
              <Calendar />
              <Icon as={Icons.message} size="lg" />
              <ProfileMenu name="Dylan" />
            </Flex>
            <MobileNavWithProvider
              open={open}
              onClose={onClose}
              onOpen={onOpen}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
