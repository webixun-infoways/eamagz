import React, { Component } from 'react';
import Singlepostdata from '../../components/Singlepostdata.jsx';
import Loader from '../../components/Loader.jsx';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Blog({ title }) {
  const router = useRouter();
  const { blog } = router.query;

  React.useEffect(() => {
    if (blog) {
      update_views(blog);
    }
  }, [blog]);

  const update_views = (id) => {
    fetch(global.api_link + 'update_blog_view', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blog_id: id,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  return (
    <div>
      <Head>
        <title>{title.page_title}</title>
        <meta name="description" content={title.meta_description} />
        <meta name="keywords" content={title.keywords} />
        <meta property="og:title" content={title.page_title} />
        <meta property="og:description" content={title.meta_description} />
        <meta
          property="og:image"
          content={global.img_link + 'images/' + title.upload_image}
        />
        <meta property="og:url" content={'https://eamagz.com/blog/' + blog} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Exclusive Affairs" />
      </Head>
      <div className="container">
        <Singlepostdata post={title} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { blog } = context.query;

  const res = await fetch(global.api_link + 'singleblogdata?blog_path=' + blog);
  const data = await res.json();
  if (!data.status) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: data.data,
    },
  };
}

export default Blog;
