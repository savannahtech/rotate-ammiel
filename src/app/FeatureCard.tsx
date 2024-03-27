import { Box, Text } from "@chakra-ui/react";

export function FeatureCard() {
  return (
    <Box
      borderRadius={"10px"}
      display="flex"
      flexDir={"column"}
      justifyContent={"end"}
      width={"255px"}
      minH={"137px"}
      p="6"
      backgroundImage={`radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)`}
      color={"white"}
    >
      <Text fontWeight={700} fontSize="xl">
        Frontend Mentor
      </Text>
      <Text fontSize="md" fontWeight="500" opacity={0.8}>
        Feedback Board
      </Text>
    </Box>
  );
}
