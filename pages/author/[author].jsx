import { useRouter } from 'next/router';
import React from 'react';
import Loader from '../../components/Loader';
import ReactHtmlParser from 'react-html-parser';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';

function author({ post }) {
  const router = useRouter();
  const { author } = router.query;

  return (
    <>
      <Head>
        <title>Exclusive Affairs | {post.author_name}</title>
        <meta
          name="description"
          content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
        />
        <meta property="og:title" content={post.author_name} />
        <meta
          property="og:description"
          content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
        />
        <meta
          property="og:image"
          content={global.img_link + 'images/' + post.upload_image}
        />
        <meta
          property="og:url"
          content={'https://eamagz.com/author/' + author}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Exclusive Affairs" />
      </Head>
      <div className="axil-author-area axil-author-banner bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-author">
                <div className="media">
                  <div className="thumbnail">
                    <a href="javascript:void(0)">
                      <img
                        src={global.img_link + 'images/' + post.upload_image}
                        alt="Post Images"
                        style={{ width: '150px', height: '150px' }}
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <div className="author-info">
                      <h1 className="title">{post.author_name}</h1>
                    </div>
                    <div className="content">
                      <div className="b1 description">
                        {ReactHtmlParser(post.description)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <h2 className="title mb--40">Articles By This Author</h2>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              {post.blogs &&
                post.blogs.map((item, index) => {
                  return (
                    <div className="content-block post-list-view mt--30">
                      <div className="post-thumbnail">
                        <Link href={'/blog/' + item.path}>
                          <img
                            src={
                              global.img_link + 'images/' + item.upload_image
                            }
                            alt="Post Images"
                          />{' '}
                        </Link>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <Link
                              className="hover-flip-item-wrapper"
                              href={'/category/' + item.category.path}
                            >
                              <span className="hover-flip-item">
                                <span data-text={item.category.name}>
                                  {item.category.name}
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                        <h4 className="title">
                          <Link href={'/blog/' + item.path}>
                            {item.page_name}
                          </Link>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
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
                              </h6>
                              <ul className="post-meta-list">
                                <li>
                                  {' '}
                                  {moment(item.updated_at).format('dddd ll')}
                                </li>
                                <li>
                                  <i className="fa fa-eye" /> {item.total_views}{' '}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* End Post List  */}
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
  const { author } = context.query;

  const res = await fetch(global.api_link + 'fetch_author?blog_path=' + author);
  const data = await res.json();
  if (!data.status) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data.data,
    },
  };
}

export default author;
