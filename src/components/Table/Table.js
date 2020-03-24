import React from 'react';
import './Table.scss';
import { Table } from 'react-bootstrap';
import Unit from '../Unit/Unit';

export default function PriceList() {

  const changePrice = (value) => {
    console.log(value)
  }
  return (
    <Table id="table" responsive="sm" bordered>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Unit</th>
          <th>S3 Standard</th>
          <th>S3 Infrequent Access</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="title">Data Size in TB</td>
          <td><Unit unitName={"TB"} onChange={changePrice} /></td>
          <td>$ 0.0</td>
          <td>$ 0.0</td>
        </tr>
        <tr>
          <td id="title">No. of POST/PUT requests in Millions</td>
          <td><Unit unitName={"Million"} onChange={changePrice} /></td>
          <td>$ 0.0</td>
          <td>$ 0.0</td>
        </tr>
        <tr>
          <td id="title">No. of GET requests in Millions</td>
          <td><Unit unitName={"Million"} onChange={changePrice} /></td>
          <td>$ 0.0</td>
          <td>$ 0.0</td>
        </tr>
        <tr>
          <td id="title">S3 IA Data transfer cost in GB</td>
          <td><Unit unitName={"GB"} onChange={changePrice} /></td>
          <td>$ 0.0</td>
          <td>$ 0.0</td>
        </tr>
        <tr id="total-row">
          <td id="title">Totals</td>
          <td>Savings: $ 0.0</td>
          <td>$ 0.0</td>
          <td>$ 0.0</td>
        </tr>
      </tbody>
    </Table>
  )
}

