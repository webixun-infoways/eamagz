import React, { Component } from 'react';
import moment from 'moment';
import Link from 'next/link';

export class Featurevideo extends Component {
  render() {
    return (
      <div>
        {/* Start Video Area  */}
        <div className="axil-video-post-area axil-section-gap bg-color-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">{this.props.post.name}</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {this.props.post.post.length > 0 ? (
                <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                  {/* Start Post List  */}
                  <div className="content-block post-default image-rounded mt--30">
                    <div className="post-thumbnail" style={{ MarginTop: 40 }}>
                      <Link href={'/blog/' + this.props.post.post[0].path}>
                        <img
                          src={
                            global.img_link +
                            'images/' +
                            this.props.post.post[0].upload_image
                          }
                          alt="Post Images"
                          className="img-banner"
                        />
                      </Link>
                      {/* <a className="video-popup position-top-center" href="post-details.html"><span className="play-icon" /></a> */}
                    </div>
                    <div className="post-content">
                      {/* <div className="post-cat">
                        <div className="post-cat-list">
                          <Link
                            className="hover-flip-item-wrapper"
                            href={'/blog/' + this.props.post.post[0].path}
                          >
                            <span className="hover-flip-item">
                              <span data-text="CAREERS">
                                {this.props.post.post[0].page_name}
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div> */}
                      <h3 className="title">
                        {' '}
                        <Link href={'/blog/' + this.props.post.post[0].path}>
                          {' '}
                          {this.props.post.post[0].page_title}
                        </Link>
                      </h3>
                      <div className="post-meta-wrapper">
                        <div className="post-meta">
                          <div className="content">
                            <h6 className="post-author-name">
                              <a
                                className="hover-flip-item-wrapper"
                                href="author.html"
                              >
                                <span className="hover-flip-item">
                                  <Link
                                    href={
                                      '/blog/' + this.props.post.post[0].path
                                    }
                                  >
                                    {' '}
                                    <span data-text="Rafayel Hasan">
                                      {this.props.post.post[0].author_name}
                                    </span>
                                  </Link>
                                </span>
                              </a>
                            </h6>
                            <ul className="post-meta-list">
                              <li>
                                {moment(
                                  this.props.post.post[0].created_by
                                ).format('llll')}
                              </li>
                              {/* <li>3 min read</li> */}
                            </ul>
                          </div>
                        </div>
                        {/* <ul className="social-share-transparent justify-content-end">
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fas fa-link" /></a></li>
                    </ul> */}
                      </div>
                    </div>
                  </div>
                  {/* End Post List  */}
                </div>
              ) : null}
              <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                <div className="row">
                  {/* Start Post List  */}

                  {this.props.post.post.map((item, index) => {
                    if (index > 0) {
                      return (
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="content-block post-default image-rounded mt--30">
                            <div className="post-thumbnail">
                              <Link href={'/blog/' + item.path}>
                                <img
                                  src={
                                    global.img_link +
                                    'images/' +
                                    item.upload_image
                                  }
                                  alt="Post Images"
                                />{' '}
                              </Link>
                              {/* <Link
                                className="video-popup size-medium position-top-center"
                                href={"/blog/" + item.path}
                              > */}
                              {/* <span className="play-icon" /> */}
                              {/* </Link> */}
                            </div>
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <Link
                                    className="hover-flip-item-wrapper"
                                    href={'/blog/' + item.path}
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text={item.page_name}>
                                        {item.page_name}
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <h5 className="title cut_text">
                                <Link href={'/blog/' + item.path}>
                                  {item.page_title}{' '}
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}

                  {/* End Post List  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Video Area  */}
      </div>
    );
  }
}

export default Featurevideo;
