import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { PresentationItem } from './PresentationItem';

export const PresentationSection: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  console.log(isWideVersion);

  return (
    <Flex justify="center" px="8">
      <Flex
        w="100%"
        maxW="1200px"
        justify="space-between"
        py="20"
        display={isWideVersion ? 'flex' : 'block'}
      >
        <PresentationItem iconName="cocktail" text="vida noturna" />
        <PresentationItem iconName="surf" text="praia" />
        <PresentationItem iconName="building" text="moderno" />
        <PresentationItem iconName="museum" text="clássico" />
        <PresentationItem iconName="earth" text="e mais..." />
      </Flex>
    </Flex>
  );
};
