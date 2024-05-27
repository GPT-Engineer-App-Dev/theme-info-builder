import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.900" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Dice & Chess</Heading>
          <Flex align="center">
            <FaFacebook size="1.5em" style={{ marginRight: 15 }} />
            <FaTwitter size="1.5em" style={{ marginRight: 15 }} />
            <FaInstagram size="1.5em" />
          </Flex>
        </Flex>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} wrap="wrap" justify="center" align="center" py={10}>
        <Box flex="1" p={5}>
          <Image src="path-to-dice-chessboard-image.jpg" alt="Dice on Chessboard" borderRadius="lg" />
        </Box>
        <VStack flex="1" p={5} spacing={5} align="start">
          <Heading as="h2" size="xl">About Us</Heading>
          <Text fontSize="lg">
            Discover the art of strategy and chance with our exclusive collection of dice and chess themed imagery.
          </Text>
          <Heading as="h3" size="lg">Contact Us</Heading>
          <Flex align="center">
            <FaPhone style={{ marginRight: 5 }} />+123 456 7890
          </Flex>
          <Flex align="center">
            <FaEnvelope style={{ marginRight: 5 }} />contact@dicechess.com
          </Flex>
        </VStack>
      </Flex>
      <Box as="footer" bg="gray.800" color="white" py={4}>
        <Flex justify="center" align="center">
          <Text>&copy; {new Date().getFullYear()} Dice & Chess. All rights reserved.</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;