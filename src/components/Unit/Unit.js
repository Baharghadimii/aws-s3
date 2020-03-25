import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function Unit(props) {

  const handleOnChange = (value) => {
    props.onChange(value);
  }
  return (
    <InputGroup
      className="mb-3"
      onChange={e => handleOnChange(e.target.value)}>
      <InputGroup.Prepend>
      </InputGroup.Prepend>
      <FormControl />
      <InputGroup.Append>
        <InputGroup.Text>{props.unitName}</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  )
}

