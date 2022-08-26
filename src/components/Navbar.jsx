import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const username = useSelector((state) => state.auth.username);

  return (
    <>
      <Box bg="blue" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <RouterLink to="/">
              <Flex gap={9}>
              <Box color={"white"} fontSize={"25px"} fontWeight={"700"}>
                DocStore
              </Box>
              <Box color={"white"} fontSize={"25px"} fontWeight={"700"}>
                {username}
              </Box>
              </Flex>
            </RouterLink>
           
          </HStack>
          <Flex alignItems={"center"} gap="20px">
            <RouterLink to="/login">
              <Button bg="black" color={"white"}>
                Login
              </Button>
            </RouterLink>
            <RouterLink to="/signup">
              <Button bg="black" color={"white"}>
                Signup
              </Button>
            </RouterLink>
          </Flex>
        </Flex>

        
      </Box>
    </>
  );
}
