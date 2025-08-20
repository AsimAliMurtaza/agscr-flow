"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Input,
  Button,
  Box,
  VStack,
  Heading,
  Text,
  Divider,
  FormControl,
  FormLabel,
  useToast,
  Container,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const toast = useToast();
  const router = useRouter();

  // Color mode values
  const bgColor = useColorModeValue("gray.50", "black");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  const handleLogin = async () => {
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/redirect", // ⬅ redirect all users here temporarily
    });

    setLoading(false);

    if (res?.error) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      minH="100vh"
      bg={bgColor}
      bgPosition="center"
    >
      <Container maxW="sm" px={4}>
        <Box
          p={8}
          borderRadius="20"
          bg={useColorModeValue("white", "whiteAlpha.200")}
          textAlign="center"
          border="1px solid gray"
        >
          <Heading size="md" fontWeight="bold" color={textColor}>
            Log in to continue
          </Heading>

          <VStack spacing={4} align="stretch" mt={6}>
            {/* 📨 Email Input */}
            <FormControl id="email" isRequired>
              <FormLabel fontSize="sm" color={textColor}>
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="you@example.com"
                border="1px solid"
                borderColor={borderColor}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel fontSize="sm" color={textColor}>
                Password
              </FormLabel>
              <Input
                type="password"
                placeholder="••••••••"
                border="1px solid"
                borderColor={borderColor}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              onClick={handleLogin}
              size="md"
              variant="outline"
              isLoading={loading}
            >
              Continue
            </Button>

            <Divider borderColor={borderColor} />

            <Text fontSize="sm" color={textColor}>
              Or continue with
            </Text>
            <VStack spacing={3} w="full">
              <Button
                variant="outline"
                w="full"
                leftIcon={<FcGoogle />}
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              >
                Google
              </Button>
              <Button
                variant="outline"
                w="full"
                leftIcon={<FaGithub color="#000000" />}
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              >
                Github
              </Button>
            </VStack>

            {/* 🔗 Extra Links */}
            <Text fontSize="sm" textAlign="center" mt={4}>
              <Button
                variant="link"
                onClick={() => router.push("/forgot-password")}
              >
                Can&apos;t log in?
              </Button>{" "}
              •{" "}
              <Button variant="link" onClick={() => router.push("/signup")}>
                Create an account
              </Button>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
}
