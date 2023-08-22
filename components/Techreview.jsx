import React, { Component } from 'react';

export class Techreview extends Component {
  render() {
    return (
      <div>
        {/* Start Review Wrapper  */}
        <div className="axil-review-area post-listview-visible-color axil-section-gap bg-color-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">Reviews</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <ul
                  className="axil-tab-button nav nav-tabs mt--20"
                  id="reviewTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="review-one"
                      data-bs-toggle="tab"
                      href="#reviewone"
                      role="tab"
                      aria-controls="review-one"
                      aria-selected="true"
                    >
                      Phone
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="review-two"
                      data-bs-toggle="tab"
                      href="#reviewtwo"
                      role="tab"
                      aria-controls="review-two"
                      aria-selected="false"
                    >
                      Laptops
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="review-three"
                      data-bs-toggle="tab"
                      href="#reviewthree"
                      role="tab"
                      aria-controls="review-three"
                      aria-selected="false"
                    >
                      Headphones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row tab-content">
              <div
                className="col-lg-12 tab-pane fade show active"
                id="reviewone"
                role="tabpanel"
                aria-labelledby="review-one"
              >
                <div className="row">
                  {/* Start Featured Post  */}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="featured-post mt--30">
                          <div className="content-block">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="FEATURED POST">
                                        FEATURED POST
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Oppo Find X2 Pro Review: Supercar Smartphone
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail">
                              <a href="#">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                                <div className="review-count">
                                  <span>8.1</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="featured-post mt--30">
                          <div className="content-block">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="FEATURED POST">
                                        FEATURED POST
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  The new Moto G Stylus and G Power are
                                  surprisingly adept cameraphones
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail">
                              <a href="#">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />{' '}
                                <div className="review-count">
                                  <span>8</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Featured Post  */}
                  <div className="col-lg-8 col-xl-8 mt--30">
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />{' '}
                          <div className="review-count">
                            <span>7.4</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Motorola Moto E (2020) and Moto G Fast review:
                            smartphone basics
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Nusrat Isra">
                                      Nusrat Isra
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />{' '}
                          <div className="review-count">
                            <span>5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Dell XPS 15 (2020) Review: New Design, Familiar
                            Problems
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Irin Pervin">
                                      Irin Pervin
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />{' '}
                          <div className="review-count">
                            <span>5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Sony’s Wf-sp800n Earbuds Are A Noise-canceling
                            Alternative.
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Rfa Islam">Rfa Islam</span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />{' '}
                          <div className="review-count">
                            <span>5.5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Fujifilm’s Instax Mini LiPlay brings audio to the
                            instant camera{' '}
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Kanak Islam">
                                      Kanak Islam
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* Start Sidebar  */}
                  <div className="col-lg-4 col-xl-4 mt--30 mt_md--40 mt_sm--40">
                    <div className="sidebar-inner">
                      {/* Start Single Widget  */}
                      <div className="axil-single-widget widget-style-2 widget widget_categories">
                        <ul>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />{' '}
                              </div>
                              <div className="content">
                                <h5 className="title">Tech</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Style</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Travel</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Food</h5>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* End Single Widget  */}
                      {/* Start Single Widget  */}
                      <div className="axil-single-widget widget-style-2 widget widget_post mt--30">
                        <h5 className="widget-title">Featured Videos</h5>
                        <div className="video-post-wrapepr">
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  With iOS 14, Apple is finally letting the
                                  iPhone home screen get complicated
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded mt--20">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  A rocket launch can’t unite us until the space
                                  world acknowledges our divisions
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded mt--20">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  I built my own camera with a Raspberry Pi 4
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                        </div>
                      </div>
                      {/* End Single Widget  */}
                    </div>
                  </div>
                  {/* End Sidebar  */}
                </div>
              </div>
              <div
                className="col-lg-12 tab-pane fade"
                id="reviewtwo"
                role="tabpanel"
                aria-labelledby="review-two"
              >
                <div className="row">
                  {/* Start Featured Post  */}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="featured-post mt--30">
                          <div className="content-block">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="FEATURED POST">
                                        FEATURED POST
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Oppo Find X2 Pro Review: Supercar Smartphone
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail">
                              <a href="#">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                                <div className="review-count">
                                  <span>8.1</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="featured-post mt--30">
                          <div className="content-block">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="FEATURED POST">
                                        FEATURED POST
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  The new Moto G Stylus and G Power are
                                  surprisingly adept cameraphones
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/post-single/featured-post-02.jpg"
                                  alt="Post Images"
                                />
                                <div className="review-count">
                                  <span>8</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Featured Post  */}
                  <div className="col-lg-8 col-xl-8 mt--30">
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />{' '}
                          <div className="review-count">
                            <span>7.4</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Motorola Moto E (2020) and Moto G Fast review:
                            smartphone basics
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Nusrat Isra">
                                      Nusrat Isra
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                          <div className="review-count">
                            <span>5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Dell XPS 15 (2020) Review: New Design, Familiar
                            Problems
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Irin Pervin">
                                      Irin Pervin
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                          <div className="review-count">
                            <span>5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Sony’s Wf-sp800n Earbuds Are A Noise-canceling
                            Alternative.
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Rfa Islam">Rfa Islam</span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                          <div className="review-count">
                            <span>5.5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Fujifilm’s Instax Mini LiPlay brings audio to the
                            instant camera{' '}
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Kanak Islam">
                                      Kanak Islam
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* Start Sidebar  */}
                  <div className="col-lg-4 col-xl-4 mt--30 mt_md--40 mt_sm--40">
                    <div className="sidebar-inner">
                      {/* Start Single Widget  */}
                      <div className="axil-single-widget widget-style-2 widget widget_categories">
                        <ul>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Tech</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Style</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Travel</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Food</h5>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* End Single Widget  */}
                      {/* Start Single Widget  */}
                      <div className="axil-single-widget widget-style-2 widget widget_post mt--30">
                        <h5 className="widget-title">Featured Videos</h5>
                        <div className="video-post-wrapepr">
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  With iOS 14, Apple is finally letting the
                                  iPhone home screen get complicated
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded mt--20">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  A rocket launch can’t unite us until the space
                                  world acknowledges our divisions
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded mt--20">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  I built my own camera with a Raspberry Pi 4
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                        </div>
                      </div>
                      {/* End Single Widget  */}
                    </div>
                  </div>
                  {/* End Sidebar  */}
                </div>
              </div>
              <div
                className="col-lg-12 tab-pane fade"
                id="reviewthree"
                role="tabpanel"
                aria-labelledby="review-three"
              >
                <div className="row">
                  {/* Start Featured Post  */}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="featured-post mt--30">
                          <div className="content-block">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="FEATURED POST">
                                        FEATURED POST
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  Oppo Find X2 Pro Review: Supercar Smartphone
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail">
                              <a href="#">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                                <div className="review-count">
                                  <span>8.1</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="featured-post mt--30">
                          <div className="content-block">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <a
                                    className="hover-flip-item-wrapper"
                                    href="#"
                                  >
                                    <span className="hover-flip-item">
                                      <span data-text="FEATURED POST">
                                        FEATURED POST
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h4 className="title">
                                <a href="post-details.html">
                                  The new Moto G Stylus and G Power are
                                  surprisingly adept cameraphones
                                </a>
                              </h4>
                            </div>
                            <div className="post-thumbnail">
                              <a href="#">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                                <div className="review-count">
                                  <span>8</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Featured Post  */}
                  <div className="col-lg-8 col-xl-8 mt--30">
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                          <div className="review-count">
                            <span>7.4</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Motorola Moto E (2020) and Moto G Fast review:
                            smartphone basics
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Nusrat Isra">
                                      Nusrat Isra
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                          <div className="review-count">
                            <span>5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Dell XPS 15 (2020) Review: New Design, Familiar
                            Problems
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Irin Pervin">
                                      Irin Pervin
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                          <div className="review-count">
                            <span>5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Sony’s Wf-sp800n Earbuds Are A Noise-canceling
                            Alternative.
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Rfa Islam">Rfa Islam</span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                    {/* Start Post List  */}
                    <div className="content-block post-list-view with-bg-solid mt--30">
                      <div className="post-thumbnail">
                        <a href="post-details.html">
                          <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                          <div className="review-count">
                            <span>5.5</span>
                          </div>
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-cat">
                          <div className="post-cat-list">
                            <a className="hover-flip-item-wrapper" href="#">
                              <span className="hover-flip-item">
                                <span data-text="MOBILE">MOBILE</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="post-details.html">
                            Fujifilm’s Instax Mini LiPlay brings audio to the
                            instant camera{' '}
                          </a>
                        </h4>
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h6 className="post-author-name">
                                <a
                                  className="hover-flip-item-wrapper"
                                  href="author.html"
                                >
                                  <span className="hover-flip-item">
                                    <span data-text="Kanak Islam">
                                      Kanak Islam
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                              </ul>
                            </div>
                          </div>
                          <ul className="social-share-transparent justify-content-end">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Post List  */}
                  </div>
                  {/* Start Sidebar  */}
                  <div className="col-lg-4 col-xl-4 mt--30 mt_md--40 mt_sm--40">
                    <div className="sidebar-inner">
                      {/* Start Single Widget  */}
                      <div className="axil-single-widget widget-style-2 widget widget_categories">
                        <ul>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Tech</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Style</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Travel</h5>
                              </div>
                            </a>
                          </li>
                          <li className="cat-item">
                            <a href="#" className="inner">
                              <div className="thumbnail">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </div>
                              <div className="content">
                                <h5 className="title">Food</h5>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* End Single Widget  */}
                      {/* Start Single Widget  */}
                      <div className="axil-single-widget widget-style-2 widget widget_post mt--30">
                        <h5 className="widget-title">Featured Videos</h5>
                        <div className="video-post-wrapepr">
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  With iOS 14, Apple is finally letting the
                                  iPhone home screen get complicated
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded mt--20">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  A rocket launch can’t unite us until the space
                                  world acknowledges our divisions
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                          {/* Start Single Post  */}
                          <div className="content-block image-rounded mt--20">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <img src="images/post-images/lifestyle-post-01.jpg" alt="Post Images" />
                              </a>
                              <a
                                className="video-popup size-medium position-top-center icon-color-secondary"
                                href="post-details.html"
                              >
                                <span className="play-icon" />
                              </a>
                            </div>
                            <div className="post-content">
                              <h6 className="title">
                                <a href="post-details.html">
                                  I built my own camera with a Raspberry Pi 4
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Single Post  */}
                        </div>
                      </div>
                      {/* End Single Widget  */}
                    </div>
                  </div>
                  {/* End Sidebar  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Review Wrapper  */}
      </div>
    );
  }
}

export default Techreview;
