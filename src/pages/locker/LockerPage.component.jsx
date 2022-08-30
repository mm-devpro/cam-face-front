import React from 'react';
import {Table} from "reactstrap";
import set_color from "../../utils/variables.style.scss"


const LockerPage = () => {

  let locker_data = {
    0: {
      name: "depot",
      access: 1,
      type: "gate",
      lock: false,
      digit: true,
      actions: "actions",
    },
    1: {
      name: "front door",
      access: 1,
      type: "door",
      lock: false,
      digit: false,
      actions: "actions",
    },
    2: {
      name: "customer parking",
      access: 1,
      type: "gate",
      lock: false,
      digit: false,
      actions: "actions",
    },
    3: {
      name: "office front door",
      access: 1,
      type: "door",
      lock: true,
      digit: true,
      actions: "actions",
    },
    4: {
      name: "cashier desk",
      access: 1,
      type: "locker",
      lock: true,
      digit: false,
      actions: "actions",
    },
  }

  return (
    <div>
      <h1>Locker Page</h1>
      <Table className="table">
        <thead>
        <tr>
          <th>Locker Nom</th>
          <th>Lvl d'accessibilité</th>
          <th>Type</th>
          <th>Statut</th>
          <th>Activation digitale</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {
            locker_data && Object.entries(locker_data).map((k,v) => (
                <tr key={k}>
                  <td>{locker_data[v].name}</td>
                  <td>{locker_data[v].access}</td>
                  <td>{locker_data[v].type}</td>
                  <td>{locker_data[v].lock ? <p style={{color:"red"}}>locked</p> : <p style={{color:"green"}}>unlocked</p>}</td>
                  <td>{locker_data[v].digit ? "yes" : "no"}</td>
                  <td>{locker_data[v].actions}</td>
                </tr>
              )
            )
          }
        </tbody>
      </Table>
    </div>
  );
};

export default LockerPage;
