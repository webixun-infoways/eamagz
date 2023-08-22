import moment from 'moment';
import Link from 'next/link';
import React, { Component } from 'react';

export class NewHomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post.post,
      active: this.props.post.children[0].post,
    };
  }
  render() {
    return (
      this.state.post.length > 0 && (
        <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white is-active">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xl-12">
                {this.state.post.map((item, index) => {
                  return (
                    <div className="content-block post-list-view axil-control mt--30">
                      <div className="post-thumbnail">
                        <Link href={'/blog/' + item.path}>
                          <img
                            src={
                              global.img_link + 'images/' + item.upload_image
                            }
                            alt="Post Images"
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper">
                              <span className="hover-flip-item">
                                <span data-text={item.page_name}>
                                  {item.page_name}
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <Link href={'/blog/' + item.path}>
                            {item.page_title}
                          </Link>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              {/* <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Jane Ara">Jane Ara</span>
                                  </span>
                                </a>
                              </h6> */}
                              <ul className="post-meta-list">
                                <li>
                                  {moment(item.updated_at).format('llll')}
                                </li>
                                <li>{item.total_views} Views</li>
                              </ul>
                            </div>
                          </div>
                          {/* <ul className="social-share-transparent justify-content-end">
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-link" />
                              </a>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default NewHomeSection;
