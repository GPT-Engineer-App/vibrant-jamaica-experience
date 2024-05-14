import { HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} justify="center" py={4} bg="teal.500" color="white">
      <Link as={RouterLink} to="/" fontSize="lg">
        Home
      </Link>
      <Link as={RouterLink} to="/wedding" fontSize="lg">
        Weddings
      </Link>
      <Link as={RouterLink} to="/restaurants-and-shops" fontSize="lg">
        Restaurants & Shops
      </Link>
      <Link as={RouterLink} to="/events" fontSize="lg">
        Events
      </Link>
    </HStack>
  );
};

export default Navigation;
