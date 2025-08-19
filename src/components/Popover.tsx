import { Field, Input, Stack } from "@chakra-ui/react";
import { PopoverBody, PopoverContent } from "./ui/popover";
 

const Popover = ({children, ...props}) => {
  return (
    <PopoverContent {...props}>
      <PopoverBody {...props}>
        {children}
      </PopoverBody>
    </PopoverContent>
  );
};

export default Popover;
