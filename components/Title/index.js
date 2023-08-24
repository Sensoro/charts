import React from 'react';
var Title = function Title(_ref) {
  var text = _ref.text;
  return text ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      marginBottom: 0
    }
  }, text) : null;
};
export default Title;