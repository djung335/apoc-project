// src/components/MovieCard.js
import React from 'react';
import { Box, Heading, Text, Divider, AspectRatio, VStack } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';

const MovieCard = ({ movie }) => {
  return (
    <Box mb={8} p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" mb={2}>
        {movie.title}
      </Heading>
      <Text mb={4}>{movie.summary}</Text>
      <Text mb={2}>
        <strong>Themes:</strong> {movie.themes}
      </Text>
      <Divider mb={4} />
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer url={movie.youtubeLink} width="100%" height="100%" />
      </AspectRatio>
      <VStack mt={4}>
        <Heading as="h3" size="md" mb={2}>
          Why We Chose This Song
        </Heading>
        <Text>{movie.discussion}</Text>
      </VStack>
    </Box>
  );
};

export default MovieCard;