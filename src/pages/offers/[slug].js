import { Text, Divider } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';

import BaseLayout from '../../components/Layouts/BaseLayout';

function Offer({ offer, slug }) {
  // const router = useRouter();
  // const { slug } = router.query;

  // const [offer, setOffer] = useState(null);
  // useEffect(() => {
  //   // fetchOffer(slug)
  //   fetch(`https://foo.com/api/v1/offers/test/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setOffer(data);
  //     });
  // }, []);

  return (
    <BaseLayout>
      <Text as="h1" fontSize="3xl">
        Offer &quot;{slug}&quot;
        <Divider />
        City: {offer && offer.city}, {offer && offer.country}
      </Text>
    </BaseLayout>
  );
}

// export async function getStaticProps({ query }) {
export async function getServerSideProps({ query }) {
  const response = await fetch(`https://foo.com/api/v1/offers/test/`);
  const data = await response.json();

  return {
    props: {
      offer: data,
      slug: query.slug,
    },
  };
}

export default Offer;
