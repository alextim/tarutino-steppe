/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { jsx, Input as Inp, Textarea, Label } from 'theme-ui';

const styleControlWrap = {
  display: 'flex',
  flexDirection: 'column',
  mb: '1rem',
};

const styleError = {
  color: 'error',
};

const Input = ({ invalid, ...props }) => (
  <Inp
    {...props}
    sx={{
      borderColor: `${invalid ? 'error' : 'body'}`,
      fontFamily: 'body',
    }}
  />
);

const TextArea = ({ invalid, ...props }) => (
  <Textarea
    {...props}
    sx={{
      borderColor: `${invalid ? 'error' : 'body'}`,
      fontFamily: 'body',
    }}
  />
);

const FormLabel = ({ required, ...props }) => (
  <Label
    {...props}
    sx={{
      mb: '0.25rem',
      '&::after': {
        content: `"${required ? '*' : ''}"`,
        color: 'brand.main',
        ml: '0.25rem',
      },
    }}
  />
);

const InputControl = ({ name, label, type, value, required, error, onChange, ...props }) => (
  <div sx={styleControlWrap}>
    {label && (
      <FormLabel htmlFor={name} required={required}>
        {label}
      </FormLabel>
    )}
    <Input
      id={name}
      name={name}
      type={type || 'text'}
      required={required}
      value={value}
      invalid={error}
      onChange={onChange}
      {...props}
    />
    {error && <div sx={styleError}>{error}</div>}
  </div>
);

const TextAreaControl = ({ name, label, value, required, error, onChange, ...props }) => (
  <div sx={styleControlWrap}>
    {label && (
      <FormLabel htmlFor={name} isrequired={required}>
        {label}
      </FormLabel>
    )}
    <TextArea
      id={name}
      name={name}
      required={required}
      value={value}
      invalid={error}
      onChange={onChange}
      rows="10"
      {...props}
    />
    {error && <div sx={styleError}>{error}</div>}
  </div>
);

export { TextAreaControl };
export default InputControl;
