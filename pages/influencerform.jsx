import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Resizer from 'react-image-file-resizer';
import Head from 'next/head';

export class Enfluncer extends Component {
  state = {
    profileImage: null,
    instagramDemoGraphicImage: null,
    instagramReachScreenshot: null,
    youtubeDemoGraphicImage: null,
    youtubeReachScreenshot: null,
    facebookDemoGraphicImage: null,
    facebookReachScreenshot: null,
    twitterDemoGraphicImage: null,
    twitterReachScreenshot: null,
    name: '',
    contact: '',
    alt_contact: '',
    location: '',
    city: '',
    state: '',
    age: '',
    manage_by: 'self',
    instagram_id: '',
    instagram_followers: '',
    youtube_channel: '',
    youtube_subscriber: '',
    facebook_link: '',
    facebook_followers: '',
    twitter_link: '',
    twitter_followers: '',
    genre: [],
    seek_from: [],
    collab_preference: '',
    about_yourself: '',
    button_loader: false,
    modalView: false,
  };

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  uploadProfileImage = (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          300,
          300,
          'JPEG',
          100,
          0,
          (uri) => {
            this.setState({ profileImage: uri });
          },
          'base64',
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  uploadInstagramDemoGraphicImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        instagramDemoGraphicImage: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  uploadInstagramReachScreenshot = (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          300,
          300,
          'JPEG',
          100,
          0,
          (uri) => {
            this.setState({ instagramReachScreenshot: uri });
          },
          'base64',
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  uploadYoutubeDemoGraphicImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        youtubeDemoGraphicImage: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  uploadYoutubeReachScreenshot = (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          300,
          300,
          'JPEG',
          100,
          0,
          (uri) => {
            this.setState({ youtubeReachScreenshot: uri });
          },
          'base64',
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  uploadFacebookDemoGraphicImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        facebookDemoGraphicImage: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  uploadFacebookReachScreenshot = (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          300,
          300,
          'JPEG',
          100,
          0,
          (uri) => {
            this.setState({ facebookReachScreenshot: uri });
          },
          'base64',
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  uploadTwitterDemoGraphicImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        twitterDemoGraphicImage: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  uploadTwitterReachScreenshot = (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          300,
          300,
          'JPEG',
          100,
          0,
          (uri) => {
            this.setState({ twitterReachScreenshot: uri });
          },
          'base64',
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  toTop = () => {
    window.scrollTo(0, 0);
  };

  verifyForm = () => {
    var emailPattern =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var mobilePattern = /^[6-9]\d{9}$/;
    if (this.state.name == '') {
      toast.error('Please enter name');
      return false;
    } else if (this.state.contact == '') {
      toast.error('Please enter contact number');
      return false;
    } else if (!mobilePattern.test(this.state.contact)) {
      toast.error('Please enter valid contact number');
      return false;
    } else if (this.state.location == '') {
      toast.error('Please enter location');
      return false;
    } else if (this.state.city == '') {
      toast.error('Please enter city');
      return false;
    } else if (this.state.state == '') {
      toast.error('Please enter state');
      return false;
    } else if (this.state.age == '') {
      toast.error('Please enter age');
      return false;
    } else if (this.state.email == '') {
      toast.error('Please enter email');
      return false;
    } else if (!emailPattern.test(this.state.email)) {
      toast.error('Please enter valid email');
      return false;
    } else if (this.state.manage_by == '') {
      toast.error('Please select manage by');
      return false;
    } else if (this.state.genre.length == 0) {
      toast.error('Please select genre');
      return false;
    } else if (this.state.seek_from.length == 0) {
      toast.error('Please select collab preference');
      return false;
    } else if (this.state.about_yourself == '') {
      toast.error('Please enter about yourself');
      return false;
    } else if (this.state.contact.length != 10) {
      toast.error('Please enter valid contact number');
      return false;
    } else if (this.state.collab_preference == '') {
      toast.error('Please choose collab preference');
      return false;
    } else {
      this.setState({
        modalView: true,
      });
    }
  };

  addInfluencer = () => {
    this.setState({
      button_loader: true,
    });
    var data = new FormData();
    data.append('pic', this.state.profileImage);
    // data.append(
    //   'instagram_demo_graphics',
    //   this.state.instagramDemoGraphicImage
    // );
    data.append('instagram_reach', this.state.instagramReachScreenshot);
    // data.append('youtube_demo_graphics', this.state.youtubeDemoGraphicImage);
    data.append('youtube_reach', this.state.youtubeReachScreenshot);
    // data.append('facebook_demo_graphics', this.state.facebookDemoGraphicImage);
    data.append('facebook_reach', this.state.facebookReachScreenshot);
    // data.append('twitter_demo_graphics', this.state.twitterDemoGraphicImage);
    data.append('twitter_reach', this.state.twitterReachScreenshot);
    data.append('name', this.state.name);
    data.append('contact', this.state.contact);
    data.append('alt_contact', this.state.alt_contact);
    data.append('location', this.state.location);
    data.append('city', this.state.city);
    data.append('state', this.state.state);
    data.append('email', this.state.email);
    data.append('age', this.state.age);
    data.append('manage_by', this.state.manage_by);
    data.append('instagram_id', this.state.instagram_id);
    data.append('instagram_followers', this.state.instagram_followers);
    data.append('youtube_channel', this.state.youtube_channel);
    data.append('youtube_subscriber', this.state.youtube_subscriber);
    data.append('facebook_link', this.state.facebook_link);
    data.append('facebook_followers', this.state.facebook_followers);
    data.append('twitter_link', this.state.twitter_link);
    data.append('twitter_followers', this.state.twitter_followers);
    data.append('genre', this.state.genre);
    data.append('collab_preference', this.state.collab_preference);
    data.append('about_yourself', this.state.about_yourself);
    data.append('seek_from', this.state.seek_from);

    fetch(global.api_link + 'add_influencer', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          this.setState({
            profileImage: null,
            // instagramDemoGraphicImage: null;,
            instagramReachScreenshot: null,
            // youtubeDemoGraphicImage: null;,
            youtubeReachScreenshot: null,
            // facebookDemoGraphicImage: null;,
            facebookReachScreenshot: null,
            // twitterDemoGraphicImage: null;,
            twitterReachScreenshot: null,
            name: '',
            contact: '',
            alt_contact: '',
            location: '',
            city: '',
            state: '',
            email: '',
            age: '',
            manage_by: '',
            instagram_id: '',
            instagram_followers: '',
            youtube_channel: '',
            youtube_subscriber: '',
            facebook_link: '',
            facebook_followers: '',
            twitter_link: '',
            twitter_followers: '',
            genre: [],
            collab_preference: '',
            about_yourself: '',
            seek_from: [],
          });
          toast.success('Influencer Added Successfully');
          this.setState({
            button_loader: false,
            modalView: false,
          });
          this.toTop();
        } else {
          toast.error('Something went wrong');
          this.setState({
            button_loader: false,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.setState({
          button_loader: false,
        });
      });
  };

  render() {
    const category = [
      {
        id: 'Mega-Influencers',
        name: 'Mega-Influencers (1 million+ followers)',
      },
      {
        id: 'Macro-Influencers',
        name: 'Macro-Influencers (500K to 1 million followers)',
      },
      {
        id: 'Mid-tier Influencers',
        name: 'Mid-tier Influencers (50K to 500K followers)',
      },
      {
        id: 'Micro-Influencers',
        name: 'Micro-Influencers (10K to 50K followers)',
      },
      {
        id: 'Nano-Influencers',
        name: 'Nano-Influencers (1K to 10K followers)',
      },
    ];

    const genres = [
      {
        id: 'Beauty Influencers',
        name: 'Beauty Influencers - focus on makeup, skincare, and hair care products and techniques.',
      },
      {
        id: 'Fashion Influencers',
        name: 'Fashion Influencers - showcase outfits, accessories, and style tips.',
      },
      {
        id: 'Fitness Influencers',
        name: 'Fitness Influencers - promote health and wellness through exercise routines, diet plans, and motivational content.',
      },
      {
        id: 'Travel Influencers',
        name: 'Travel Influencers - share experiences and recommendations for travel destinations, accommodations, and activities.',
      },
      {
        id: 'Food Influencers',
        name: 'Food Influencers - create and share recipes, restaurant reviews, and culinary tips.',
      },
      {
        id: 'Parenting Influencers',
        name: 'Parenting Influencers - provide tips and advice on parenting, family life, and child care.',
      },
      {
        id: 'Lifestyle Influencers',
        name: 'Lifestyle Influencers - offer a broad range of content across various topics, including fashion, beauty, food, travel, fitness, and more.',
      },
      {
        id: 'Tech Influencers',
        name: 'Tech Influencers - showcase and review the latest technology products and gadgets.',
      },
      {
        id: 'Gaming Influencers',
        name: 'Gaming Influencers - focus on video games and streaming content related to the gaming industry.',
      },
      {
        id: 'DIY Influencers',
        name: 'DIY Influencers - provide tutorials and tips on crafting, home decor, and other do-it-yourself projects.',
      },
      {
        id: 'Music Influencers',
        name: 'Music Influencers - share music reviews, playlists, and concert experiences.',
      },
      {
        id: 'comedyInfluencers',
        name: 'Comedy Influencers - create humorous content such as memes, skits, and parodies.',
      },
      {
        id: 'Education Influencers',
        name: 'Education Influencers - provide educational content and tips on various subjects such as language learning, study skills, and academic success.',
      },
      {
        id: 'Business Influencers',
        name: 'Business Influencers - offer advice and insight on entrepreneurship, marketing, and professional development.',
      },
      {
        id: 'Sports Influencers',
        name: 'Sports Influencers - showcase and discuss sports-related content, including athlete interviews, highlights, and predictions.',
      },
      {
        id: 'Other',
        name: 'Other',
      },
    ];

    const seekAssociation = [
      {
        id: 'Instagram Growth',
        name: 'Instagram Growth',
      },
      {
        id: 'Branding & Profiling',
        name: 'Branding & Profiling',
      },
      {
        id: 'Paid Projects',
        name: 'Paid Projects',
      },
      {
        id: 'Barter Projects',
        name: 'Barter Projects',
      },
      {
        id: 'Modelling Projects',
        name: 'Modelling Projects',
      },
      {
        id: 'Invite to Special Creators Events',
        name: 'Invite to Special Creators Events',
      },
    ];

    return (
      <>
        <Head>
          <title>Exclusive Affairs | Influencer Form</title>
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
            content="https://eamagz.com/influencerform"
            data-react-helmet="true"
          />
          <meta property="og:type" content="article" />
        </Head>
        <div className="axil-post-list-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="axil-about-us">
                  <div className="inner">
                    <h2>Influencer Form</h2>
                  </div>
                  <div className="axil-section-gapTop axil-contact-form-area">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="col form-group">
                              <label>
                                Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder
                                required
                                value={this.state.name}
                                onChange={(e) =>
                                  this.setState({ name: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="col form-group">
                              <label>
                                Contact No<span className="text-danger">*</span>
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder=" "
                                maxLength={10}
                                required
                                value={this.state.contact}
                                onChange={(e) =>
                                  this.setState({ contact: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="col form-group">
                              <label>Alternate Contact No</label>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder=" "
                                maxLength={10}
                                value={this.state.alt_contact}
                                onChange={(e) =>
                                  this.setState({ alt_contact: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="col form-group">
                              <label>
                                Location<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" "
                                required
                                value={this.state.location}
                                onChange={(e) =>
                                  this.setState({ location: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="col form-group">
                              <label>
                                City<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" "
                                required
                                value={this.state.city}
                                onChange={(e) =>
                                  this.setState({ city: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="col form-group">
                              <label>
                                State<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" "
                                required
                                value={this.state.state}
                                onChange={(e) =>
                                  this.setState({ state: e.target.value })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="col form-group">
                          <label htmlFor="myfile">
                            Profile Image
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type={'file'}
                            accept=".png, .jpg, .jpeg,.svg,.webp"
                            className="upload"
                            multiple
                            onChange={(e) => {
                              this.uploadProfileImage(e);
                            }}
                          />
                          {this.state.profileImage && (
                            <>
                              <img
                                src={this.state.profileImage}
                                className="influencerformImage"
                              />
                              <p
                                onClick={() => {
                                  this.setState({
                                    profileImage: null,
                                  });
                                }}
                              >
                                Remove
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>
                            Email<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                            required
                            value={this.state.email}
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>
                            Age<span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder=" "
                            required
                            value={this.state.age}
                            onChange={(e) =>
                              this.setState({ age: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>
                            Accounts Managed By
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            onChange={(e) => {
                              this.setState({ manage_by: e.target.value });
                            }}
                            value={this.state.manage_by}
                          >
                            <option value="self">Self</option>
                            <option value="agency">Agency</option>
                            <option value="parent">Parent</option>
                          </select>
                        </div>
                      </div>
                      {/* instagram */}
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Instagram Id</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            value={this.state.instagram_id}
                            onChange={(e) =>
                              this.setState({ instagram_id: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Number Of Followers</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder
                            value={this.state.instagram_followers}
                            onChange={(e) =>
                              this.setState({
                                instagram_followers: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadInstagramDemoGraphicImage(e);
                        }}
                      />
                      {this.state.instagramDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.instagramDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                instagramDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                      <div className="col-md-4">
                        <div className="col form-group">
                          <form encType="multipart/form-data">
                            <label htmlFor="myfile">
                              Instagram Reach Screenshot
                            </label>
                            <input
                              type={'file'}
                              accept=".png, .jpg, .jpeg,.svg,.webp"
                              className="upload"
                              multiple
                              onChange={(e) => {
                                this.uploadInstagramReachScreenshot(e);
                              }}
                            />
                            {this.state.instagramReachScreenshot && (
                              <>
                                <img
                                  src={this.state.instagramReachScreenshot}
                                  className="influencerformImage"
                                />
                                <p
                                  onClick={() => {
                                    this.setState({
                                      instagramReachScreenshot: null,
                                    });
                                  }}
                                >
                                  Remove
                                </p>
                              </>
                            )}
                          </form>
                        </div>
                      </div>

                      {/* youtube */}

                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Youtube Channel Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            value={this.state.youtube_channel}
                            onChange={(e) =>
                              this.setState({ youtube_channel: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Number Of Subscribers</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder
                            value={this.state.youtube_subscriber}
                            onChange={(e) =>
                              this.setState({
                                youtube_subscriber: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadYoutubeDemoGraphicImage(e);
                        }}
                      />
                      {this.state.youtubeDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.youtubeDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                youtubeDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                      <div className="col-md-4">
                        <div className="col form-group">
                          <form encType="multipart/form-data">
                            <label htmlFor="myfile">
                              Youtube Reach Screenshot
                            </label>
                            <input
                              type={'file'}
                              accept=".png, .jpg, .jpeg,.svg,.webp"
                              className="upload"
                              multiple
                              onChange={(e) => {
                                this.uploadYoutubeReachScreenshot(e);
                              }}
                            />
                            {this.state.youtubeReachScreenshot && (
                              <>
                                <img
                                  src={this.state.youtubeReachScreenshot}
                                  className="influencerformImage"
                                />
                                <p
                                  onClick={() => {
                                    this.setState({
                                      youtubeReachScreenshot: null,
                                    });
                                  }}
                                >
                                  Remove
                                </p>
                              </>
                            )}
                          </form>
                        </div>
                      </div>
                      {/* facebook */}

                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Facebook Page / Profile</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            value={this.state.facebook_link}
                            onChange={(e) =>
                              this.setState({ facebook_link: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Number Of Likes/Followers</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder
                            value={this.state.facebook_followers}
                            onChange={(e) =>
                              this.setState({
                                facebook_followers: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadFacebookDemoGraphicImage(e);
                        }}
                      />
                      {this.state.facebookDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.facebookDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                facebookDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                      <div className="col-md-4">
                        <div className="col form-group">
                          <form encType="multipart/form-data">
                            <label htmlFor="myfile">
                              Facebook Reach Screenshot
                            </label>
                            <input
                              type={'file'}
                              accept=".png, .jpg, .jpeg,.svg,.webp"
                              className="upload"
                              multiple
                              onChange={(e) => {
                                this.uploadFacebookReachScreenshot(e);
                              }}
                            />
                            {this.state.facebookReachScreenshot && (
                              <>
                                <img
                                  src={this.state.facebookReachScreenshot}
                                  className="influencerformImage"
                                />
                                <p
                                  onClick={() => {
                                    this.setState({
                                      facebookReachScreenshot: null,
                                    });
                                  }}
                                >
                                  Remove
                                </p>
                              </>
                            )}
                          </form>
                        </div>
                      </div>
                      {/* twitter */}

                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Twitter Id</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            value={this.state.twitter_link}
                            onChange={(e) =>
                              this.setState({ twitter_link: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="col form-group">
                          <label>Number Of Followers</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder
                            value={this.state.twitter_followers}
                            onChange={(e) =>
                              this.setState({
                                twitter_followers: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadTwitterDemoGraphicImage(e);
                        }}
                      />
                      {this.state.twitterDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.twitterDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                twitterDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                      <div className="col-md-4">
                        <div className="col form-group">
                          <form encType="multipart/form-data">
                            <label htmlFor="myfile">
                              Twitter Reach Screenshot
                            </label>
                            <input
                              type={'file'}
                              accept=".png, .jpg, .jpeg,.svg,.webp"
                              className="upload"
                              multiple
                              onChange={(e) => {
                                this.uploadTwitterReachScreenshot(e);
                              }}
                            />
                            {this.state.twitterReachScreenshot && (
                              <>
                                <img
                                  src={this.state.twitterReachScreenshot}
                                  className="influencerformImage"
                                />
                                <p
                                  onClick={() => {
                                    this.setState({
                                      twitterReachScreenshot: null,
                                    });
                                  }}
                                >
                                  Remove
                                </p>
                              </>
                            )}
                          </form>
                        </div>
                      </div>

                      {/* your genre */}

                      <div className="col-md-12">
                        <div className="col form-group">
                          <label>
                            Define Your Genre
                            <span className="text-danger">*</span>
                          </label>
                          {genres.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="d-flex align-items-start"
                              >
                                <input
                                  type="checkbox"
                                  id={item.id}
                                  name={item.id}
                                  checked={this.state.genre.includes(item.id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      this.setState({
                                        genre: [
                                          ...this.state.genre,
                                          e.target.id,
                                        ],
                                      });
                                    } else if (
                                      e.target.checked.name === 'Other'
                                    ) {
                                      this.setState({
                                        genre: [],
                                      });
                                    } else {
                                      this.setState({
                                        genre: this.state.genre.filter(
                                          (item) => item !== e.target.id
                                        ),
                                      });
                                    }
                                    console.log(this.state.genre);
                                  }}
                                />
                                <label for={item.id}>{item.name}</label>
                              </div>
                            );
                          })}
                        </div>
                        {/* if clicked on other, open a textbox */}
                        {this.state.genre.includes('Other') && (
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Other"
                              value={this.state.genre}
                              onChange={(e) =>
                                this.setState({ genre: e.target.value })
                              }
                            />
                          </div>
                        )}
                      </div>

                      {/* your seek from */}

                      <div className="col-md-12">
                        <div className="col form-group">
                          <label>
                            What you Seek from our Association
                            <span className="text-danger">*</span>
                          </label>
                          {seekAssociation.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="d-flex align-items-start"
                              >
                                <input
                                  type="checkbox"
                                  id={item.id}
                                  name={item.id}
                                  checked={this.state.seek_from.includes(
                                    item.id
                                  )}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      this.setState({
                                        seek_from: [
                                          ...this.state.seek_from,
                                          e.target.id,
                                        ],
                                      });
                                    } else {
                                      this.setState({
                                        seek_from: this.state.seek_from.filter(
                                          (item) => item !== e.target.id
                                        ),
                                      });
                                    }
                                  }}
                                />
                                <label for={item.id}>{item.name}</label>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* your Category */}
                      <div className="col-md-12">
                        <div className="col form-group">
                          <label>
                            Define Your Category
                            <span className="text-danger">*</span>
                          </label>
                          {category.map((item, index) => {
                            return (
                              // make radio button
                              <div
                                key={index}
                                className="d-flex align-items-start"
                              >
                                <input
                                  type="radio"
                                  id={item.id}
                                  name="category"
                                  onChange={(e) => {
                                    this.setState({
                                      collab_preference: e.target.id,
                                    });
                                  }}
                                  value={this.state.collab_preference}
                                />
                                <label for={item.id}>{item.name}</label>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* etxtarea */}
                      <div className="col-md-12">
                        <div className="col form-group">
                          <label>
                            Write a brief bio about yourself
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            value={this.state.about_yourself}
                            onChange={(e) =>
                              this.setState({ about_yourself: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-12 d-flex justify-content-end">
                        <div className="form-submit">
                          {/* {this.state.button_loader ? (
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
                              name="submit"
                              type="submit"
                              id="submit"
                              className="axil-button button-rounded btn-primary"
                              onClick={() => this.addInfluencer()}
                            >
                              Submit
                            </button>
                          )} */}
                          <button
                            name="submit"
                            type="submit"
                            id="submit"
                            className="axil-button button-rounded btn-primary"
                            onClick={() => this.verifyForm()}
                          >
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={this.state.modalView}
          onClose={() => {
            this.setState({
              modalView: false,
            });
          }}
          center
          classNames={{
            modal: 'new_modal_styling new_modal_styling2',
          }}
          focusTrapped={false}
          showCloseIcon={true}
        >
          <div className="axil-post-list-area axil-section-gap bg-color-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-xl-12">
                  <div className="axil-about-us">
                    <div className="inner">
                      <h2>Verify Details Filled in Influencer Form</h2>
                    </div>
                    <div className="axil-section-gapTop axil-contact-form-area">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="col form-group">
                                <label>
                                  Name <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder
                                  required
                                  value={this.state.name}
                                  onChange={(e) =>
                                    this.setState({ name: e.target.value })
                                  }
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="col form-group">
                                <label>
                                  Contact No
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder=" "
                                  maxLength={10}
                                  required
                                  value={this.state.contact}
                                  onChange={(e) =>
                                    this.setState({ contact: e.target.value })
                                  }
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="col form-group">
                                <label>Alternate Contact No</label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder=" "
                                  maxLength={10}
                                  value={this.state.alt_contact}
                                  onChange={(e) =>
                                    this.setState({
                                      alt_contact: e.target.value,
                                    })
                                  }
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="col form-group">
                                <label>
                                  Location<span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=" "
                                  required
                                  value={this.state.location}
                                  onChange={(e) =>
                                    this.setState({ location: e.target.value })
                                  }
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="col form-group">
                                <label>
                                  City<span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=" "
                                  required
                                  value={this.state.city}
                                  onChange={(e) =>
                                    this.setState({ city: e.target.value })
                                  }
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="col form-group">
                                <label>
                                  State<span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=" "
                                  required
                                  value={this.state.state}
                                  onChange={(e) =>
                                    this.setState({ state: e.target.value })
                                  }
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="col form-group">
                            <label htmlFor="myfile">
                              Profile Image
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type={'file'}
                              accept=".png, .jpg, .jpeg,.svg,.webp"
                              className="upload"
                              multiple
                              onChange={(e) => {
                                this.uploadProfileImage(e);
                              }}
                              disabled
                            />
                            {this.state.profileImage && (
                              <>
                                <img
                                  src={this.state.profileImage}
                                  className="influencerformImage"
                                />
                              </>
                            )}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>
                              Email<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" "
                              required
                              value={this.state.email}
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>
                              Age<span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder=" "
                              required
                              value={this.state.age}
                              onChange={(e) =>
                                this.setState({ age: e.target.value })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>
                              Accounts Managed By
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              onChange={(e) => {
                                this.setState({ manage_by: e.target.value });
                              }}
                              value={this.state.manage_by}
                              required
                              disabled
                            >
                              <option value="self">Self</option>
                              <option value="agency">Agency</option>
                              <option value="parent">Parent</option>
                            </select>
                          </div>
                        </div>
                        {/* instagram */}
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Instagram Id</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
                              value={this.state.instagram_id}
                              onChange={(e) =>
                                this.setState({ instagram_id: e.target.value })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Number Of Followers</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder
                              value={this.state.instagram_followers}
                              onChange={(e) =>
                                this.setState({
                                  instagram_followers: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadInstagramDemoGraphicImage(e);
                        }}
                      />
                      {this.state.instagramDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.instagramDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                instagramDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                        <div className="col-md-4">
                          <div className="col form-group">
                            <form encType="multipart/form-data">
                              <label htmlFor="myfile">
                                Instagram Reach Screenshot
                              </label>
                              {this.state.instagramReachScreenshot ? (
                                <p className="text-success">Uploaded</p>
                              ) : (
                                <p className="text-danger">Not Uploaded</p>
                              )}
                            </form>
                          </div>
                        </div>

                        {/* youtube */}

                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Youtube Channel Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
                              value={this.state.youtube_channel}
                              onChange={(e) =>
                                this.setState({
                                  youtube_channel: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Number Of Subscribers</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder
                              value={this.state.youtube_subscriber}
                              onChange={(e) =>
                                this.setState({
                                  youtube_subscriber: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadYoutubeDemoGraphicImage(e);
                        }}
                      />
                      {this.state.youtubeDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.youtubeDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                youtubeDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                        <div className="col-md-4">
                          <div className="col form-group">
                            <form encType="multipart/form-data">
                              <label htmlFor="myfile">
                                Youtube Reach Screenshot
                              </label>
                              {this.state.youtubeReachScreenshot ? (
                                <p className="text-success">Uploaded</p>
                              ) : (
                                <p className="text-danger">Not Uploaded</p>
                              )}
                            </form>
                          </div>
                        </div>
                        {/* facebook */}

                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Facebook Page / Profile</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
                              value={this.state.facebook_link}
                              onChange={(e) =>
                                this.setState({ facebook_link: e.target.value })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Number Of Likes/Followers</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder
                              value={this.state.facebook_followers}
                              onChange={(e) =>
                                this.setState({
                                  facebook_followers: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadFacebookDemoGraphicImage(e);
                        }}
                      />
                      {this.state.facebookDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.facebookDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                facebookDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                        <div className="col-md-4">
                          <div className="col form-group">
                            <form encType="multipart/form-data">
                              <label htmlFor="myfile">
                                Facebook Reach Screenshot
                              </label>
                              {this.state.facebookReachScreenshot != null ? (
                                <p className="text-success">Uploaded</p>
                              ) : (
                                <p className="text-danger">Not Uploaded</p>
                              )}
                            </form>
                          </div>
                        </div>
                        {/* twitter */}

                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Twitter Id</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
                              value={this.state.twitter_link}
                              onChange={(e) =>
                                this.setState({ twitter_link: e.target.value })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col form-group">
                            <label>Number Of Followers</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder
                              value={this.state.twitter_followers}
                              onChange={(e) =>
                                this.setState({
                                  twitter_followers: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                    <div className="col form-group">
                      <label htmlFor="myfile">Demo Graphic Screenshot</label>
                      <input
                        type={'file'}
                        accept=".png, .jpg, .jpeg,.svg,.webp"
                        className="upload"
                        multiple
                        onChange={(e) => {
                          this.uploadTwitterDemoGraphicImage(e);
                        }}
                      />
                      {this.state.twitterDemoGraphicImage && (
                        <>
                          <img
                            src={this.state.twitterDemoGraphicImage}
                            className="influencerformImage"
                          />
                          <p
                            onClick={() => {
                              this.setState({
                                twitterDemoGraphicImage: null,
                              });
                            }}
                          >
                            Remove
                          </p>
                        </>
                      )}
                    </div>
                  </div> */}
                        <div className="col-md-4">
                          <div className="col form-group">
                            <form encType="multipart/form-data">
                              <label htmlFor="myfile">
                                Twitter Reach Screenshot
                              </label>
                              {this.state.twitterReachScreenshot ? (
                                <p className="text-success">Uploaded</p>
                              ) : (
                                <p className="text-danger">Not Uploaded</p>
                              )}
                            </form>
                          </div>
                        </div>

                        {/* your genre */}

                        <div className="col-md-12">
                          <div className="col form-group">
                            <label>
                              Define Your Genre
                              <span className="text-danger">*</span>
                            </label>

                            {this.state.genre.length > 0 &&
                              this.state.genre.map((item, index) => {
                                return (
                                  <span
                                    style={{
                                      margin: '5px',
                                    }}
                                  >
                                    {item},
                                  </span>
                                );
                              })}
                          </div>
                        </div>

                        {/* your seek from */}

                        <div className="col-md-12">
                          <div className="col form-group">
                            <label>
                              What do you seek from our Association?
                              <span className="text-danger">*</span>
                            </label>

                            {this.state.seek_from.length != 0 &&
                              this.state.seek_from.map((item, index) => {
                                return (
                                  <span
                                    style={{
                                      margin: '5px',
                                    }}
                                  >
                                    {item},
                                  </span>
                                );
                              })}
                          </div>
                        </div>

                        {/* your Category */}
                        <div className="col-md-12">
                          <div className="col form-group">
                            <label>
                              Define Your Category
                              <span className="text-danger">*</span>
                            </label>
                            {this.state.collab_preference.length != 0 && (
                              <span
                                style={{
                                  margin: '5px',
                                }}
                              >
                                {this.state.collab_preference}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* etxtarea */}
                        <div className="col-md-12">
                          <div className="col form-group">
                            <label>
                              Write a brief bio about yourself
                              <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows={5}
                              value={this.state.about_yourself}
                              onChange={(e) =>
                                this.setState({
                                  about_yourself: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-12 d-flex justify-content-end">
                          <div className="form-submit">
                            {this.state.button_loader ? (
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
                                name="submit"
                                type="submit"
                                id="submit"
                                className="axil-button button-rounded btn-primary"
                                onClick={() => this.addInfluencer()}
                              >
                                Submit
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Enfluncer;
