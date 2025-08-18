import {
    Box,
    Container, Flex,
    Icon
} from "@chakra-ui/react";
import BrandLogo from "../assets/logo.svg";
import { BiBell, BiCalendar, BiMessage } from "react-icons/bi";
import { BsCalculator } from "react-icons/bs";
import { Avatar } from "./ui/avatar";
import { PopoverTrigger } from "./ui/popover";
import Popover from "./Popover";

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
            <Icon size="lg">
              <BiCalendar height={40} width={40} color="white" />
            </Icon>
            <Icon size="lg">
              <BiMessage height={40} width={40} color="white" />
            </Icon>
            <PopoverTrigger>
              <Avatar name="Dylan" />
            </PopoverTrigger>
          </Flex>
        </Flex>
        <Popover />
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
