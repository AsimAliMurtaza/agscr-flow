"use client";

import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  Image,
  Button,
  Flex,
  Divider,
  CardHeader,
  Card,
  CardBody,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaChartLine,
  FaProjectDiagram,
  FaUsers,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const featureData = [
  {
    icon: FaSearch,
    title: "Product & Issue Tracking",
    description:
      "Track and manage your software development projects with ease.",
  },
  {
    icon: FaChartLine,
    title: "Plan & Launch Campaigns",
    description: "Organize and execute marketing campaigns efficiently.",
  },
  {
    icon: FaProjectDiagram,
    title: "Plan & Track IT Projects",
    description: "Keep your IT projects on track and within budget.",
  },
  {
    icon: FaUsers,
    title: "Build Creative Workflows",
    description: "Design and implement creative workflows for your team.",
  },
  {
    icon: FaCode,
    title: "Code Collaboration",
    description: "Collaborate on code with your team in real-time.",
  },
  {
    icon: FaRocket,
    title: "Automated Deployments",
    description: "Automate your deployment process for faster releases.",
  },
  {
    icon: FaShieldAlt,
    title: "Enhanced Security",
    description: "Ensure the security of your projects with advanced features.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation Hub",
    description:
      "Discover new ideas and innovative solutions for your business.",
  },
];

const FeaturesSection = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Container
      maxW="container.xl"
      py={20}
      as="section"
      px={{ base: 4, md: 8 }}
      bg={useColorModeValue("white", "black")}
    >
      {/* Heading */}
      <Heading
        size="xl"
        textAlign="center"
        mb={10}
        fontWeight="normal"
        transition="duration: 0.8, ease: easeOut"
        color={headingColor}
      >
        Features
      </Heading>

      {/* Features Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {featureData.map((feature, index) => (
          <Card
            bg={useColorModeValue("white", "black")}
            key={index}
            border="1px solid grey"
            borderRadius={20}
            p={8}
            alignItems={"center"}
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            <Icon as={feature.icon} boxSize={10} />
            <CardBody display="flex" flexDirection="column" alignItems="center">
              <Text
                as="h3"
                size="sm"
                fontWeight="semibold"
                color={headingColor}
              >
                {feature.title}
              </Text>
              <Text size="md" as="h4" color={textColor}>
                {feature.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {/* Additional Section with Image and Text */}
      <Flex
        mt={48}
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={8}
      >
        <Box flex="1">
          <Image
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            }}
            src="/images/features.png"
            alt="Feature Illustration"
          />
        </Box>
        <VStack flex="1" align="start" spacing={6}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            mb={4}
            lineHeight="tall"
          >
            <Box
              as="span"
              px="4"
              py="1"
              color={useColorModeValue("white", "black")}
              bg={useColorModeValue("black", "white")}
              fontWeight="semibold"
            >
              <Typewriter
                words={[
                  "Productivity",
                  "Creativity",
                  "Collaboration",
                  "Innovation",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </Box>
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Experience seamless collaboration&quot; enhanced productivity&quot;
            and innovative solutions with AGSCR-Flow. Our platform is designed to
            empower your team and drive your projects to success.
          </Text>
          <Button size="md" variant="outline" borderRadius="10">
            Get Started Today
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default FeaturesSection;
