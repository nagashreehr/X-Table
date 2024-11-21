import React from "react";
import Table from "../components/Table";

export default function List({ data }) {
  return (
    <div>
      <Table data={data} />
    </div>
  );
}
