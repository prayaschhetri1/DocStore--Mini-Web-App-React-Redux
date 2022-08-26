import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginData } from "../redux/auth/action";
import { GET_LOGIN_SUCCESS } from "../redux/auth/actionType";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = () => {
    
    
    if(email && password){
        const payload = {
            username:email,
            password
        }
        dispatch(loginData(payload)).then((res => {
            if(res === GET_LOGIN_SUCCESS){
                navigate("/", {replace:true})
            }
            else{
                return;
            }
        }))
    }
  };
  return (
    <Box>
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>User Name</FormLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/register" color={"blue.400"}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  onClick={handleLogin}
                  bg={useColorModeValue("#151f21", "gray.900")}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Dont have an account?
                    <Link to="/register" style={{ color: "blue" }}>
                      Signup
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;