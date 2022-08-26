import { Box, Button, Flex, Heading, Image, Input, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postautherror, postauthloading, postauthsucces } from "../redux/Authcontext/Action";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth,setauth] = useState(false)
  const navigate = useNavigate()
const dispatch = useDispatch()
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
                display="flex"
              >
                <Image src="https://cdn.timecamp.com/res/css/images/btn_google_sign_in.png" w ="20px" marginRight="1rem" ></Image>
                <Link font-weight="700" color="#767676" textDecoration="none">
                  Log in google
                </Link>
              </Button>
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
   
    </div>
  );
};

export default Signup;
