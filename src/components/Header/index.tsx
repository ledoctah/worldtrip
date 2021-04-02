import { Flex, Image } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex align="center" justify="center" p="6">
      <Image src="/assets/logo.svg" />
    </Flex>
  );
};
