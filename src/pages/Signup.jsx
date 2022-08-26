import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { signUpRegister } from "../redux/auth/action";
import { SIGNUP_SUCCESS } from "../redux/auth/actionType";

const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "username": {
      return {
        ...state,
        username: action.payload,
      };
    }
    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    case "description": {
      return {
        ...state,
        description: action.payload,
      };
    }
    case "mobile": {
      return {
        ...state,
        mobile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: 0,
  username: "",
  description: "",
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, sitter] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = () => {
    dispatch(signUpRegister(state)).then((r) => {
      if (r === SIGNUP_SUCCESS) {
        navigate("/login");
      }
    });
  };

  return (
    <Box>
      <Flex
        align={"center"}
        justify={"center"}
        bg="white"
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>username</FormLabel>
                    <Input
                      value={state.username}
                      onChange={(e) =>
                        sitter({ type: "username", payload: e.target.value })
                      }
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    sitter({ type: "email", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={state.password}
                    onChange={(e) =>
                      sitter({ type: "password", payload: e.target.value })
                    }
                    isRequired
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box>
                <FormControl id="Mobile No." isRequired>
                  <FormLabel>Moblie No.</FormLabel>
                  <Input
                    type="number"
                    value={state.mobile}
                    onChange={(e) =>
                      sitter({ type: "mobile", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={state.description}
                  onChange={(e) =>
                    sitter({ type: "description", payload: e.target.value })
                  }
                  isRequired
                  placeholder="Add some description here..."
                />
              </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSignUp}
                  loadingText="Submitting"
                  size="lg"
                  bg={useColorModeValue("#151f21", "gray.900")}
                  color={"white"}
                  _hover={{
                    bg: "blue",
                  }}
                >
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?
                  <Link to="/login" style={{ color: "blue" }}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Signup;
