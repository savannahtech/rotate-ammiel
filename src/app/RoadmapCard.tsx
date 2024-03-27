import { WhiteCard } from "@/app/WhiteCard";
import { Box, Flex, Text } from "@chakra-ui/react";

export function RoadmapCard() {
  const data = [
    {
      color: "rgba(244, 159, 133, 1)",
      label: "Planned",
    },
    {
      color: "rgba(173, 31, 234, 1)",
      label: "In-progress",
    },
    {
      color: "rgba(98, 188, 250, 1)",
      label: "Live",
    },
  ];

  return (
    <WhiteCard>
      <Flex justifyContent="space-between">
        <Text fontWeight={700} fontSize={"lg"}>
          Roadmap
        </Text>

        <Text
          textDecoration="underline"
          cursor="pointer"
          fontWeight="600"
          color="primary"
        >
          View
        </Text>
      </Flex>
      <Flex direction={"column"} gap={2} mt={2}>
        {data.map(({ color, label }) => (
          <Flex
            key={label}
            borderRadius={"10px"}
            display="flex"
            gap={2}
            alignItems="center"
          >
            <Box bg={color} w={2} h={2} borderRadius={"50%"}></Box>
            <Text>{label}</Text>
          </Flex>
        ))}
      </Flex>
    </WhiteCard>
  );
}
