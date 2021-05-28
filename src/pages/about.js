import { Text } from '@chakra-ui/react';

import BaseLayout from '../components/Layouts/BaseLayout';

export default function About() {
  return (
    <BaseLayout>
      <Text fontSize="3xl" as="h1">
        Hello from about page
      </Text>
    </BaseLayout>
  );
}
