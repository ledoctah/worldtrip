import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Carousel } from '../components/Carousel';

import { Hero } from '../components/Hero';
import { PresentationSection } from '../components/PresentationSection';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Hero />

      <PresentationSection />

      <Flex justify="center">
        <Divider borderWidth="1px" borderColor="text.dark" w="16" />
      </Flex>

      <Flex
        justify="center"
        direction="column"
        py="12"
        fontSize="3xl"
        fontWeight="medium"
      >
        <Text textAlign="center">Vamos nessa?</Text>
        <Text textAlign="center">Então escolha seu continente</Text>
      </Flex>

      <Box px="8" pb="8">
        <Carousel />
      </Box>
    </>
  );
}
