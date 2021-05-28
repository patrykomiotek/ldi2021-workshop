import Head from 'next/head';
import { ChakraProvider, Container } from '@chakra-ui/react';

export const siteTitle = 'Next.js Sample Website';

const BaseLayout = ({ children }) => {
  return (
    <ChakraProvider>
      <Head>
        <title>Base title</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <Container>{children}</Container>
    </ChakraProvider>
  );
};

export default BaseLayout;
