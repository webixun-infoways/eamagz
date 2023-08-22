import Link from 'next/link';
import React, { Component } from 'react';

export class Pagenotfound extends Component {
  render() {
    return (
      <div className="error-area bg_image--4 bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h1 className="title">Page not found!</h1>
                <p>
                  Sorry, but the page you were looking for could not be found.
                </p>
                <div className="back-totop-button cerchio d-inline-block">
                  <span className="hover-flip-item">
                    <Link href="/">
                      <span data-text="Back to Homepage">Back to Homepage</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagenotfound;
