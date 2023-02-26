import React from "react";
import { Box, Button, Center, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box
        w="95%"
        h="700px"
        mx="auto"
        my={8}
        display="flex"
        alignItems="center"
        textAlign="left"
      >
        <Box flex="1" mr={16}>
          <Text as="h3">See you tomorrow</Text>
          <Text as="h1" fontSize="6xl" fontWeight="bold" mb={8}>
            It’ll be our pleasure to
            <br /> serve you again soon
          </Text>
          <Button colorScheme="red" size="lg">
            Schedule your catering order
          </Button>
        </Box>
        <Box flex="1">
          <Image
            src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/large-CFA2212020-Catering-Daypart-Desktop_710x580V3-1.jpg?h=580&w=710&la=en"
            alt="My Image"
            objectFit="cover"
            h="100%"
          />
        </Box>
      </Box>
      
      <Box w="95%" height="fit-content" mx="auto" textAlign="left"  display="flex" my={8}  alignItems="center"  background="rgb(244,248,249)" gap={3} borderRadius="40px 40px 40px 40px">
        <Box flex="1" mr={16} borderRadius="40px 0px 0px 40px">
            <Heading fontSize={20} >
            Customer favorite
            </Heading>
            <Heading fontSize={40}>
            Mac & Cheese
            </Heading>
            <Text>
            Pair your entrée and drink with the warm, melty Mac & Cheese, baked in-restaurant with a special blend of cheddar, Parmesan, and Romano.
            </Text>
            <Button marginTop={3} colorScheme="red" size="lg" borderRadius="30px" >View product</Button>
        </Box>
        <Box flex="1" >
          <Image
            src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/CFA2212020-MacCheese-Module-Desktop_317x322V1.jpg?h=322&w=317&la=en"
            alt="My Image"
            objectFit="cover"
            h="100%"
            borderRadius=" 0px 40px 40px 0px"
          />
        </Box>

        <Box flex="1" mr={16}>
        <Heading fontSize={20} >
        A side with a crunch
            </Heading>
            <Heading fontSize={40}>
            Kale Crunch Side
            </Heading>
            <Text>
            Try this blend of kale and green cabbage tossed with an Apple Cider and Dijon Mustard vinaigrette and topped with Roasted Almonds.
            </Text>
            
            <Button marginTop={3} colorScheme="red" size="lg" borderRadius="30px">View product</Button>
        </Box>
        <Box flex="1">
          <Image
            src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/Winter23/KaleCrunchSalad-V2-D_317x322.jpg?h=322&w=317&la=en"
            alt="My Image"
            objectFit="cover"
            h="100%"
            borderRadius=" 0px 40px 40px 0px"
          />
        </Box>
      </Box>
      <Box w="95%" height="400px" textAlign="left" mx="auto" display="flex" justifyContent="space-between" my={8}  alignItems="center"  background="rgb(244,248,249)" borderRadius="40px 40px 40px 40px">
        <Box flex="1" mr={16} marginLeft="40px" padding={3} borderRadius="40px 0px 0px 40px">
            <Heading fontSize={40}>
            Hungry for more?
            </Heading>
            <Text>
            Whether you're hungry for a freshly prepared salad or the Chick-fil-A® Chicken Sandwich with Waffle Potato Fries™, we're serving delicious food made with quality ingredients every day (except Sunday).
            </Text>
            <Button marginTop={7} bg="white" color="black" size="lg" borderRadius="30px" box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >View full menu</Button>
        </Box>
        <Box flex="1" >
          <Image
            src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Together-Salads-menu-module-desktop.jpg?h=454&w=648&la=en"
            alt="My Image"
            objectFit="cover"
            h="400px"
            w="100%"
            borderRadius=" 0px 40px 40px 0px"
          />
        </Box>
        </Box>
        <Box w="95%" my={8} height="400px" mx="auto" textAlign="left" alignItems="center" display="flex"   backgroundImage="url(https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Catering_Desktop_compressed.jpg)" borderRadius="40px 40px 40px 40px">
        <Box padding={8} w="500px" as="div" background="white"  mr={16} borderRadius="40px 40px 40px 40px" marginLeft="100px"  >
            <Heading fontSize={30}>
            Catering for any gathering
            </Heading>
            <Text padding={3}>
            From breakfast items, party trays to packaged meals, Chick-fil-A® Catering has something for every occasion.</Text>
            <Button marginTop={3}  bg="red" color="white" size="lg" borderRadius="30px"  box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >View catering menu</Button>
        </Box>
        </Box>

        <Box w="95%" height="fit" mx="auto" display="flex" justifyContent="space-between" my={8} textAlign="left"  alignItems="center"  background="rgb(244,248,249)" borderRadius="40px 40px 40px 40px">
        <Box flex="1" mr={16} marginLeft="30px"  borderRadius="40px 0px 0px 40px">
            <Heading fontSize={20}>
            Rewards
            </Heading>
            <Heading fontSize={40}>
            Eat more, receive more
            </Heading>
            <Text>
            Order ahead on the app or online, and receive points from qualifying purchases. Then, use those points to redeem available rewards (Waffle Potato Fries™, anyone?).
            </Text>
            
            <Button marginTop={3} bg="white" color="black" size="lg" borderRadius="30px" box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >Learn how our loyalty program works</Button><br/>
            <Button marginTop={6} bg="red" color="white" size="lg" borderRadius="30px" box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >Join Chick-fil-A One®</Button>
        </Box>
        <Box flex="1" >
          <Image
            src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-CFA2212020-GroupCandid-Module2-Desktop_648x454.jpg?h=454&w=648&la=en"
            alt="My Image"
            objectFit="cover"
            h="100%"
            w="100%"
            borderRadius=" 0px 40px 40px 0px"
          />
        </Box>
        </Box>
        <Box w="95%" height="fit" mx="auto" display="flex" justifyContent="space-between" my={8} textAlign="left"  alignItems="center"  background="rgb(244,248,249)" borderRadius="40px 40px 40px 40px">
        <Box flex="1" >
          <Image
            src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/eGiftCard_Landing-Page_Hero_Desktop_Cow1_636x415.jpg?h=415&w=636&la=en"
            alt="My Image"
            objectFit="cover"
            h="100%"
            w="100%"
            borderRadius=" 0px 40px 40px 0px"
          />
        </Box>
        <Box flex="1" mr={16} marginLeft="30px"  borderRadius="40px 0px 0px 40px">
            <Heading fontSize={20}>
            Chick-fil-A™ eGift Card
            </Heading>
            <Heading fontSize={40}>
            A little thing for those you love a lot
            </Heading>
            <Text>
            No matter the season, a gift card from Chick-fil-A is the gift that<br/> keeps on chicken.
            </Text>
            
            <Button marginTop={8} bg="red" color="white" size="lg" borderRadius="30px" box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >Learn about gift cards</Button>
            <Button marginTop={8} bg="white" color="black" size="lg" borderRadius="30px" box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >Shop eGift cards</Button>
        </Box>
        </Box>

        <Box w="95%" height="fit" mx="auto" display="flex" justifyContent="space-between" my={8} textAlign="left" alignItems="center" background="rgb(244,248,249)" borderRadius="40px 40px 40px 40px">
  <Box flex="1" mr={16} marginLeft="30px" borderRadius="40px 0px 0px 40px">
    <Heading fontSize={40}>
    Join us as we celebrate The Little Things
    </Heading>
    <Text>
    You never know when the smallest thing can make someone’s day. Discover how our Chick-fil-A® Team Members bring #thelittlethings to our customers.
    </Text>

    <Button marginTop={3} bg="red" color="white" size="lg" borderRadius="30px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >Watch The Little Things video series</Button>
  </Box>
  <Box flex="1">
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls height="100%" width="100%" borderRadius="0px 40px 40px 0px" />
  </Box>
</Box>
<Footer/>
    </>
  );
};

export default HomePage;
