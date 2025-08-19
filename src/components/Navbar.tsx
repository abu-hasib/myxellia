import {
  Box,
  Container,
  Field,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
} from "@chakra-ui/react";
import BrandLogo from "../assets/logo.svg";
import { BiBell, BiCalendar, BiLeftArrow, BiMessage } from "react-icons/bi";
import { BsCalculator } from "react-icons/bs";
import { Avatar } from "./ui/avatar";
import { PopoverProvider, PopoverTrigger } from "./ui/popover";
import Popover from "./Popover";
import DarkCalendar from "./Calendar";
import ProfileMenu from "./ProfileMenu";

function Navbar() {
  return (
    <Box bg="#191919" height={82} as="nav">
      <Container height="full">
        <Flex height="full" justifyContent="space-between" align="center">
          <Icon>
            <img src={BrandLogo} alt="logo" />
          </Icon>
          <Flex gap={4} align="center">
            <Icon size="lg">
              <BiBell height={40} width={40} color="white" />
            </Icon>

            <Icon size="lg">
              <BsCalculator height={40} width={40} color="white" />
            </Icon>
            <PopoverProvider>
              <PopoverTrigger>
                <Icon size="lg">
                  <BiCalendar height={40} width={40} color="white" />
                </Icon>
                <Popover css={{ "--popover-bg": "black" }}>
                  <HStack>
                    <Icon>
                      <BiLeftArrow />
                    </Icon>
                  </HStack>
                  <DarkCalendar />
                </Popover>
              </PopoverTrigger>
            </PopoverProvider>
            <Icon size="lg">
              <BiMessage height={40} width={40} color="white" />
            </Icon>
            <PopoverProvider>
              <PopoverTrigger>
                <Avatar name="Dylan" />
              </PopoverTrigger>
              <Popover padding="2">
                <ProfileMenu />
              </Popover>
            </PopoverProvider>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

// const UserAvatar = () => {
//   return (
//     <Avatar.Root as="button">
//       <Avatar.Fallback name="avatar" />
//       <Avatar.Image as={Button} src="https://bit.ly/age-adebayo" />
//     </Avatar.Root>
//   );
// };

export default Navbar;
