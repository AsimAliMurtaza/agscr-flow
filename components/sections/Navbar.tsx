"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/login");
  };

  return (
    <Box
      position="fixed"
      w="100vw"
      top={0}
      zIndex={100}
      bg={useColorModeValue("white", "black")}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" py={4}>
          {/* Logo */}
          <Heading
            as="h2"
            size="lg"
            fontWeight="md"
            color={useColorModeValue("blackAlpha.900", "white")}
          >
            ZenFlow
          </Heading>

          {/* Desktop Navigation */}
          <Flex display={{ base: "none", md: "flex" }} align="center">
            {["Features", "Pricing", "Contact"].map((item, index) => (
              <MotionBox key={index} whileTap={{ scale: 0.95 }} mx={4}>
                <Link
                  href="#"
                  fontSize="md"
                  fontWeight="thin"
                  _hover={{ color: "gray.500", textDecoration: "none" }}
                >
                  {item}
                </Link>
              </MotionBox>
            ))}
          </Flex>

          {/* Buttons (Sign In & Dark Mode Toggle) */}
          <Flex align="center" gap={2}>
            {/* Dark Mode Toggle */}
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              size="md"
              variant="outline"
              borderRadius={10}
            />

            {/* Sign In Button */}
            <Button
              borderRadius={10}
              size="md"
              variant="outline"
              display={{ base: "none", md: "inline-flex" }}
              onClick={onClickHandler}
            >
              Sign In
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              variant="outline"
              fontSize="xl"
              borderRadius="10"
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue("white", "blackAlpha.900")}>
          <DrawerCloseButton />

          <VStack spacing={4} mt={20} align="center">
            {["Features", "Pricing", "Contact"].map((item, index) => (
              <Link
                key={index}
                href="#"
                fontSize="lg"
                fontWeight="md"
                onClick={onClose}
                _hover={{ color: "gray.500", textDecoration: "none" }}
              >
                {item}
              </Link>
            ))}

            <Box display="flex" flexDirection="column" gap={4}>
              {/* Dark Mode Toggle inside Mobile Menu */}
              <Button
                aria-label="Toggle Dark Mode"
                leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                size="md"
                borderRadius={10}
                variant="outline"
              >
                Switch
              </Button>

              {/* Sign In Button */}
              <Button
                borderRadius={10}
                size="md"
                variant="outline"
                onClick={onClickHandler}
              >
                Sign In
              </Button>
            </Box>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
