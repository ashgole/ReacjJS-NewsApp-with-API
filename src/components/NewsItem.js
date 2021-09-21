import React, { Component } from "react";

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} height="100" width="100" alt="this is imagee" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItem.defaultProps = {
  imageUrl:
    "https://english.cdn.zeenews.com/sites/default/files/2019/08/07/809502-kriti-sanon-airport.jpg",
  newsUrl:
    "https://english.cdn.zeenews.com/sites/default/files/2019/08/07/809502-kriti-sanon-airport.jpg",
};
