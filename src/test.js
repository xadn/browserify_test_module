var React = require('react'),
    DetailsEditor = require('./details_editor');

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    React.renderComponent(DetailsEditor({name: 'Andy'}), document.body);
  }
};
