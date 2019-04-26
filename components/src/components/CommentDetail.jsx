import React from 'react';

class CommentDetail extends React.Component {
  
  render() {

    return(
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.props.image}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
          <span className="date">{this.props.date}</span>
        </div>
          <div className="text">
              {this.props.text}
          </div>
        </div>
		  </div>
    );
  }
}

export default CommentDetail;