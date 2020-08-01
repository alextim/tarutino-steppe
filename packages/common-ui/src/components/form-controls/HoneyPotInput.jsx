/** @jsx jsx */
import { jsx } from 'theme-ui';

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: 0,
  width: 0,
  opacity: 0,
  zIndex: -1,
};

const name = 'email';

const HoneyPotInput = ({ value, onChange }) => (
  <label htmlFor={name} sx={style}>
    email
    <input
      sx={style}
      id={name}
      type={name}
      name={name}
      tabIndex="-1"
      autoComplete="nope"
      placeholder={name}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default HoneyPotInput;
