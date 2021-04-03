import { Box, Divider, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Continent from '../@types/Continent';
import { Carousel } from '../components/Carousel';

import { Hero } from '../components/Hero';
import { PresentationSection } from '../components/PresentationSection';
import { api } from '../services/api';

export default function Home(): JSX.Element {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    async function findContinents(): Promise<void> {
      const response = await api.get<Continent[]>('/continents');

      setContinents(response.data);
    }

    findContinents();
  }, []);

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
        <Carousel continents={continents} />
      </Box>
    </>
  );
}
