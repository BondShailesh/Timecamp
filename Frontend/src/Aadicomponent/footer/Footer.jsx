import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  p,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div >
        <div className="main_footer">
          <div>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="2rem"
            >
              Product
            </Heading>
              <p>Features</p>
              <p>Integration</p>
              <p>Applications</p>
              <p>Product Application</p>
              <p>Customer Services</p>
              <p>Self Hosting</p>
          </div>
          <div>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="2rem"
            >
              Support
            </Heading>
              <p>Support</p>
              <p>Knowledge base</p>
              <p>Developers api</p>
              <p>Server Status</p>
          
          </div>
          <div>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="2rem"
            >
             Integrations
            </Heading>
           
              <p>Trello</p>
              <p>Monday.com</p>
              <p>Google Calender</p>
              <p>Asna</p>
              <p>Jira</p>
              <p>All integration</p>
            
          </div>
          <div>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="2rem"
            >
              Resourses
            </Heading>
           
              <p>Contact</p>
              <p>Hey space</p>
              <p>About us</p>
              <p>Press</p>
              <p>Become a partner</p>
            
          </div>
          <div>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="2rem"
            >
              Calculators
            </Heading>
           
              <p>Profit margin calculator</p>
              <p>Online Timer</p>
              <p>Overtime Calculator</p>
              <p>Roi calculator</p>
              <p>Time card calculator</p>
            
          </div>
          <div>
            <Heading
              fontWeight="800"
              fontSize="18px"
              marginBottom="2rem"
            >
              Legal
            </Heading>
           
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            
          </div>
        </div>

       <div marginTop="5rem">
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
        </div> 
        <div>
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
        </div> 
      </div>
    </div>
  );
};

export default Footer;
