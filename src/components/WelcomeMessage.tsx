import { Heading } from "@chakra-ui/react";

interface WelcomeMessageProps {
  username?: string;
}

function WelcomeMessage({ username = "Ahmed" }: WelcomeMessageProps) {
  return <Heading size="xl" my={4} color="black">Welcome, {username}</Heading>;
}

export default WelcomeMessage;
