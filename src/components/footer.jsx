import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <hr className="my-2" />
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="small text-muted">
                {" "}
                ©Lazar. {new Date().getFullYear()} . All rights reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
