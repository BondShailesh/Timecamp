import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import axios, { Axios } from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  postautherror,
  postauthloading,
  postauthsucces,
  postproductloading,
} from "../redux/Authcontext/Action";
import store from "../redux/store";
import { loadData } from "../utils/localstorage";
import { Link, useNavigate } from "react-router-dom";
// client id = 138552057700-esoue5q74o0ijrd22c5uvo3h1p435vm3.apps.googleusercontent.com
// client secret = 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
const Login = () => {
  const store = useSelector((store) => store);
  const [auth, setauth] = useState(false);
  const [data, setdata] = useState({});
  const [token, settoken] = useState();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    const { profileObj, tokenId } = response;
    localStorage.setItem("userid", JSON.stringify(tokenId));
    navigate("/app");
  };

  // var data1 = localStorage.getItem("userid");
  // data1 = JSON.parse(data);
  // console.log(222,data1);
  
  const handleclick = () => {
    const d = loadData("userid");
  if (d===null){
    return alert("please sign up")
  }

    //  axios.get("http://localhost:8080/usercred").then((r)=>console.log(r))
    dispatch(postauthloading());
    axios
      .get(`http://localhost:8080/usercred/${d}`)
      .then((res) => {
        localStorage.setItem("loginid", JSON.stringify(res.data[0]._id));

        dispatch(postauthsucces(res.data._id));
        if (res.data[0]._id) {
          setauth(true);
          navigate("/app");
        } else {
          console.log("norrrrr");
          navigate("/auth/login");
          
        }
      })
      .catch((e) => {
        dispatch(postautherror());
      });
  };

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
          <Box
            color="#286efb"
            textDecoration="none"
            href="http://localhost:3001/"
          >
            <Link to="/">
              <Image
                w="140px"
                h="40px"
                src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
                alt="Dan Abramov"
              />
            </Link>
          </Box>
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
                to="/auth/login"
                // href="https://chrome.google.com/webstore/detail/time-tracker-by-timecamp/ohbkdjmhoegleofcohdjagmcnkimfdaa"
                // padding="10px 50px"
                // borderRadius="26px"
                // background="#25cf60"
                // color="#fff"
                // width="fit-content"
                // display="flex"
                // textDecoration="none"
                // margin="0.5rem 0.5rem"
              >
                <Image
                  src="https://cdn.timecamp.com/res/css/images/chrome-icon-button.1661428039.png"
                  width="30px"
                  height="30px"
                  margin-right="10px"
                ></Image>
                <Text>Add time camp for chrome</Text>
              </Link>
              ,
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
              {/* <Button
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
              </Button> */}

              <GoogleLogin
                clientId="138552057700-esoue5q74o0ijrd22c5uvo3h1p435vm3.apps.googleusercontent.com"
                // buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />

              <Text>Or</Text>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Input
                type="text"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              ></Input>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              ></Input>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Box
                fontFamily=" NunitoSans,sans-serif"
                marginBottom="2rem"
                fontSize="14px"
                color="#25cf60"
              >
                <Link to="/auth/login">Forgotten password</Link>
              </Box>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Button
                padding="15px 40px"
                margin-top="2rem"
                background="#25cf60"
                borderRadius="26px"
                color="#fff"
                border="none"
                onClick={handleclick}
              >
                Log in
              </Button>
            </Box>
            <Flex justifyContent="center">
              <span>
                <Box color="#25cf60">
                  <Link to="/auth/signup">No account? Sign up</Link>
                </Box>
              </span>
              <span>or</span>
              <span>
                <Box color="#25cf60">
                  <Link to="/auth/login">Login with sso</Link>
                </Box>
              </span>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Login;
