import { Box, Button, Flex, Heading, Image, Input, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Privateroute from "../PrivateRoute/Privateroute";
import { postautherror, postauthloading, postauthsucces } from "../redux/Authcontext/Action";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth,setauth] = useState(false)
  const navigate = useNavigate()
const dispatch = useDispatch()
const responseGoogle = (response) => {
  console.log(response);
  const { profileObj, tokenId } = response;
  localStorage.setItem("userid", JSON.stringify(tokenId))
  navigate("/app")
};
  const handleclick = () => {
    //  axios.get("http://localhost:8080/usercred").then((r)=>console.log(r))
    dispatch(postauthloading())
    axios
      .post("http://localhost:8080/usercred", {
        email: email,
        password: password,
      })
      .then((res) =>{
        localStorage.setItem("userid", JSON.stringify(res.data._id))
       dispatch(postauthsucces(res.data._id))
       navigate("/auth/login")
      }
      ).catch((e)=>{
        dispatch(postautherror())
      })
  };
  return (
    <div>
      <Flex
        justifyContent="space-between"
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
        <Box>
          <Link
            fontSize="16px"
            fontWeight="700"
            height="22px"
            width="60px"
            color="#1b1b20"
            textDecorationLine="none"
          >
            Login
          </Link>
        </Box>
      </Flex>

      {/* body */}

      <Box
            width="40%"
            boxShadow="0 4px 10px 2px rgb(0 0 0 / 17%)"
            padding="2rem 5rem "
            borderRadius="20px"
            margin= "auto"
            marginTop="1rem"
          >
            <Box>
              <Heading
                fontSize="24px"
                fontWeight="700"
                fontFamily="NunitoSans,sans-serif"
                marginBottom="0.5rem"
              >
               Start tracking time
              </Heading>
              <Text>Create an account and start with a free 14-day trial</Text>
              
              <Box>
              <Heading
                 fontSize= "16px"
                  color= "#767676"
              >
                All features. No credit card required
              </Heading>
          

              <GoogleLogin
                clientId="138552057700-esoue5q74o0ijrd22c5uvo3h1p435vm3.apps.googleusercontent.com"
                // buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
              </Box>
              <Text>Or</Text>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Input type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)} ></Input>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} ></Input>
            </Box>
            <Box margin="1.3rem 0" font-size="10px">
              <Input type="password" placeholder="Phone(Optional)"></Input>
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
                Sign up for free
              </Button>
            </Box>
            <Box>
              <span>
              By signing up you agree to our
              </span>
              <span>
                <Link color="#25cf60">Terms of Service</Link>
              </span>
              <span>and</span>
              <span>
                <Link color="#25cf60">Privacy Policy</Link>
              </span>
            </Box>
          </Box>

          <Privateroute/>
   
    </div>
  );
};

export default Signup;
