import { Box, Grid } from "@chakra-ui/react";
import { SuggestionCard } from "./SuggestionCard";
import React from "react";

const dummyList = [
  {
    title: "Add tags for solution",
    description: 'Easier to search for solutions based on a specific stack.',
    numberOfComments: "2",
    numberOfVotes: "112",
    tag: "Enhancement"
  },
  {
    title: 'Add a dark theme option',
    description: 'It would help people with light sensitivities and who prefer dark mode.',
    numberOfComments: "4",
    numberOfVotes: "99",
    tag: "Feature"
  },
  {
    title: 'Q&A withing the challenge hubs',
    description: 'Challenge hubs would make for easy reference.',
    numberOfComments: "1",
    numberOfVotes: "65",
    tag: "Feature"
  },
  {
    title: 'Allow image/video upload to feedback',
    description: 'Images and screencasts can enhance comments on solutions.',
    numberOfComments: "2",
    numberOfVotes: "52",
    tag: "Enhancement"
  },
  {
    title: 'Ability to follow others',
    description: 'Stay updated on comments and solutions other people post.',
    numberOfComments: "3",
    numberOfVotes: "42",
    tag: "Feature"
  },
  {
    title: 'Preview images not loading',
    description: 'Challenge preview images are missing when you apply a filter.',
    numberOfComments: "3",
    numberOfVotes: "0",
    tag: "Bug"
  }
]

export function SuggestionList({ activeStatus = 'All' }: {activeStatus: string}) {
  const filteredList = React.useMemo(() => {
    if (activeStatus === 'All') return dummyList
    return dummyList.filter(suggestion => suggestion.tag === activeStatus)
  }, [activeStatus])
  return <Grid gap={6}>
    {!filteredList.length ? <Box textAlign={'center'} p="6">No suggestions found</Box> : ''}
    {filteredList.map(suggestion => <SuggestionCard key={suggestion.title} {...suggestion} />)}
  </Grid>;
}