import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import List from "./Pages/List";

function App() {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [listData, setListData] = useState(tableData);

  const sortByDate = () => {
    const sortedData = [...listData].sort((a, b) => {
      // First compare by date (latest first)
      const dateComparison = new Date(b.date) - new Date(a.date);
      if (dateComparison !== 0) {
        return dateComparison; // If dates are different, sort by date
      }
      // If dates are the same, compare by views (highest first)
      return b.views - a.views; // Sort by views
    });
    setListData(sortedData);
  };

  const sortByView = () => {
    const sortedData = [...listData].sort((a, b) => {
      // First compare by date (latest first)
      const viewComparison = b.views - a.views;
      if (viewComparison !== 0) {
        return viewComparison; // If views are different, sort by views
      }
      // If views are the same, compare by date (highest first)
      return new Date(b.date) - new Date(a.date); // Sort by views
    });

    setListData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <Button text={`Sort by Date`} action={sortByDate} />
      <Button text={`Sort by Views`} action={sortByView} />
      <List data={listData} />
    </div>
  );
}

export default App;
