import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <>
    {/* navbar */}
      <Box
        w="100%"
        p="2rem"
        boxShadow="-1px 4px 10px 0 rgb(0 0 0 / 10%)"
        background="#fff"
        top="0"
      >
        <Box>
          <Link
            color="#286efb"
            textDecoration="none"
            href="https://chakra-ui.com"
            isExternal
          >
            <Image
              w="140px"
              h="40px"
              src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
              alt="Dan Abramov"
            />
          </Link>
        </Box>
      </Box>
      {/* main box */}
      <Box>
        <Flex
          width="85%"
          display="flex"
          justifyContent="space-between"
          margin="auto"
          marginTop="3rem"
          gap="2rem"
        >
          {/* left side */}
          <Box padding="1rem" width="47%">
            <Text
              text-transform="uppercase"
              color="#25cf60"
              fontSize="10px"
              fontWeight="700"
              marginBottom="2rem"
            >
              PRODUCT UPDATE
            </Text>
            <Box>
              <Heading
                color="#1b1b20"
                fontWeight="700"
                fontSize="52px"
                marginBottom="2rem"
                textAlign="left"
              >
                TimeCamp Plugin for Google Chrome
              </Heading>
            </Box>
            <Box>
              <Text
                color="#767676"
                fontWeight="700"
                fontSize="24px"
                marginBottom="2rem"
                paddingRight="6rem"
              >
                Track time without leaving Chrome in 70+ online apps.
              </Text>
            </Box>
            <Box>
              <Link
                href="https://chrome.google.com/webstore/detail/time-tracker-by-timecamp/ohbkdjmhoegleofcohdjagmcnkimfdaa"
                padding="10px 50px"
                borderRadius="26px"
                background="#25cf60"
                color="#fff"
                width="fit-content"
                display="flex"
                textDecoration="none"
                margin="0.5rem 0.5rem"
              >
                <Image
                  src="https://cdn.timecamp.com/res/css/images/chrome-icon-button.1661428039.png"
                  width="30px"
                  height="30px"
                  margin-right="10px"
                ></Image>
                <Text>Add time camp for chrome</Text>
              </Link>
            </Box>
            <Flex>
              <Box>
                <Image src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661428039.png"></Image>
              </Box>
              <Box>
                <Image src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661428039.png"></Image>
              </Box>
              <Box>
                <Image src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661428039.png"></Image>
              </Box>
              <Box>
                <Image src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661428039.png"></Image>
              </Box>
            </Flex>
          </Box>

          {/* right side */}
          <Box
            width="50%"
            boxShadow="0 4px 10px 2px rgb(0 0 0 / 17%)"
            padding="2rem 5rem "
            borderRadius="20px"
          >
            <Box>
              <Heading
                fontSize="24px"
                fontWeight="700"
                fontFamily="NunitoSans,sans-serif"
                marginBottom="0.5rem"
              >
                Log in to TimeCamp
              </Heading>
              <Button
                padding="0.8rem 0.5rem"
                background="#ffffff"
                border="1px solid #e9e9e9"
                background-size="7%"
                background-position-x="6rem"
                margin="1.3rem 0"
                width="100%"
                border-radius="8px"
                font-size="14px"
                line-height="1.33"
              >
                <Link font-weight="700" color="#767676" textDecoration="none">
                  Log in google
                </Link>
              </Button>
              <Text>Or</Text>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Input type="text" placeholder="Email"></Input>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Input type="password" placeholder="Password"></Input>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Link
                fontFamily=" NunitoSans,sans-serif"
                marginBottom="2rem"
                fontSize="14px"
                color="#25cf60"
              >
                Forgotten password
              </Link>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Button
                padding="15px 40px"
                margin-top="2rem"
                background="#25cf60"
                borderRadius="26px"
                color="#fff"
                border="none"
              >
                Log in
              </Button>
            </Box>
            <Box>
              <span>
                <Link color="#25cf60">No account? Sign up</Link>
              </span>
              <span>or</span>
              <span>
                <Link color="#25cf60">Log in with SSO</Link>
              </span>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Login;
