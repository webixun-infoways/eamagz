import Head from 'next/head';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      subject: '',
      buttonLoading: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  handleSubmit = (e) => {
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var mobilePattern = /^[6-9]\d{9}$/;
    e.preventDefault();
    this.setState({ buttonLoading: true });
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.phone === '' ||
      this.state.message === '' ||
      this.state.subject === ''
    ) {
      toast.error('All fields are required');
      this.setState({ buttonLoading: false });
      return;
    } else if (!this.state.email.match(emailPattern)) {
      toast.error('Invalid Email');
      this.setState({ buttonLoading: false });
      return;
    } else if (
      !this.state.phone.match(mobilePattern) ||
      this.state.phone.length < 10
    ) {
      toast.error('Invalid Phone Number');
      this.setState({ buttonLoading: false });
      return;
    } else if (this.state.message.length < 10) {
      toast.error('Message should be atleast 10 characters long');
      this.setState({ buttonLoading: false });
      return;
    } else {
      fetch(global.api_link + 'contact_us', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          contact: this.state.phone,
          msg: this.state.message,
          subject: this.state.subject,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.status) {
            toast.error(json.message);
          } else {
            toast.success('Message Sent Successfully');
            this.setState({
              name: '',
              email: '',
              phone: '',
              message: '',
              subject: '',
            });
          }
          this.setState({ buttonLoading: false });
          return json;
        })
        .catch((error) => console.error(error))
        .finally(() => {});
    }
  };

  render() {
    return (
      <>
        <Head>
          <title>Exclusive Affairs | Contact</title>
          <meta
            name="title"
            content="Exclusive Affairs"
            data-react-helmet="true"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/images/logos/fav.png"
            data-react-helmet="true"
          />
          <meta
            name="description"
            content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
            data-react-helmet="true"
          />
          <meta
            property="og:title"
            content="Exclusive Affairs"
            data-react-helmet="true"
          />
          <meta
            property="og:description"
            content="Exclusive Affairs” Media and Magazines is a leading publication that specialises in helping clients with personal and corporate branding, marketing, hype & shoutouts, influencers collaboration, model & artists management, and social media strategy."
            data-react-helmet="true"
          />
          <meta
            property="og:image"
            content="https://eamagz.com/images/logos/fav.png"
            data-react-helmet="true"
          />
          <meta
            property="og:url"
            content="https://eamagz.com/contact"
            data-react-helmet="true"
          />
          <meta property="og:type" content="article" />
        </Head>
        <div className="axil-post-list-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row contact_us_row">
              <div className="col-md-4 contact_div">
                <div className="axil-about-us">
                  <div className="inner">
                    <h2>Address</h2>
                    <p>
                      93, Rajpur Rd, 3rd Floor, Dehradun, Uttarakhand 248001.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 contact_div">
                <div className="axil-about-us">
                  <div className="inner">
                    <h2>Mail Us</h2>
                    <p className="primary-color">
                      <a href="mailto: info@eamagz.com">info@eamagz.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 contact_div">
                <div className="axil-about-us">
                  <div className="inner">
                    <h2>Contact Us</h2>
                    <p>
                      <a href="tel:+918393001010">+91 8393 001 010</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: '50px',
              }}
            >
              <div className="col-md-12">
                <h4 className="title mb--10">Send Us a Message</h4>
                <p className="b3 mb--30">
                  Your email address will not be published. All the fields are
                  required.
                </p>
              </div>
              <div className="col-md-7">
                <div className="axil-about-us">
                  <div className="axil-section-gapTop axil-contact-form-area p-0">
                    <form
                      id="contact-form"
                      onSubmit={(e) => {
                        this.handleSubmit(e);
                      }}
                      className="axil-contact-form contact-form--1 row"
                    >
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="contact-name">
                            Your Name<span className="text-danger">*</span>
                          </label>
                          <input
                            name="contact-name"
                            id="contact-name"
                            type="text"
                            required
                            value={this.state.name}
                            onChange={(e) => {
                              this.setState({ name: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="contact-phone">
                            Contact Number<span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            name="contact-phone"
                            id="contact-phone"
                            required
                            value={this.state.phone}
                            onChange={(e) => {
                              this.setState({ phone: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="contact-email">
                            Email<span className="text-danger">*</span>
                          </label>
                          <input
                            htmlFor="contact-email"
                            name="contact-email"
                            id="contact-email"
                            type="email"
                            required
                            value={this.state.email}
                            onChange={(e) => {
                              this.setState({ email: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="subject">
                            Subject<span className="text-danger">*</span>
                          </label>
                          <input
                            htmlFor="subject"
                            name="subject"
                            id="subject"
                            type="text"
                            required
                            value={this.state.subject}
                            onChange={(e) => {
                              this.setState({ subject: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="contact-message">
                            Your Message
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            name="contact-message"
                            id="contact-message"
                            rows={5}
                            required
                            value={this.state.message}
                            onChange={(e) => {
                              this.setState({ message: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                        <div className="form-submit">
                          {this.state.buttonLoading ? (
                            <button
                              value="submit"
                              type="submit"
                              className="axil-button button-rounded btn-primary"
                              disabled
                            >
                              <i className="fa fa-spinner fa-spin"></i>{' '}
                              Submitting...
                            </button>
                          ) : (
                            <button
                              value="submit"
                              type="submit"
                              className="axil-button button-rounded btn-primary"
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4185880921377!2d78.055103314411!3d30.339051511551496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092922d88deb89%3A0x6f8b98297d94432c!2sEDUFLUX360%20Multi%20Ventures%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1676697826357!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
