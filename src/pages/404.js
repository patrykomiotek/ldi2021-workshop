import { Text } from '@chakra-ui/react';

import BaseLayout from '../components/Layouts/BaseLayout';

function NotFound() {
  return (
    <BaseLayout>
      <Text as="h1" fontSize="3xl">
        404 - Not found
      </Text>
    </BaseLayout>
  );
}

export default NotFound;
