import { Container, Text, VStack, Box, Heading, Image } from "@chakra-ui/react";

const History = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} bg="teal.500" color="white">
          <Heading as="h1" size="2xl">
            History of Devon House
          </Heading>
          <Text fontSize="xl">Discover the rich history of Devon House</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            A Glimpse into History
          </Heading>
          <Text fontSize="md">Devon House, built in 1881, is one of Jamaica's most celebrated landmarks. This Georgian-style mansion was the residence of Jamaica's first black millionaire, George Stiebel. Today, it stands as a symbol of Jamaica's rich cultural heritage and offers a unique blend of history, art, and culinary delights.</Text>
          <Image src="https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwSmFtYWljYXxlbnwwfHx8fDE3MTU2ODc2OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House" mt={4} borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default History;
