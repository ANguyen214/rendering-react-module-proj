import React from "react";
import "./ActivityList.css";
import Activity from "./Activity.js"

function ActivityList({activities}) {
const rows = activities.map(({time, description}, index) => (
  <tr key={index}>
    <td>{time}</td>
    <td>{description}</td>
  </tr>
));

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ActivityList;
