import React, { Component } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState([]);
  const [subData, setSubData] = React.useState([]);

  React.useEffect(() => {
    fetch(global.api_link + 'category', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.status) {
        } else {
          setCategory(json.data);
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }, []);

  return (
    <>
      <header className="header axil-header new-header-style header-light header-sticky ">
        <div className="header-top">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xl-4">
              <ul className="social-icon color-white md-size justify-content-center justify-content-sm-start">
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
                  <a
                    href="https://www.twitter.com/eamagzofficial"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/eamagz"
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
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-xl-4">
              <div className="logo text-center">
                <Link href="/">
                  <img
                    src="/images/logos/main_logo.png"
                    alt="img"
                    className="dark-logo"
                  />
                  <img
                    className="light-logo"
                    src="/images/logos/mainlogowhite.png"
                    alt="Blogar logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-xl-4">
              <div className="header-top-bar d-flex justify-content-center justify-content-lg-end flex-wrap align-items-center">
                <ul className="header-top-date liststyle d-flex flrx-wrap align-items-center mr--20">
                  <li>{moment().format('dddd, MMMM Do YYYY')}</li>
                </ul>
                <ul className="header-top-nav liststyle d-flex flrx-wrap align-items-center">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-10 col-12  d-none d-lg-block">
              <div className="mainmenu-wrapper ">
                <nav className="mainmenu-nav">
                  {/* Start Mainmanu Nav */}
                  <ul className="mainmenu">
                    <li className="menu-item-has-children">
                      <Link href={'/'}>Home</Link>
                    </li>
                    {category.length > 0 ? (
                      category.map((item, index) => {
                        return (
                          <li
                            className="menu-item-has-children megamenu-wrapper"
                            onMouseEnter={() => {
                              setSubData(item.children[0].post);
                            }}
                          >
                            <Link href={'/category/' + item.path}>
                              {item.name}
                            </Link>
                            {item.children.length > 0 ? (
                              <ul className="megamenu-sub-menu">
                                <li className="megamenu-item">
                                  <div className="axil-vertical-nav">
                                    <ul className="vertical-nav-menu">
                                      {item.children.map(
                                        (sub_item, sub_index) => {
                                          return (
                                            <li className="vertical-nav-item">
                                              <Link
                                                href={
                                                  '/category/' + sub_item.path
                                                }
                                              >
                                                <p
                                                  className="hover-flip-item-wrapper"
                                                  onMouseEnter={() => {
                                                    setSubData(sub_item.post);
                                                  }}
                                                >
                                                  <span className="hover-flip-item">
                                                    <span
                                                      data-text={sub_item.name}
                                                    >
                                                      {sub_item.name}
                                                    </span>
                                                  </span>
                                                </p>
                                              </Link>
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>

                                  <ContentHeader item={subData} />
                                </li>
                              </ul>
                            ) : null}
                          </li>
                        );
                      })
                    ) : (
                      <li className="menu-item-has-children">
                        <Link href="/">Loading...</Link>
                      </li>
                    )}
                  </ul>
                  {/* End Mainmanu Nav */}
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-12">
              <div className="header-search d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end">
                <div className="header-search-form d-sm-block d-none">
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
                {/* Start Hamburger Menu  */}
                <div
                  className="hamburger-menu d-block d-xl-none"
                  onClick={() => {
                    document
                      .getElementsByTagName('body')[0]
                      .classList.add('popup-mobile-menu-show');
                  }}
                >
                  <div className="hamburger-inner">
                    <div className="icon">
                      <i className="fal fa-bars" />
                    </div>
                  </div>
                </div>
                {/* End Hamburger Menu  */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="popup-mobilemenu-area">
        <div className="inner">
          <div className="mobile-menu-top">
            <div className="logo">
              <Link href="/">
                <img src="/images/logos/main_logo.png" alt="img" />
              </Link>
            </div>
            <div className="mobile-close">
              <div className="icon">
                <i
                  className="fal fa-times"
                  onClick={() => {
                    document
                      .getElementsByTagName('body')[0]
                      .classList.remove('popup-mobile-menu-show');
                  }}
                />
              </div>
            </div>
          </div>
          <ul className="mainmenu">
            <li>
              <Link href="/">Home</Link>
            </li>
            {category.length > 0
              ? category.map((item, index) => {
                  return (
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className=""
                        onClick={() => {
                          if (
                            document.getElementsByClassName('axil-submenu')[
                              index
                            ].style.display == 'block'
                          ) {
                            document.getElementsByClassName('axil-submenu')[
                              index
                            ].style.display = 'none';
                          } else {
                            document.getElementsByClassName('axil-submenu')[
                              index
                            ].style.display = 'block';
                          }
                        }}
                      >
                        {item.name}
                      </a>
                      <ul className="axil-submenu" style={{ display: 'none' }}>
                        {item.children.map((sub_item, sub_index) => {
                          return (
                            <li className="vertical-nav-item">
                              <Link
                                href={'/category/' + sub_item.path}
                                className=""
                                onClick={() => {
                                  document
                                    .getElementsByTagName('body')[0]
                                    .classList.remove('popup-mobile-menu-show');
                                }}
                              >
                                {sub_item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })
              : null}

            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="my_switcher" className="my_switcher">
        <ul>
          <li>
            <a
              href="javascript: void(0);"
              data-theme="light"
              className="setColor light active"
            >
              <span title="Light Mode">Light</span>
            </a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              data-theme="dark"
              className="setColor dark"
            >
              <span title="Dark Mode">Dark</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

class ContentHeader extends React.Component {
  render() {
    return (
      <div className="axil-vertical-nav-content">
        {this.props.item.length > 0 ? (
          <div
            className="axil-vertical-inner tab-content"
            // id={sub_menu.id}
            style={{
              display: 'block',
              opacity: 1,
            }}
          >
            <div className="axil-vertical-single">
              <div className="row">
                {this.props.item.map((post_item, post_index) =>
                  post_index < 4 ? (
                    <div className="col-lg-3">
                      <div className="content-block image-rounded">
                        <div className="post-thumbnail mb--20">
                          <Link href={'/blog/' + post_item.path}>
                            <img
                              className="w-100"
                              src={
                                global.img_link +
                                'images/' +
                                post_item.upload_image
                              }
                              alt="Post Images"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <div className="post-cat">
                            <div className="post-cat-list">
                              <Link
                                href={'/blog/' + post_item.path}
                                className="hover-flip-item-wrapper"
                              >
                                <span className="hover-flip-item">
                                  <span data-text={post_item.page_name}>
                                    {post_item.page_name}
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5 className="title">
                            <Link href={'/blog/' + post_item.path}>
                              {post_item.page_name}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        ) : (
          <>No Content Found.</>
        )}
      </div>
    );
  }
}

export default Header;
