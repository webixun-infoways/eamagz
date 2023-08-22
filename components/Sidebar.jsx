import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

function Sidebar() {
  const router = useRouter();
  const [category, setCategory] = React.useState([]);
  const [category_name, setCategory_name] = React.useState([]);
  const [popular_post, setPopular_post] = React.useState([]);
  const [featured_post, setFeatured_post] = React.useState([]);
  const [subscriptionEmail, setSubscriptionEmail] = React.useState('');
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [instagramData, setInstagramData] = React.useState([]);

  React.useEffect(() => {
    featured_post_data();
    fetch_latest_update();
    fetch_instagram_pic();
  }, []);

  const featured_post_data = () => {
    fetch(global.api_link + 'fetch_popular_post', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.status) {
        } else {
          setPopular_post(json.data);
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  const fetch_latest_update = () => {
    fetch(global.api_link + 'fetch_latest_update', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.status) {
        } else {
          setFeatured_post(json.data);
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (subscriptionEmail === '') {
      toast.error('Please enter email address');
      return;
    } else if (!emailValidation.test(subscriptionEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setButtonLoading(true);
    fetch(global.api_link + 'newsletters_add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: subscriptionEmail,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.status) {
          setButtonLoading(false);
          toast.error(json.message);
        } else {
          setButtonLoading(false);
          toast.success(json.msg);
          setSubscriptionEmail('');
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setButtonLoading(false);
      });
  };

  const fetch_instagram_pic = () => {
    fetch(global.api_link + 'fetch_instagram_pic', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 6,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status) {
          setInstagramData(json.data);
        } else {
          setInstagramData([]);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  };

  return (
    <>
      <div className="axil-single-widget widget widget_search mb--30">
        <h5 className="widget-title">Search</h5>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (search === '') {
              toast.error('Please enter search keyword', {
                toastId: 'onw',
              });
              return;
            }
            router.push('/search/' + search);
          }}
        >
          <div className="axil-search form-group">
            <button type="submit" className="search-button">
              <i className="fal fa-search"></i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (search === '') {
                    toast('Please enter search keyword');
                  } else {
                    router.push('/search/' + search);
                  }
                }
              }}
            />
          </div>
        </form>
      </div>

      <div className="axil-single-widget widget widget_postlist mb--30">
        <h5 className="widget-title">Popular on EAMAGZ</h5>

        <div className="post-medium-block">
          {popular_post.map((item, index) => {
            return (
              <div className="content-block post-medium mb--20">
                <div className="post-thumbnail">
                  <Link href={'/blog/' + item.path}>
                    <img
                      src={global.img_link + 'images/' + item.upload_image}
                      alt="Post Images"
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <h6 className="title cut_text">
                    <Link href={'/blog/' + item.path}>{item.page_title} </Link>
                  </h6>
                  <div className="post-meta">
                    <ul className="post-meta-list">
                      <li>{moment(item.updated_at).format('dddd ll')}</li>
                      {item.total_views > 0 ||
                        item.total_views !== null ||
                        (item.total_views !== undefined && (
                          <li>{item.total_views} Views</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="axil-single-widget widget widget_newsletter mb--30">
        <div className="newsletter-inner text-center">
          <h4 className="title mb--15">Never Miss A Post!</h4>
          <p className="b2 mb--30">
            Sign up for free and be the first to <br /> get notified about
            updates.
          </p>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Your Email "
                value={subscriptionEmail}
                onChange={(e) => {
                  setSubscriptionEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-submit">
              {buttonLoading ? (
                <button className="cerchio axil-button button-rounded">
                  <span>
                    <i className="fa fa-spinner fa-spin"></i> Please Wait...
                  </span>
                </button>
              ) : (
                <button className="cerchio axil-button button-rounded">
                  <span>Subscribe</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* <div className="axil-single-widget widget widget_social mb--30">
        <h5 className="widget-title">Stay In Touch</h5>

        <ul className="social-icon md-size justify-content-center">
          <li>
            <a href="https://www.facebook.com/eamagz" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/eamagz?igshid=OGQ2MjdiOTE="
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/eamagzofficial" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/eamagz "
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@eamagz" target="_blank">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div> */}
      {instagramData.length > 0 && (
        <div className="axil-single-widget widget widget_instagram mb--30">
          <h5 className="widget-title">Instagram</h5>
          <ul className="instagram-post-list-wrapper">
            {instagramData.map((item, index) => {
              return (
                <li className="instagram-post-list" key={index}>
                  <a href={item.path} target="_blank">
                    <img
                      src={global.img_link + 'images/' + item.image}
                      alt="Post Images"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="axil-single-widget widget widget_postlist mb--30">
        <h5 className="widget-title">Featured Posts</h5>

        <div className="post-medium-block">
          {featured_post.map((item, index) => {
            return (
              <div className="content-block post-medium mb--20">
                <div className="post-thumbnail">
                  <Link href={'/blog/' + item.path}>
                    <img
                      src={global.img_link + 'images/' + item.upload_image}
                      alt="Post Images"
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <h6 className="title cut_text">
                    <Link href={'/blog/' + item.path}>{item.page_title} </Link>
                  </h6>
                  <div className="post-meta">
                    <ul className="post-meta-list">
                      <li>{moment(item.updated_at).format('dddd ll')}</li>
                      {item.total_views > 0 ||
                        item.total_views !== null ||
                        (item.total_views !== undefined && (
                          <li>{item.total_views} Views</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
