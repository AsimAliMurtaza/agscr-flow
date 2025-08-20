"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const CTASection = () => {
  const router = useRouter();

  const onClickHandler = async () => {
    router.push("/signup");
  };

  const bgColor = useColorModeValue("white", "black");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");


  return (
    <Container
      transition={"0.8 ease"}
      bg={bgColor}
      maxW="container.xl"
      as="section"
      py={20}
      px={10}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 8, md: 16 }}
      >
        {/* Text Content */}
        <Stack
          direction="column"
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          flex="1"
          spacing={6}
        >
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="tall"
            color={headingColor}
            as={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition="duration: 0.8, ease: easeOut"
          >
            Unlock Your Teams Potential
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
            maxW="80%"
          >
            Experience seamless collaboration and boost productivity with{" "}
            <Box as="span" py="1" fontWeight="bold">
              <Typewriter
                words={["Agile","Scrum"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </Box>
            . Join the teams who are transforming their workflows.
          </Text>
          <MotionButton
            size="lg"
            borderRadius={10}
            variant="outline"
            fontSize="xl"
            fontWeight="bold"
            onClick={onClickHandler}
          >
            Get Started Now
          </MotionButton>
        </Stack>

        {/* Image Content */}
        <Box flex="1" display={{ base: "none", md: "block" }}>
          <Image
            src="/cta-illustration.svg"
            alt="CTA Illustration"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default CTASection;
