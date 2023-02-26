import React from "react";
import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={8}>
      <Container maxW="container.lg">
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          <Stack>
            <Text fontWeight="bold" mb={4}>
              About Chick-fil-A
            </Text>
            <Link href="#">Our Story</Link>
            <Link href="#">Our Menu</Link>
            <Link href="#">Nutrition</Link>
            <Link href="#">Allergens</Link>
            <Link href="#">FAQs</Link>
          </Stack>
          <Stack>
            <Text fontWeight="bold" mb={4}>
              Careers
            </Text>
            <Link href="#">Corporate</Link>
            <Link href="#">Restaurant</Link>
            <Link href="#">Team Member</Link>
            <Link href="#">Apply Now</Link>
          </Stack>
          <Stack>
            <Text fontWeight="bold" mb={4}>
              Connect with Us
            </Text>
            <Link href="#" isExternal>
              <Flex align="center">
                <FaFacebook size={20} mr={2} />
                <Text>Facebook</Text>
              </Flex>
            </Link>
            <Link href="#" isExternal>
              <Flex align="center">
                <FaTwitter size={20} mr={2} />
                <Text>Twitter</Text>
              </Flex>
            </Link>
            <Link href="#" isExternal>
              <Flex align="center">
                <FaInstagram size={20} mr={2} />
                <Text>Instagram</Text>
              </Flex>
            </Link>
          </Stack>
          <Stack>
            <Text fontWeight="bold" mb={4}>
              Legal
            </Text>
            <Link href="#">Terms &amp; Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
        <Flex justify="space-between" align="center" mt={8}>
          <Text>&copy; 2023 Chick-fil-A, Inc.</Text>
          <Text>Designed and developed by [Your Name]</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
