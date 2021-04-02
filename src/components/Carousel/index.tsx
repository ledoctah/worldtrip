import { Box, Flex, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarouselItem } from './CarouselItem';

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

export const Carousel: React.FC = () => {
  return (
    <Box maxWidth="1200px" margin="auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
