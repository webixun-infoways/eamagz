import Head from 'next/head';
import React, { Component } from 'react';

export class Termsandcondtion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
  render() {
    return (
      <>
        <Head>
          <title>Exclusive Affairs | Terms and Conditions</title>
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
            content="https://eamagz.com/termsandcondtion"
            data-react-helmet="true"
          />
          <meta property="og:type" content="article" />
        </Head>
        <div className="axil-privacy-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <div className="inner">
                    <div className="section-title">
                      <h4 className="title">Terms and Condtion</h4>
                    </div>
                    <h3>1 Influencer’s rights The Influencer shall</h3>
                    <ul className="mb--40">
                      <li>1.1 Claim all that is stated in the agreement</li>
                      <li>
                        1.2 Cannot collaborate unless eduflux is not notified
                      </li>
                      <li>
                        1.3 Cannot use the brand name for illegal purposes
                      </li>
                      <li>
                        1.4 Cannot delete or archive any post after the time
                        they are into the campaign without approval 2.Oversight
                        and Review
                      </li>
                    </ul>
                    <h3> 2 Oversight and Review</h3>
                    <ul className="mb--40">
                      <li>
                        2.1 Until the content is not approved by Eduflux
                        Influencer cannot post it
                      </li>
                      <li>
                        2.2 The written consent of company will be acknowledged
                      </li>
                    </ul>
                    <h3>3 Intellectual Property</h3>
                    <ul className="mb--40">
                      <li>
                        3.1 The Intellectual Property Rights in the Deliverables
                        and associated goodwill (other than any Intellectual
                        Property Rights in Third Party Materials and any
                        associated goodwill therein) shall remain the property
                        of the Influencer.
                      </li>
                      <li>
                        3.2 The personal details required by Eduflux will be
                        restricted to the company’s secure data for the
                        influencer’s security
                      </li>
                    </ul>
                    <h3>4 Terms and Termination</h3>
                    <ul className="mb--40">
                      <li>
                        {' '}
                        4.1The agreement will come into effect from the date
                        stated in it and will terminate accordingly
                      </li>
                      <li>
                        4.2 Eduflux have the right to terminate either on the
                        first day of influencer or on a prior notice before 14
                        days
                      </li>
                      <li>
                        4.3 The Influencer can get terminated om grounds of non
                        ethical process.
                      </li>
                      <li>
                        4.4 If the Influencer is found using brand name
                        illegally a termination with strict action will be
                        processed
                      </li>
                    </ul>
                    <h3>5 Consequences of Termination</h3>
                    <ul className="mb--40">
                      <li>
                        5.1 The Influencer have to stop using the brand name
                        with immediate effect
                      </li>
                      <li>
                        5.2 The campaign will terminate the Influencer and all
                        the content will be demolished
                      </li>
                      <li>
                        5.3 The Influencer have to pay the agreed royalty till
                        the last content which Eduflux was involved in
                      </li>
                    </ul>
                    <h3>6 Liabilities</h3>
                    <ul className="mb--40">
                      <li>
                        6.1 Eduflux will not be liable for any loss of data,
                        loss of revenue, loss of profits, loss of business and
                        any loss or damage related to device .
                      </li>
                      <li>
                        6.2 Neither of the party will be liable for the loss
                        after death, accident or any miss happening with the
                        Influencer or the company
                      </li>
                    </ul>
                    <h3>7 Anti Bribery</h3>
                    <ul className="mb--40">
                      <li>
                        {' '}
                        7.1 The comapny and the Influencer should not get
                        indulged in any give and take procedure
                      </li>
                      <li>
                        7.2 This will be marked illegal and the individual
                        caught will be subject to strict actions
                      </li>
                    </ul>
                    <h3> 8 General</h3>
                    <ul className="mb--40">
                      <li>
                        8.1 Influencer have to immediately inform Eduflux if
                        they interact with any other contractors
                      </li>
                      <li>
                        8.2 If the Influencer gets in touch with other campaign
                        without Eduflux consent the company have all rights to
                        terminate him/her
                      </li>
                    </ul>
                    <h3>9 Non dependency campaign</h3>
                    <ul className="mb--40">
                      <li>
                        9.1 The Influencer shall abide to all the terms and
                        conditions displayed in the agreement and shall clear
                        the doubts before signing for it
                      </li>
                      <li>
                        9.2 This contract will be signed by both the parties and
                        Eduflux will work as a company . No particular
                        individual will be responsible instead the comapny will
                        be the subject dealing with the Influencer.
                      </li>
                    </ul>
                    <h3>10 Fees and Revenue</h3>
                    <ul className="mb--40">
                      <li>
                        10.1 First three months will be a free of cost service
                        to the influencers
                      </li>
                      <li>
                        10.2 After the generation of revenue a amount will be
                        charged as per the influencer’s growth
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Termsandcondtion;
