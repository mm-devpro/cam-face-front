import React from "react";
import {Table} from 'reactstrap';

import './WorkerPage.styles.scss'

const WorkerPage = () => {
  return (
    <>
      Worker Page
      <Table className="table">
        <thead>
          <tr>
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
            <td>actions</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default WorkerPage
