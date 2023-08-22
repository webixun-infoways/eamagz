import Link from 'next/link';
import React, { Component } from 'react';
import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel'));

const options1 = {
  responsiveClass: true,
  autoplay: true,
  smartSpeed: 500,
  loop: true,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

export class Inovationandtech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      active: this.props.post.children[0].post,
    };
  }

  render() {
    return (
      <div>
        {/* Start Tab Area  */}
        <div className="axil-tab-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">{this.props.post.name}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Start Tab Button  */}
                <ul
                  className="axil-tab-button nav nav-tabs mt--20"
                  id="axilTab"
                  role="tablist"
                >
                  {this.props.post.children.length > 0
                    ? this.props.post.children.map((item, index) => {
                        return (
                          <li className="nav-item" role="presentation">
                            <a
                              onClick={() => {
                                this.setState({ active: item.post });
                              }}
                              className="nav-link active"
                              id={index}
                              data-bs-toggle="tab"
                              href={'#' + index}
                              role="tab"
                              aria-controls={index}
                              aria-selected="true"
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      })
                    : null}
                </ul>
                <div className="tab-content" id="axilTabContent">
                  <OwlCarousel className="owl-theme mt-4" {...options1}>
                    {this.state.active.length > 0
                      ? this.state.active.map((item, index) => {
                          return (
                            <div className="slick-single-layout">
                              <div className="content-block modern-post-style text-center content-block-column">
                                <div className="post-content">
                                  <h6 className="title">
                                    <Link href={'/blog/' + item.path}>
                                      {item.page_title}
                                    </Link>
                                  </h6>
                                </div>
                                <div className="post-thumbnail">
                                  <Link href={'/blog/' + item.path}>
                                    <img
                                      src={
                                        global.img_link +
                                        'images/' +
                                        item.upload_image
                                      }
                                      alt="Post Images"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </OwlCarousel>
                </div>

                {/* End Tab Content Wrapper  */}
              </div>
            </div>
          </div>
        </div>
        {/* End Tab Area  */}
      </div>
    );
  }
}

export default Inovationandtech;
