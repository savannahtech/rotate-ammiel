import { Box } from "@chakra-ui/react";

export function WhiteCard({ children }: { children: React.ReactNode }) {
  return (
    <Box borderRadius={"10px"} p="6" bg={"white"}>
      {children}
    </Box>
  );
}
