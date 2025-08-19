import { useState } from "react";
import {
  useColorModeValue
} from "@/components/ui/color-mode";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // import base styles
import { Box } from "@chakra-ui/react";
import './calendar.css'

const DarkCalendar = () => {
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
      <Calendar
        onChange={setValue}
        value={value}
        next2Label={null} // hide double arrows
        prev2Label={null}
        tileClassName={({ date, view }) => {
          // Add highlight class for selected day
          if (value instanceof Date && date.toDateString() === value.toDateString()) {
            return "highlight-day";
          }
          return "";
        }}
      />
    </Box>
  );
};

export default DarkCalendar;
