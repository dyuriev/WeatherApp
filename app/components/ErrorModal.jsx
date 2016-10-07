import React from 'react';
import ReactDOM  from 'react-dom';
import ReactDOMServer  from 'react-dom/server';

let ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error',
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    let {title, message} = this.props;

    let popupMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <div>
          <button className="button hollow" data-close="">Okay</button>
        </div>
      </div>
    );

    let $popup = $(ReactDOMServer.renderToString(popupMarkup));
    $(ReactDOM.findDOMNode(this)).html($popup);

    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
