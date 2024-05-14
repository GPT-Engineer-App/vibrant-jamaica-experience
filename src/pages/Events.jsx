import { Box, Heading, Text } from "@chakra-ui/react";

function Events() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Events
      </Heading>
      <Text fontSize="lg">Welcome to the Events page. Here you will find information about upcoming events.</Text>
    </Box>
  );
}

export default Events;
