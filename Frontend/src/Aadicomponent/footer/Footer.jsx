import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box padding="5rem" margin="auto">
        <Flex justifyContent="center" gap="2rem">
          <Box>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="0"
              color="#1b1b20"
              marginRight=" 3.5rem"
            >
              Product
            </Heading>
            <UnorderedList
              listStyleType="none"
              lineHeight="2rem"
              textAlign="start"
              paddingLeft="0"
              marginTop="30px"
              fontSize="15px"
              fontWeight="600"
              opacity=".6"
              fontFamily="nunito sans sans-serif"
            >
              <ListItem>Features</ListItem>
              <ListItem>Integration</ListItem>
              <ListItem>Applications</ListItem>
              <ListItem>Product Application</ListItem>
              <ListItem>Customer Services</ListItem>
              <ListItem>Self Hosting</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="0"
              color="#1b1b20"
              marginRight=" 3.5rem"
            >
              Support
            </Heading>
            <UnorderedList
              listStyleType="none"
              lineHeight="2rem"
              textAlign="start"
              paddingLeft="0"
              marginTop="30px"
              fontSize="15px"
              fontWeight="600"
              opacity=".6"
              fontFamily="nunito sans sans-serif"
            >
              <ListItem>Support</ListItem>
              <ListItem>Knowledge base</ListItem>
              <ListItem>Developers api</ListItem>
              <ListItem>Server Status</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="0"
              color="#1b1b20"
              marginRight=" 3.5rem"
            >
              Support
            </Heading>
            <UnorderedList
              listStyleType="none"
              lineHeight="2rem"
              textAlign="start"
              paddingLeft="0"
              marginTop="30px"
              fontSize="15px"
              fontWeight="600"
              opacity=".6"
              fontFamily="nunito sans sans-serif"
            >
              <ListItem>Trello</ListItem>
              <ListItem>Monday.com</ListItem>
              <ListItem>Google Calender</ListItem>
              <ListItem>Asna</ListItem>
              <ListItem>Jira</ListItem>
              <ListItem>All integration</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="0"
              color="#1b1b20"
              marginRight=" 3.5rem"
            >
              Resourses
            </Heading>
            <UnorderedList
              listStyleType="none"
              lineHeight="2rem"
              textAlign="start"
              paddingLeft="0"
              marginTop="30px"
              fontSize="15px"
              fontWeight="600"
              opacity=".6"
              fontFamily="nunito sans sans-serif"
            >
              <ListItem>Contact</ListItem>
              <ListItem>Hey space</ListItem>
              <ListItem>About us</ListItem>
              <ListItem>Press</ListItem>
              <ListItem>Become a partner</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="0"
              color="#1b1b20"
              marginRight=" 3.5rem"
            >
              Calculators
            </Heading>
            <UnorderedList
              listStyleType="none"
              lineHeight="2rem"
              textAlign="start"
              paddingLeft="0"
              marginTop="30px"
              fontSize="15px"
              fontWeight="600"
              opacity=".6"
              fontFamily="nunito sans sans-serif"
            >
              <ListItem>Profit margin calculator</ListItem>
              <ListItem>Online Timer</ListItem>
              <ListItem>Overtime Calculator</ListItem>
              <ListItem>Roi calculator</ListItem>
              <ListItem>Time card calculator</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="0"
              color="#1b1b20"
              marginRight=" 3.5rem"
            >
              Legal
            </Heading>
            <UnorderedList
              listStyleType="none"
              lineHeight="2rem"
              textAlign="start"
              paddingLeft="0"
              marginTop="30px"
              fontSize="15px"
              fontWeight="600"
              opacity=".6"
              fontFamily="nunito sans sans-serif"
            >
              <ListItem>Terms</ListItem>
              <ListItem>Privacy</ListItem>
              <ListItem>Security</ListItem>
            </UnorderedList>
          </Box>
        </Flex>

        <Box marginTop="5rem">
          <Flex justifyContent="center" alignItems="center">
            <Link padding="1rem" href="">
              <Image src="https://cdn-m.timecamp.com/img/greenbranding/facebook.svg"></Image>
            </Link>
            <Link padding="1rem" href="">
              <Image src="https://cdn-m.timecamp.com/img/greenbranding/linkedin.svg"></Image>
            </Link>
            <Link padding="1rem" href="">
              <Image src="https://cdn-m.timecamp.com/img/greenbranding/twitter.svg"></Image>
            </Link>
          </Flex>
        </Box>
        <Box>
          <Text
            fontSize="14px"
            fontWeight="600"
            opacity=".6"
            marginTop="1.5rem"
          >
            Copyright © 2022 TimeCamp. Inc.
          </Text>
          <Text fontSize="11px" fontWeight="400" opacity=".6">
            We use cookies. Click here to learn more
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
