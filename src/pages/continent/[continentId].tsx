import { GetStaticPaths, GetStaticProps } from 'next';
import {
  Box,
  Flex,
  Grid,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import ContinentInterface from '../../@types/Continent';
import ContinentInfo from '../../@types/ContinentInfo';

import { api } from '../../services/api';

import { Banner } from './Banner';
import { ContinentInfoComponent } from '../../components/ContinentInfoComponent';
import { CityCard } from '../../components/CityCard';

type ContinentProps = ContinentInfo;

export default function Continent({
  countries_count,
  languages_count,
  cities_count,
  cities,
  name,
  description,
  photo_url,
}: ContinentProps): JSX.Element {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Flex justify="center" align="center" direction="column">
        <Spinner />
        <Text mt="4">Carregando...</Text>
      </Flex>
    );
  }

  return (
    <>
      <Banner continentName={name} photo_url={photo_url} />

      <Flex
        justify="center"
        py="14"
        px={[8, 8, 8, 8, 0]}
        maxWidth="1200px"
        mx="auto"
      >
        <SimpleGrid
          flex="1"
          columnGap="24"
          rowGap="8"
          minChildWidth={[null, '320px']}
        >
          <Text textAlign="justify" fontSize="lg">
            {description}
          </Text>

          <Flex justify="space-between" fontSize="4xl">
            <ContinentInfoComponent value={countries_count}>
              países
            </ContinentInfoComponent>

            <ContinentInfoComponent value={languages_count}>
              línguas
            </ContinentInfoComponent>

            <ContinentInfoComponent value={cities_count}>
              cidades +100
            </ContinentInfoComponent>
          </Flex>
        </SimpleGrid>
      </Flex>

      <Flex
        justify="center"
        py="8"
        px={[8, 8, 8, 8, 0]}
        maxWidth="1200px"
        mx="auto"
        direction="column"
      >
        <Text fontWeight="medium" fontSize="3xl" textAlign="left">
          Cidades +100
        </Text>

        <Flex justify={['center', 'left']}>
          <SimpleGrid
            width="100%"
            minChildWidth={['256px']}
            gap="8"
            gridTemplateColumns={
              cities?.length < 4
                ? 'repeat(auto-fit, minmax(256px, 300px))'
                : 'repeat(auto-fit, minmax(256px, 1fr))'
            }
            justifyItems="center"
          >
            {cities?.map(city => (
              <CityCard key={city.id} city={city} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await api.get<ContinentInterface[]>('/continents');

  const paths = continents.data.map(continent => ({
    params: {
      continentId: String(continent.id),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continentId } = params;

  const continentInfo = await api.get<ContinentInfo>(
    `/continent-info?continentId=${continentId}`
  );

  console.log(continentInfo);

  if (!continentInfo.data[0]) {
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...continentInfo.data[0],
    },
  };
};
