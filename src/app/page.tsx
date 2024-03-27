"use client"

import React from 'react'

import { Container, Flex, Grid } from "@chakra-ui/react";
import { Tags } from "@/app/Tags";
import { FeatureCard } from "@/app/FeatureCard";
import { RoadmapCard } from "@/app/RoadmapCard";
import { Header } from "./Header";
import { SuggestionList } from "./SuggestionList";

export default function Home() {
  const [active, setActive] = React.useState("All");
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <main>
      <Container maxW={"1110px"} py={"20"} color={"text"}>
        <Flex alignItems={'start'} gap={7}>
          <Grid flexGrow={"1"} maxW="255px" gap={6} position={"sticky"} top="8">
            <FeatureCard />
            <Tags active={active} setActive={setActive} tags={tags} />
            <RoadmapCard />
          </Grid>
          <Grid alignContent={'start'} gap={6} flexGrow={"1"}>
            <Header />
            <SuggestionList activeStatus={active} />
          </Grid>
        </Flex>
      </Container>
    </main>
  );
}
