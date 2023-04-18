import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Expected Sales", "Total Proft", "Propsals" , "Invoices" , "Total sales"],
  ["2019", 1000, 400 , 30, 15 , 70],
  ["2020", 1170, 960 , 25, 22, 70]  ,
  ["2021", 660, 1120, 30, 30 , 70],
  ["2022", 1030, 540 , 30, 30 , 70],
];

export const options = {
  chart: {
    title: "Sales Preformance",
    subtitle: "Expected Sales and Profit: 2023-2027",
  },
  colors:["#03A9F4","#FF01F9","#FF0000","#FFFF00","#FFF"],
};

export default function charts() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
