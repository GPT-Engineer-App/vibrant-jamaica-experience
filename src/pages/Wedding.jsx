import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Wedding = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} bg="teal.500" color="white">
          <Heading as="h1" size="2xl">
            Weddings at Devon House
          </Heading>
          <Text fontSize="xl">Make your special day unforgettable</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            A Perfect Venue
          </Heading>
          <Text fontSize="md">Devon House offers a picturesque setting for your wedding. With its historic charm and beautiful gardens, it is the perfect venue to celebrate your special day.</Text>
          <Image src="https://images.unsplash.com/photo-1521804906057-2c7a2d14f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYXQlMjBEZXZvbiUyMEhvdXNlfGVufDB8fHx8MTcxNTY4ODgxN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding at Devon House" mt={4} borderRadius="md" />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Ceremony and Reception
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1521804906057-2c7a2d14f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBhdCUyMERldm9uJTIwSG91c2V8ZW58MHx8fHwxNzE1Njg4ODE4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Ceremony" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Ceremony
                </Heading>
                <Text mt={2}>Exchange vows in a beautiful garden setting.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1521804906057-2c7a2d14f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwYXQlMjBEZXZvbiUyMEhvdXNlfGVufDB8fHx8MTcxNTY4ODgxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Reception" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Reception
                </Heading>
                <Text mt={2}>Celebrate with family and friends in our elegant reception area.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Wedding;
