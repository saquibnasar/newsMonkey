import React, { Component } from "react";

export class NewsItem extends Component {
  render(props) {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://c.ndtvimg.com/2021-11/e5avd208_child-vaccine-israel-reuters_625x300_23_November_21.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">
              {!description
                ? "Meta owned instant messaging platform WhatsApp has intr"
                : description}
              ...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
