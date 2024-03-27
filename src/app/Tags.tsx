"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { WhiteCard } from "@/app/WhiteCard";

export function Tags({ active, setActive, tags }: {active: string, setActive: React.Dispatch<React.SetStateAction<string>>, tags: string[]}) {

  return (
    <WhiteCard>
      <Flex
        w={"100%"}
        flexWrap={"wrap"}
        bg={"white"}
        borderRadius={10}
        gap={3}
        columnGap={2}
      >
        {tags.map((tag) => (
          <Box
            fontWeight={"600"}
            fontSize={"sm"}
            key={tag}
            p={2}
            px={4}
            bg={tag === active ? "primary" : "secondary"}
            color={tag === active ? "white" : "primary"}
            borderRadius={10}
            cursor={"pointer"}
            onClick={() => setActive(tag)}
          >
            {tag}
          </Box>
        ))}
      </Flex>
    </WhiteCard>
  );
}
