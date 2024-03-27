"use client";

import { CommentIcon } from "@/icons/Comment";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

type Props ={
  title: string;
  numberOfComments: string;
  numberOfVotes: string;
  description: string;
  tag: string;
}

export function SuggestionCard({title, description, numberOfComments, numberOfVotes, tag }: Props) {
  return <Flex backgroundColor={"#ffffff"} paddingX={"32px"} paddingY={"28px"} width={"100%"} gap={"40px"} borderRadius={"md"}>
    <Flex alignItems={'center'} flexDirection={"column"} backgroundColor={"#F2F4FE"} padding={"8px"} maxHeight={"53px"} borderRadius={"md"}>
      <ChevronUpIcon color={"#4661E6"} />
      <Text fontWeight={"700"} fontSize={"sm"}>{numberOfVotes}</Text>
    </Flex>

    <Flex alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
      <Grid>
        <Text color={"#3A4374"} fontSize={"18px"} fontWeight={"700"}>{title}</Text>
        <Text color={"#647196"} mt={"4px"}>{description}</Text>
        <Box color={"#4661E6"} fontSize={"13px"} fontWeight={"600"} paddingX={"16px"} paddingY={"6px"} backgroundColor={"#F2F4FF"} mt={"12px"} borderRadius={"md"} justifySelf={"start"}>{tag}</Box>
      </Grid>
      <Flex gap="2" alignItems={'center'}>
        <CommentIcon />
        <Box>{numberOfComments}</Box>
      </Flex>
    </Flex>
  </Flex>
}