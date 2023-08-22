import Loader from '@/components/Loader';
import Singlemzdata from '@/components/Singlemzdata';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function magazine({ title }) {
  const router = useRouter();
  const { magazine } = router.query;

  return (
    <>
      <Head>
        <title>{title.name}</title>
        <meta
          name="description"
          content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
        />
        <meta property="og:title" content={title.name} />
        <meta
          property="og:description"
          content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
        />
        <meta
          property="og:image"
          content={global.img_link + 'images/' + title.cover_image}
        />
        <meta
          property="og:url"
          content={'https://eamagz.com/singlemagazine/' + magazine}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Exclusive Affairs" />
      </Head>
      <Singlemzdata post={title} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { magazine } = context.query;
  const res = await fetch(
    global.api_link + 'fetch_magzine_single?path=' + magazine
  );
  const data = await res.json();
  if (!data.status) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: data.data[0],
      },
    };
  }
}

export default magazine;
