import React, { Component } from 'react';
import Sidebar from './Sidebar';

export class Singlemzdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
      buttonLoading: false,
      comment_data: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    this.setState({ comment_data: this.props.post.comments });
  }

  render() {
    return (
      <>
        <div className="post-single-wrapper axil-section-gap bg-color-white main_image">
          <div className="container">
            <div className="row">
              {/* <div className="banner banner-single-post post-formate post-standard alignwide">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="content-block">
                        <div className="post-thumbnail">
                          <img
                            src={
                              global.img_link +
                              'images/' +
                              this.props.post.cover_image
                            }
                            alt="Post Images"
                          />
                        </div>
                        <div className="post-content">
                          <h1 className="title">{this.props.post.name}</h1>
                          <div className="post-meta-wrapper">
                            <div className="post-meta">
                              <div className="content">
                                <ul className="post-meta-list">
                                  <li>
                                    {moment(this.props.post.updated_at).format(
                                      'dddd ll'
                                    )}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-8">
                <div className="axil-post-details" style={{ height: '100vh' }}>
                  <iframe
                    src={this.props.post.url}
                    width="100%"
                    height="100%"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Singlemzdata;
