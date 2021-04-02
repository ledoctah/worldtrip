import { Box, Flex, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Continent from '../../@types/Continent';

import { CarouselItem } from './CarouselItem';

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

interface CarouselProps {
  continents: Array<Continent>;
}

export const Carousel: React.FC<CarouselProps> = ({ continents }) => {
  return (
    <Box maxWidth="1200px" margin="auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
        initialSlide={1}
      >
        {continents.map(continent => (
          <SwiperSlide>
            <CarouselItem key={continent.id} continent={continent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
