import { Field, Input, Stack } from "@chakra-ui/react";
import { PopoverBody, PopoverContent } from "./ui/popover";

const Popover = () => {
  return (
    <PopoverContent>
      <PopoverBody>
        <Stack gap={2}>
          <Field.Root>
            <Field.Label>Width</Field.Label>
            <Input placeholder="40px" />
          </Field.Root>
        </Stack>
      </PopoverBody>
    </PopoverContent>
  );
};

export default Popover;
