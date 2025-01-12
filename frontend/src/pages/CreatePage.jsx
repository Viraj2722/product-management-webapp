import {
  Container,
  Input,
  useColorModeValue,
  VStack,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import useProductStore from "../store/product";
import { useToast } from "@chakra-ui/react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const toast = useToast();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      isClosable: true,
    });
    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxW="container.sm" px={{ base: 4, sm: 6 }}>
      <VStack spacing={{ base: 4, sm: 6 }} py={{ base: 6, sm: 8 }}>
        <Heading as="h1" size={{ base: "xl", sm: "2xl" }} textAlign="center">
          Create Product
        </Heading>
        <Box
          w="full"
          bg={useColorModeValue("white", "gray.900")}
          p={{ base: 4, sm: 6 }}
          rounded="lg"
          shadow="md"
        >
          <VStack spacing={{ base: 3, sm: 4 }}>
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              size={{ base: "sm", sm: "md" }}
            />
            <Input
              placeholder="Price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              size={{ base: "sm", sm: "md" }}
            />
            <Input
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              size={{ base: "sm", sm: "md" }}
            />
            <Button
              colorScheme="blue"
              width="full"
              onClick={handleAddProduct}
              size={{ base: "sm", sm: "md" }}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
