"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Image,
  Button,
  Divider,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaBullseye } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

const goalsData = [
  {
    icon: FaCheckCircle,
    title: "Increase Website Traffic",
    description: "Boost new website traffic by 5x.",
  },
  {
    icon: FaStar,
    title: "Enhance Customer Satisfaction",
    description: "Improve customer satisfaction by 7%.",
  },
  {
    icon: FaBullseye,
    title: "Expand Market Share",
    description: "Increase global market share 10x.",
  },
  {
    icon: FaCheckCircle,
    title: "Launch New Product",
    description: "Launch new loan product in 4 months.",
  },
  {
    icon: FaStar,
    title: "Reduce Operational Costs",
    description: "Reduce operational costs by 15%.",
  },
  {
    icon: FaBullseye,
    title: "Improve Team Efficiency",
    description: "Enhance team collaboration efficiency by 20%.",
  },
];

const GoalsSection = () => {
  const textColor = useColorModeValue("gray.800", "white");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Container
      bg={useColorModeValue("white", "black")}
      as="section"
      py={20}
      px={10}
      maxW="container.xl"
    >
      {/* Section Heading */}
      <Heading
        size="lg"
        textAlign="center"
        mb={12}
        fontWeight="semibold"
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition="duration: 0.8, ease: easeOut"
      >
        Your Goals, Our Focus
      </Heading>

      {/* Unique Grid Layout */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={12}
        py={10}
      >
        {goalsData.map((goal, index) => (
          <MotionGridItem
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <VStack
              spacing={8}
              textAlign="center"
              p={6}
              border="1px solid gray"
              borderRadius="20"
              boxShadow="md"
            >
              <Icon as={goal.icon} boxSize={12} />
              <Heading size="md" color={textColor}>
                {goal.title}
              </Heading>
              <Text color={textColor}>{goal.description}</Text>
            </VStack>
          </MotionGridItem>
        ))}
      </Grid>

      {/* Image and Text Section (Centered) */}
      <Flex mt={32} direction="column" align="center" justify="center" gap={12}>
        <Image
          src="/goals-illustration.svg"
          alt="Goals Illustration"
          borderRadius="lg"
          boxShadow="md"
          maxW="500px"
        />
        <VStack align="center" spacing={8}>
          <Heading size="xl" color={headingColor} textAlign="center">
            Transform Your Vision into Reality
          </Heading>
          <Text
            fontSize="lg"
            color={textColor}
            flexWrap="wrap"
            textAlign="center"
          >
            AGSCR-Flow empowers you to turn ambitious goals into tangible
            achievements. Track progress, collaborate effectively, and celebrate
            your successes.
          </Text>
          <Button size="lg" variant="outline" borderRadius="10">
            Start Achieving Your Goals
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default GoalsSection;
