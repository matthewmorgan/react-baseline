import React, {PropTypes} from 'react';

const BooleanInput = ({name, label, toggleStatus, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <input type='checkbox'
               name={name}
               checked={value}
               onChange={toggleStatus}/>
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    </div>
  );

};

BooleanInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  error: PropTypes.string
};


export default BooleanInput;
