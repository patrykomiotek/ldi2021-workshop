import { Text } from '@chakra-ui/react';

import BaseLayout from '../components/Layouts/BaseLayout';

function About() {
  return (
    <BaseLayout>
      <Text fontSize="3xl" as="h1">
        Hello from about page
      </Text>
    </BaseLayout>
  );
}

export default About;
