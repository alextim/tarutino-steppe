/* eslint-disable import/no-duplicates */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const iconStyle = {
  marginRight: '1rem',
  width: '3rem',
  height: '3rem',
};

const wrapperStyle = {
  display: 'flex',
};

const Message = ({ type, children }) => {
  let icon = null;
  switch (type) {
    case 'error':
      icon = <FaExclamationTriangle sx={{ ...iconStyle, color: 'red' }} />;
      break;
    case 'success':
      icon = <FaCheckCircle sx={{ ...iconStyle, color: 'green' }} />;
      break;
    default:
      break;
  }

  return (
    <div sx={wrapperStyle}>
      {icon}
      <div>{children}</div>
    </div>
  );
};

export default Message;
