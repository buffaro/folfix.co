import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

function RepairList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("http://localhost:3653/items/cpy");
    const i = await data.json();
    setItems(i);
  };
  const columns = [
    { field: "code", width: 120 },
    { field: "ward" },
    { field: "name", width: 300 },
    { field: "brand", width: 120 },
    { field: "model" },
    { field: "sn" },
    { field: "ref" },
    { field: "caldate", type: "date" },
    { field: "lastupdate", width: 300 },
  ];
  const sortModel = [
    {
      field: "code",
      sort: "asc",
    },
  ];
  return (
    <div
    //  style={{ height: 700, width: "100%" }}
    >
      {/* <DataGrid
        sortModel={sortModel}
        rows={items}
        columns={columns}
      /> */}
    </div>
  );
}

export default RepairList;
