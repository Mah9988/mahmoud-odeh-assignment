import React from "react";
import "./DataTable.scss";

const DataTableComponent = ({ data, handlerReset }) => {
  return (
    <div className="table-data">
      <div className="table-data-items">
        <div className="table-data-row">
          {Object.entries(data).map(([key, value]) => (
            <div className="input-field" key={key}>
              <label htmlFor={key}>{key}</label>
              <input type="text" name={key} readOnly value={value} />
            </div>
          ))}
        </div>
      </div>
      <div className="reset-btn">
        <button type="button" onClick={handlerReset}>
          Scan another card
        </button>
      </div>
    </div>
  );
};
export default DataTableComponent;
