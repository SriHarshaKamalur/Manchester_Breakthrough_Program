import React, { useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import Chart from "react-apexcharts";
import "./DynamicTable.css";

const DynamicTable = () => {
  const [filterInput, setFilterInput] = useState("");

  // Static data for the table
  const rawData = useMemo(
    () => [
      { advisor: "Karen", class: "Axolots", totalPoints: 100, avgPoints: 10 },
      { advisor: "Linh", class: "Axolots", totalPoints: 0, avgPoints: 0 },
      { advisor: "Lorissa", class: "Axolots", totalPoints: 160, avgPoints: 20 },
      { advisor: "Carl/Tu Anh", class: "Cheetahs", totalPoints: 270, avgPoints: 30 },
      { advisor: "Kaley", class: "Cheetahs", totalPoints: 260, avgPoints: 33 },
      { advisor: "Kelsey/Mara", class: "Cheetahs", totalPoints: 50, avgPoints: 13 },
      { advisor: "Lajla/Megan", class: "Cheetahs", totalPoints: 400, avgPoints: 44 },
      { advisor: "Kayla/Ricky", class: "Grizzlies", totalPoints: 300, avgPoints: 38 },
      { advisor: "Kenyang", class: "Grizzlies", totalPoints: 730, avgPoints: 122 },
      { advisor: "Valerie", class: "Grizzlies", totalPoints: 270, avgPoints: 45 },
      { advisor: "Ethan", class: "Sphinxes", totalPoints: 310, avgPoints: 39 },
      { advisor: "Nancy/Yakira", class: "Sphinxes", totalPoints: 280, avgPoints: 35 },
      { advisor: "Seniors", class: "Axolots", totalPoints: 260, avgPoints: 15 },
      { advisor: "Juniors", class: "Cheetahs", totalPoints: 980, avgPoints: 33 },
      { advisor: "Freshmen", class: "Sphinxes", totalPoints: 1100, avgPoints: 37 },
    ],
    []
  );

  // Memoized filtered data to avoid unnecessary renders
  const filteredData = useMemo(() => {
    return rawData.filter((row) =>
      row.advisor.toLowerCase().includes(filterInput.toLowerCase())
    );
  }, [filterInput, rawData]);

  const columns = useMemo(
    () => [
      { Header: "Advisor", accessor: "advisor" },
      { Header: "Class", accessor: "class" },
      { Header: "Total Points", accessor: "totalPoints", isNumeric: true },
      { Header: "Avg Points Per Student", accessor: "avgPoints", isNumeric: true },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: filteredData }, useSortBy);

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };

  // Chart Configuration
  const chartData = {
    series: [
      {
        name: "Total Points",
        data: rawData.map((item) => item.totalPoints),
      },
    ],
    options: {
      chart: { type: "bar" },
      xaxis: { categories: rawData.map((item) => item.advisor) },
      title: { text: "Points Distribution", align: "center" },
    },
  };

  return (
    <div className="sixc-container">
      <h2 className="section-title">6C Points Leaderboard</h2>

      {/* Filter Input */}
      <input
        type="text"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder="Search by advisor name..."
        className="filter-input"
      />

      {/* Table Section */}
      <div className="table-container">
        <table {...getTableProps()} className="dynamic-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={column.isSorted ? (column.isSortedDesc ? "desc" : "asc") : ""}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hoverable-row">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <Chart options={chartData.options} series={chartData.series} type="bar" height="350" />
      </div>
    </div>
  );
};

export default DynamicTable;
