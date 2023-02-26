import React from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FiSearch, } from "react-icons/fi";
import { BiLocationPlus } from "react-icons/bi";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="gray.100"
      color="black"
    >
      <Box display="flex" alignItems="center">
        <Image src="https://scontent.fbbi5-3.fna.fbcdn.net/v/t39.30808-6/306048608_451378160345792_2193607994581555412_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Edusxl37dpQAX-LbCZR&_nc_ht=scontent.fbbi5-3.fna&oh=00_AfC0XrsqRu8JfMNg6AQnqj5Oxc0WO83c5gGOl-oJX-b6EA&oe=63FD6FCA" alt="Logo" boxSize={12}  borderRadius="50%" />
        <HStack ml={4}>
           
          <Button colorScheme="white" size="sm" color="black">
          <BiLocationPlus color="gray.300" size="small"/>
            Find a Restaurant
          </Button>
        </HStack>
      </Box>
      <Spacer/>
      <HStack spacing={5}>
        <Box>
          <Menu >
            <MenuButton as={Box} size="sm" fontWeight="500">
              Menu
            </MenuButton>
            <MenuList display="flex" flexDirection="row">
              <MenuItem width="fit-content">Breakfast</MenuItem>
              <MenuItem width="fit-content">Entrees</MenuItem>
              <MenuItem width="fit-content">Salads</MenuItem>
              <MenuItem width="fit-content">Sides</MenuItem>
              <MenuItem width="fit-content">Kids Meal</MenuItem>
              <MenuItem width="fit-content">Treats</MenuItem>
              <MenuItem width="fit-content">Drinks</MenuItem>
              <MenuItem width="fit-content" borderRight="1px solid grey">Dipping Sauces & Dressings</MenuItem>
              <MenuItem width="fit-content">Catering</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Box} size="sm" fontWeight="500">
            Stories
            </MenuButton>
            <MenuList display="flex" flexDirection="row">
              <MenuItem width="fit-content">Food</MenuItem>
              <MenuItem width="fit-content">Lifestyle</MenuItem>
              <MenuItem width="fit-content" borderRight="1px solid grey">Inside Chick-fil-A</MenuItem>
              <MenuItem width="fit-content">News</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Box} size="sm" fontWeight="500">
            About
            </MenuButton>
            <MenuList display="flex" flexDirection="row">
              <MenuItem width="fit-content">Who We Are</MenuItem>
              <MenuItem width="fit-content">Great Food</MenuItem>
              <MenuItem width="fit-content">Giving Back</MenuItem>
              <MenuItem width="fit-content" borderRight="1px solid grey">History</MenuItem>
              <MenuItem width="fit-content">S. Truett Cathy Brands</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Button size="sm" fontWeight="500">Careers</Button>
      </HStack>
      <Spacer />
      <HStack spacing={4}>
        <Box>
          <Button size="sm">Chick-fil-A Sign In</Button>
        </Box>
        <Box>
          <Button size="sm">Order</Button>
        </Box>
        <Box>
          <InputGroup size="sm">
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray.300" />}
            />
            <Input type="text" placeholder="Search" />
          </InputGroup>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navbar;
