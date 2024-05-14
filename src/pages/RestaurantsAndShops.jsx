import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const RestaurantsAndShops = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} bg="teal.500" color="white">
          <Heading as="h1" size="2xl">
            Restaurants and Shops
          </Heading>
          <Text fontSize="xl">Discover the culinary delights and unique shops at Devon House</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwQmFrZXJ5fGVufDB8fHx8MTcxNTY4NzY5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House Bakery" />
            <Box p={4}>
              <Heading as="h3" size="md">
                Devon House Bakery
              </Heading>
              <Text mt={2}>Famous for its delicious patties and pastries, a must-visit for any food lover.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwSS1TY3JlYW18ZW58MHx8fHwxNzE1Njg4MTIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House I-Scream" />
            <Box p={4}>
              <Heading as="h3" size="md">
                Devon House I-Scream
              </Heading>
              <Text mt={2}>Enjoy a variety of ice cream flavors made from local ingredients.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwR3JvZyUyMFNob3BwZXxlbnwwfHx8fDE3MTU2ODgxMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House Grog Shoppe" />
            <Box p={4}>
              <Heading as="h3" size="md">
                Devon House Grog Shoppe
              </Heading>
              <Text mt={2}>A fine dining restaurant offering a mix of Jamaican and international cuisine.</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default RestaurantsAndShops;
