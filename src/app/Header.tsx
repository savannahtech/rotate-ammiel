"use client";

import React from "react";
import { BadgeIcon } from "@/icons/Badge";
import { CaretDown } from "@/icons/CaretDown";
import { ChevronDownIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export function Header() {
  const [active, setActive] = React.useState("Most Upvotes");
  const filters = ["Most Upvotes", "Number of Comments"];

  return (
    <Box pt="8" bg="rgba(247, 248, 253, 1)" position={"sticky"} top="0" mt="-32px">
      <Flex
        bg="text"
        alignItems={"center"}
        justifyContent={"space-between"}
        color="white"
        p={6}
        gap={4}
        borderRadius="10px"
      >
        <Flex alignItems={"center"} gap="10">
          <Flex alignItems={"center"} gap="3">
            <BadgeIcon />
            <Text fontSize={"xl"} fontWeight={700}>
              6 Suggestions
            </Text>
          </Flex>

          <Flex alignItems={"center"} gap={1}>
            <Text>Sort by:</Text>
            <Menu>
              <MenuButton>
                <Flex gap="1" alignItems={"center"}>
                  <Text fontWeight={"700"}>{active}</Text>
                  <CaretDown />
                </Flex>
              </MenuButton>
              <MenuList>
                {filters.map((filter) => (
                  <MenuItem key={filter} onClick={() => setActive(filter)}>
                    <Text color="text">{filter}</Text>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Button
          bg="purple"
          _hover={{ bg: "purple" }}
          color="white"
          display={"flex"}
          gap="2"
        >
          <span>+</span>
          <Text>Add Feedback</Text>
        </Button>
      </Flex>
    </Box>
  );
}
