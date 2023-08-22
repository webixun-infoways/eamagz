import React, { Component } from 'react';
import moment from 'moment';
import Loader from '../../components/Loader';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Bloglist({ title }) {
  const router = useRouter();
  const { bloglist } = router.query;

  return (
    <>
      <Head>
        <title>{title.name}</title>
        <meta name="description" content={title.meta_description} />
        <meta property="og:title" content={title.name} />
        <meta property="og:description" content={title.meta_description} />
        <meta
          property="og:url"
          content={'https://eamagz.com/category/' + bloglist}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Exclusive Affairs" />
      </Head>
      <div className="axil-breadcrumb-area breadcrumb-style-1 bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h1 className="page-title">{title.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              {title.length === 0 ? (
                <div className="content-block post-list-view mt--30 d-flex align-items-center justify-content-center flex-column">
                  <img src="/images/no_search.webp" alt="No Search" />
                  <h4 className="title">
                    No Data Found Related to {title.name}
                  </h4>
                </div>
              ) : (
                title.map((item, index) => (
                  <div className="content-block post-list-view mt--30">
                    <div className="post-thumbnail">
                      <Link href={'/blog/' + item.path}>
                        <img
                          src={global.img_link + 'images/' + item.upload_image}
                          alt="Post Images"
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                          <Link
                            className="hover-flip-item-wrapper"
                            href={'/blog/' + item.path}
                          >
                            <span className="hover-flip-item">
                              <span data-text={item.image_text}>
                                {item.page_name}
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link href={'/blog/' + item.path}>
                          {item.page_title}
                        </Link>
                      </h3>
                      <div className="post-meta-wrapper">
                        <div className="post-meta">
                          <div className="content">
                            <h4 className="post-author-name">
                              <Link
                                className="hover-flip-item-wrapper"
                                href={'/author/' + item.author.path}
                              >
                                <span className="hover-flip-item">
                                  <span data-text={item.author.author_name}>
                                    {item.author.author_name}
                                  </span>
                                </span>
                              </Link>
                            </h4>
                            <ul className="post-meta-list">
                              <li>{moment(item.updated_at).format('llll')}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { bloglist } = context.query;

  const res = await fetch(
    global.api_link + 'fetch_blogs_category?category=' + bloglist
  );
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

export default Bloglist;
