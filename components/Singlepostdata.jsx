import React, { Component } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import MoreStories from './MoreStories';
import Link from 'next/link';

export class Singlepostdata extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ buttonLoading: true });
    if (this.state.name == '') {
      toast.error('Please enter your name');
      this.setState({ buttonLoading: false });
      return;
    } else if (this.state.email == '') {
      toast.error('Please enter your email');
      this.setState({ buttonLoading: false });
      return;
    } else if (this.state.comment == '') {
      toast.error('Please enter your comment');
      this.setState({ buttonLoading: false });
      return;
    } else {
      fetch(global.api_link + 'add_comment_blog', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          comment: this.state.comment,
          blog_id: this.props.post.id,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.status) {
            toast.error("Comment can't be added");
          } else {
            toast.success(json.msg);
            this.setState({
              name: '',
              email: '',
              comment: '',
              comment_data: json.data,
            });
          }
          return json;
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ buttonLoading: false });
        });
    }
  };

  render() {
    return (
      <div className="post-single-wrapper axil-section-gap bg-color-white main_image">
        <div className="container">
          <div className="row">
            <div className="banner banner-single-post post-formate post-standard alignwide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Start Single Slide  */}
                    <div className="content-block">
                      {/* Start Post Thumbnail  */}
                      <div className="post-thumbnail">
                        <img
                          src={
                            global.img_link +
                            'images/' +
                            this.props.post.upload_image
                          }
                          alt="Post Images"
                        />
                      </div>
                      <div className="post-content">
                        <h1 className="title">{this.props.post.page_title}</h1>
                        {/* Post Meta  */}
                        <div className="post-meta-wrapper">
                          <div className="post-meta">
                            <div className="content">
                              <h3 className="post-author-name">
                                {this.props.post.author != null ? (
                                  <Link
                                    className="hover-flip-item-wrapper"
                                    href={
                                      '/author/' + this.props.post.author.path
                                    }
                                  >
                                    <span className="hover-flip-item">
                                      <span
                                        data-text={
                                          this.props.post.author.author_name
                                        }
                                      >
                                        {this.props.post.author.author_name}
                                      </span>
                                    </span>
                                  </Link>
                                ) : null}
                              </h3>
                              <ul className="post-meta-list">
                                <li>
                                  {moment(this.props.post.updated_at).format(
                                    'dddd ll'
                                  )}
                                </li>
                                {this.props.post.total_views > 0 && (
                                  <li>
                                    {this.props.post.total_views} View
                                    {this.props.post.total_views > 1 ? 's' : ''}
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="axil-post-details" style={{ marginTop: '50px' }}>
                {this.props.post.first_peragraph}
                <span style={{ marginTop: '50px' }}>
                  {parse(this.props.post.description)}
                </span>
                {/* Start Author  */}

                {/* End Author  */}
                {/* Start Comment Form Area  */}

                {/* <div
                  className="about-author"
                  style={{ borderTop: '1px solid var(--color-lighter)' }}
                >
                  <div className="media">
                    <div className="thumbnail">
                      <Link href={'/author/' + this.props.post.author.path}>
                        <img
                          src={
                            global.img_link +
                            'images/' +
                            this.props.post.author.upload_image
                          }
                          alt="Author Images"
                          style={{ width: '100px', height: '100px' }}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <div className="author-info">
                        <h5 className="title">
                          <Link
                            className="hover-flip-item-wrapper"
                            href={'/author/' + this.props.post.author.path}
                          >
                            <span className="hover-flip-item">
                              <span
                                data-text={this.props.post.author.author_name}
                              >
                                {this.props.post.author.author_name}
                              </span>
                            </span>
                          </Link>
                        </h5>
                      </div>
                      <div className="content">
                        <p className="b1 description">
                          {this.props.post.author.first_peragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="axil-comment-area">
                  {/* <div className="axil-total-comment-post">
                      <div className="title">
                        <h4 className="mb--0">
                          {this.props.post.comments.length > 0
                            ? this.props.post.comments.length + ' Comments'
                            : null}{' '}
                        </h4>
                      </div>
                      <div
                        className="add-comment-button cerchio"
                        style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
                      >
                        
                      </div>
                    </div> */}

                  <div className="comment-respond">
                    <h4 className="title">Post a comment</h4>
                    <form
                      onSubmit={(e) => {
                        this.handleSubmit(e);
                      }}
                    >
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>{' '}
                        Required fields are marked{' '}
                        <span className="required">*</span>
                      </p>
                      <div className="row row--10">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>
                              Your Name<span className="text-danger">*</span>
                            </label>
                            <input
                              id="name"
                              type="text"
                              value={this.state.name}
                              onChange={(e) => {
                                this.setState({ name: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>
                              Your Email<span className="text-danger">*</span>
                            </label>
                            <input
                              id="email"
                              type="email"
                              value={this.state.email}
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>
                              Comment<span className="text-danger">*</span>
                            </label>
                            <textarea
                              name="message"
                              value={this.state.comment}
                              onChange={(e) => {
                                this.setState({ comment: e.target.value });
                              }}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-end">
                          {this.state.buttonLoading ? (
                            <button
                              value="submit"
                              type="submit"
                              className="axil-button button-rounded btn-primary"
                              disabled
                            >
                              <i className="fa fa-spinner fa-spin"></i>{' '}
                              Posting...
                            </button>
                          ) : (
                            <button
                              name="submit"
                              type="submit"
                              id="submit"
                              className="axil-button button-rounded"
                            >
                              Post Comment
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="axil-comment-area">
                    <h4 className="title">
                      {this.state.comment_data.length > 0
                        ? this.state.comment_data.length +
                          ' Comment' +
                          (this.state.comment_data.length > 1 ? 's' : '')
                        : null}
                    </h4>
                    <ul className="comment-list">
                      {this.state.comment_data.map((comment, index) => {
                        return (
                          <li className="comment">
                            <div className="comment-body">
                              <div className="single-comment">
                                <div className="comment-img">
                                  <img
                                    src="/images/user.webp"
                                    alt={comment.user_name}
                                    style={{ width: '50px', height: '50px' }}
                                  />
                                </div>
                                <div className="comment-inner">
                                  <h6 className="commenter">
                                    <a className="hover-flip-item-wrapper">
                                      <span className="hover-flip-item">
                                        <span data-text={comment.user_name}>
                                          {comment.user_name}
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <div className="comment-meta">
                                    <div className="time-spent">
                                      {moment(comment.updated_at).fromNow()}
                                    </div>
                                    <div className="reply-edit">
                                      <div className="reply">
                                        <a
                                          className="comment-reply-link hover-flip-item-wrapper"
                                          href="#"
                                        >
                                          <span className="hover-flip-item">
                                            {/* <span data-text="Reply">Reply</span> */}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="comment-text">
                                    <p className="b2">{comment.user_comment}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {/* End Comment Form Area  */}
              </div>
            </div>

            <div className="col-lg-4">
              <Sidebar />
            </div>

            <MoreStories />
          </div>
        </div>
      </div>
    );
  }
}

export default Singlepostdata;
