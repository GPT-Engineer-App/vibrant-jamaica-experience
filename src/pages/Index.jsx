import { Container, Text, VStack, Box, Heading, Image, SimpleGrid, IconButton, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10} bg="teal.500" color="white">
          <Heading as="h1" size="2xl">
            Devon House Jamaica
          </Heading>
          <Text fontSize="xl">Experience the Vibrance and History</Text>
        </Box>

        {/* History Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            A Glimpse into History
          </Heading>
          <Text fontSize="md">Devon House, built in 1881, is one of Jamaica's most celebrated landmarks. This Georgian-style mansion was the residence of Jamaica's first black millionaire, George Stiebel. Today, it stands as a symbol of Jamaica's rich cultural heritage and offers a unique blend of history, art, and culinary delights.</Text>
          <Image src="https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwSmFtYWljYXxlbnwwfHx8fDE3MTU2ODc2OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House" mt={4} borderRadius="md" />
        </Box>

        {/* Restaurants and Shops Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Restaurants and Shops
          </Heading>
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
        </Box>

        {/* Attractions Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Available Attractions
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwTWFuc2lvbiUyMFRvdXJ8ZW58MHx8fHwxNzE1Njg4MTIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House Mansion Tour" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Mansion Tour
                </Heading>
                <Text mt={2}>Take a guided tour of the historic Devon House mansion and learn about its rich history.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1636301587190-88cbb412fea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwR2FyZGVuc3xlbnwwfHx8fDE3MTU2ODgxMjR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House Gardens" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Devon House Gardens
                </Heading>
                <Text mt={2}>Stroll through the beautifully landscaped gardens and enjoy the serene environment.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1659901302829-6700782cd056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwU2hvcHBpbmd8ZW58MHx8fHwxNzE1Njg4MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House Shopping" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Shopping
                </Heading>
                <Text mt={2}>Explore a variety of shops offering local crafts, souvenirs, and more.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Footer Section */}
        <Box textAlign="center" py={10} bg="teal.500" color="white">
          <Text fontSize="lg">Follow Us</Text>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </HStack>
          <Text mt={4}>© 2023 Devon House Jamaica. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
