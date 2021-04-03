import { Box, Flex, Icon, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

export const Header: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <Flex align="center" position="relative" justify="center" p="6">
      {asPath.includes('/continent') && (
        <Flex
          maxW="1200px"
          justify="left"
          px={[8, 8, 8, 8, 0]}
          position="absolute"
          width="100%"
        >
          <Link href="/" passHref>
            <Box as="a">
              <Icon my="auto" fontSize="28" left={['8px']} as={FiChevronLeft} />
            </Box>
          </Link>
        </Flex>
      )}
      <Image src="/assets/logo.svg" />
    </Flex>
  );
};
