import {
  Box,
  Badge,
  Divider,
  HStack,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";

interface TaskOverviewCardProps {
  report: {
    projectId: string;
    projectName: string;
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
  };
}

export const TaskOverviewCard = ({ report }: TaskOverviewCardProps) => (
  <Box p={4} borderWidth="1px" borderRadius="20">
    <Text fontSize="md" fontWeight="normal" mb={3}>
      {report.projectName}
    </Text>
    <Divider mb={3} />
    <VStack align="start" spacing={1}>
      <HStack justify="space-between" w="full">
        <Text fontSize="sm">Total Tasks:</Text>
        <Badge>{report.totalTasks}</Badge>
      </HStack>
      <HStack justify="space-between" w="full">
        <Text fontSize="sm">Completed:</Text>
        <Badge>{report.completedTasks}</Badge>
      </HStack>
      <HStack justify="space-between" w="full">
        <Text fontSize="sm">Pending:</Text>
        <Badge>{report.pendingTasks}</Badge>
      </HStack>
      <Progress
        value={(report.completedTasks / report.totalTasks) * 100}
        size="sm"
        borderRadius="20"
        mt={2}
      />
    </VStack>
  </Box>
);
