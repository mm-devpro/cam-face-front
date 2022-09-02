import React from "react";
import {Table} from 'reactstrap';
import {HiOutlinePencil} from 'react-icons/hi'
import {CgList} from "react-icons/cg"
import {TiDeleteOutline} from "react-icons/ti"

import './WorkerPage.styles.scss'

const WorkerPage = () => {
  return (
    <div className="scrollable">
      Worker Page
      <Table>
        <thead>
          <tr>
            <th>Active</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Username</th>
            <th>date de naissance</th>
            <th>group</th>
            <th>accès</th>
            <th>role</th>
            <th>img</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yes</td>
            <td>Ezechiel</td>
            <td>Sposito</td>
            <td>Le S</td>
            <td>19/07/1995</td>
            <td>Family Member</td>
            <td>3</td>
            <td>user</td>
            <td>
              <img src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000" alt="homme" width="50px" height="50px"/>
            </td>
            <td className="table-actions">
              <CgList size="1.5em"/>
              <HiOutlinePencil size="1.5em"/>
              <TiDeleteOutline color="red" size="1.5em"/>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default WorkerPage
