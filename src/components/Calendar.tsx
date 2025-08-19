import { useState } from "react";
import { useColorModeValue } from "@/components/ui/color-mode";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // import base styles
import { Box, HStack, Icon } from "@chakra-ui/react";
import "./calendar.css";
import { PopoverProvider, PopoverTrigger } from "./ui/popover";
import { BiLeftArrow } from "react-icons/bi";
import { Icons } from "./icons";
import Popover from "./Popover";

const Calendar = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Box
      p={4}
      borderRadius="xl"
      bg={useColorModeValue("black", "white")} // light/dark mode
      color={useColorModeValue("gray.50", "gray.900")}
      boxShadow="xl"
      maxW="400px"
    >
      <ReactCalendar
        onChange={setValue}
        value={value}
        next2Label={null} // hide double arrows
        prev2Label={null}
        tileClassName={({ date, view }) => {
          // Add highlight class for selected day
          if (
            value instanceof Date &&
            date.toDateString() === value.toDateString()
          ) {
            return "highlight-day";
          }
          return "";
        }}
      />
    </Box>
  );
};

const CalendarWithProvider = () => (
  <PopoverProvider>
    <PopoverTrigger>
      <Icon as={Icons.calendar} size="lg" />
      <Popover css={{ "--popover-bg": "black" }}>
        <HStack>
          <Icon>
            <BiLeftArrow />
          </Icon>
        </HStack>
        <Calendar />
      </Popover>
    </PopoverTrigger>
  </PopoverProvider>
);

export default CalendarWithProvider;
