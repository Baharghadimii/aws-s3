import React, { useState } from 'react';
import './Regions.scss';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function CountriesDropDown() {
  const [title, setTitle] = useState('US East (N.Virginia) - us-east-1');
  const changeTitle = (value) => {
    if (value) {
      setTitle(value);
    }
  }
  return (
    <div className='drop'>
      <DropdownButton
        id="dropdown-item-button"
        title={title}
        onClick={e => changeTitle(e.target.value)}>
        <Dropdown.Item
          as="button"
          value="US East (N.Virginia) - us-east-1">US East (N.Virginia) - us-east-1</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="US West (Oregon) - us-west-2">US West (Oregon) - us-west-2</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="US West (California) - us-west-1">US West (California) - us-west-1</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="EU (Irland) - eu-west-1">EU (Irland) - eu-west-1</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="EU (Frankfurt) - eu-central-1">EU (Frankfurt) - eu-central-1</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="Asia Pasific (Singapore) - ap-southeast-1">Asia Pasific (Singapore) - ap-southeast-1</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="Asia Pasific (Tokyo) - ap-northeast-1">Asia Pasific (Tokyo) - ap-northeast-1</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="Asia Pasific (Sydney) - ap-southeast-2">Asia Pasific (Sydney) - ap-southeast-2</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="Asia Pasific (Seoul) - ap-northeast-2">Asia Pasific (Seoul) - ap-northeast-2</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="Asia Pasific (Mumbai) - ap-south-1">Asia Pasific (Mumbai) - ap-south-1</Dropdown.Item>
        <Dropdown.Item
          as="button"
          value="South America (Sao Paulo) - sa-east-1">South America (Sao Paulo) - sa-east-1</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}
