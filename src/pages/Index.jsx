import { Box, Container, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.900" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Dice & Chess</Heading>
          <Flex align="center">
            <FaPhone />
            <Text ml={2}>+123 456 7890</Text>
            <FaEnvelope ml={4} />
            <Text ml={2}>info@dicechess.com</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} wrap="wrap" justify="center" align="center" py={10}>
        <Box flex="1" p={5}>
          <Image src="path_to_dice_chess_image.jpg" alt="Dice on Chessboard" boxSize="100%" objectFit="cover" />
        </Box>
        <VStack flex="1" p={5} spacing={5} align="start">
          <Heading as="h2" size="xl">About Us</Heading>
          <Text fontSize="lg">
            Discover the art of strategy with our exclusive collection of dice and chess themed images. Explore the synergy between chance and skill through our curated gallery.
          </Text>
          <Heading as="h2" size="xl">Contact Us</Heading>
          <Text fontSize="lg">
            Have questions or need assistance? Contact us via email at info@dicechess.com or call us at +123 456 7890.
          </Text>
          <Heading as="h2" size="xl">Follow Us</Heading>
          <Flex>
            <FaInstagram size="24px" />
            <FaTwitter size="24px" ml={4} />
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;