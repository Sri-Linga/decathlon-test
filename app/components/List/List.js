import React, { Component } from 'react';
import './style.scss';
import { Table } from 'reactstrap'

class List extends Component {
  componentDidMount(){
    this.props.setListData()
  }

  render(){
    return (
      <div className="list-wrapper">
      <Table>
        <thead>
          <tr>
            <th>Place</th>
            <th>User Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>No. of Activities</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((e, i) => {
              return (
                <tr key={i}>
                  <td className="list-item">
                    {e.properties.name}
                  </td>
                  <td className="list-item">
                    {e.properties.user.first_name + " " + e.properties.user.last_name}
                  </td>
                  <td className="list-item">
                  {e.properties.address_components.address ? e.properties.address_components.address:'N/A'}
                  </td>
                  <td className="list-item">
                    {e.properties.contact_details.phone ? e.properties.contact_details.phone : 'N/A'}
                  </td>
                  <td className="list-item">
                    {e.properties.activities.length}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
    )
  }
}

export default List;
