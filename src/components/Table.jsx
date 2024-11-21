import React from "react";

export default function Table({ data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Acticle</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((ele, idx) => (
              <tr key={idx}>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
