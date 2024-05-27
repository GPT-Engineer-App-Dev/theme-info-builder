import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4}>About Us</Heading>
          <Text fontSize="lg">We are passionate about the art of games and photography. Our gallery showcases the beauty of game pieces captured in unique settings.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4}>Contact Information</Heading>
          <VStack spacing={3}>
            <Link href="tel:+1234567890" isExternal display="flex" alignItems="center"><FaPhone /> +1 234-567-890</Link>
            <Link href="mailto:info@example.com" isExternal display="flex" alignItems="center"><FaEnvelope /> info@example.com</Link>
            <Link href="https://instagram.com" isExternal display="flex" alignItems="center"><FaInstagram /> Instagram</Link>
            <Link href="https://twitter.com" isExternal display="flex" alignItems="center"><FaTwitter /> Twitter</Link>
          </VStack>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={4}>Gallery</Heading>
          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={5}>
            <Image src="path/to/dice-image.jpg" alt="Dice on Chessboard" boxSize="100%" objectFit="cover" borderRadius="lg" />
            <Image src="path/to/related-image1.jpg" alt="Related Image 1" boxSize="100%" objectFit="cover" borderRadius="lg" />
            <Image src="path/to/related-image2.jpg" alt="Related Image 2" boxSize="100%" objectFit="cover" borderRadius="lg" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;