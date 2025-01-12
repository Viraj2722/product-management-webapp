import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" px={{ base: 4, sm: 6, md: 10 }}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h={{ base: 24, sm: 16 }}
        flexDir={{ base: "column", sm: "row" }}
        gap={{ base: 4, sm: 0 }}
        py={{ base: 4, sm: 0 }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="extrabold"
          textAlign={{ base: "center", sm: "left" }}
        >
          <Link to="/">Product Store</Link>
        </Text>
        <HStack spacing={{ base: 4, sm: 2 }}>
          <Link to="/create">
            <Button size={{ base: "sm", sm: "md" }}>
              <PlusSquareIcon fontSize={{ base: 16, sm: 20 }} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} size={{ base: "sm", sm: "md" }}>
            {colorMode === "light" ? (
              <IoMoon size={{ base: 16, sm: 20 }} />
            ) : (
              <IoSunny size={{ base: 16, sm: 20 }} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
