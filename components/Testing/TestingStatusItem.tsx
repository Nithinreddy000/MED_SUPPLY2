"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import CustomButton from "../CustomButton";
import TimelineComponentTesting from "@/components/Testing/TimlineForTesting";
export const description = "A multiple bar chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const TestingStatusItem = ({ status }: any) => {
  const events = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  const [open, setOpen] = useState<boolean>();

  const labDetails = {
    address: "123 Lab St, Research City, Health Country",
    successfulTests: 500,
    rating: 4.5,
    topReviews: [
      "Excellent service!",
      "Prompt and accurate test results.",
      "Highly professional staff.",
    ],
  };

  const testDetails = [
    "Test 1: Chemical Composition Analysis",
    "Test 2: Microbial Contamination Check",
    "Test 3: Stability Testing",
    "Test 4: Toxicology Screening",
  ];

  return (
    <div className="flex justify-between border-2 py-14 p-7 border-black rounded-md">
      <div className="flex gap-5">
        <p>ID: 1234</p>
        <div>
          {status == 0 && (
            <p className="bg-yellow-400 bg-opacity-50 px-2 rounded-lg">
              Pending
            </p>
          )}
          {status == 1 && (
            <p className="bg-red-400 bg-opacity-50 px-2 rounded-lg">Rejected</p>
          )}
          {status == 2 && (
            <p className="bg-green-400 bg-opacity-50 px-2 rounded-lg">
              Completed
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <CustomButton onClick={() => setOpen(true)}>View Details</CustomButton>
        <CustomButton>Report</CustomButton>
      </div>
      <Sidebar
        visible={open}
        position="right"
        onHide={() => setOpen(false)}
        className="bg-white border-black w-[75%] text-black"
      >
        <div className="grid grid-cols-4 grid-rows-4 h-full">
          <div className="col-span-2 row-span-2 p-10">
            Trends Of Successful Tests (Monthly)
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid grid-rows-2 col-span-2 row-span-2 p-2">
            <div className="border-2 row-span-1 m-2 border-black rounded-md p-2">
              <h3 className="font-bold">Lab Details</h3>
              <p><strong>Address:</strong> {labDetails.address}</p>
              <p><strong>Successful Tests:</strong> {labDetails.successfulTests}</p>
              <p><strong>Rating:</strong> {labDetails.rating} / 5</p>
              <p><strong>Top Reviews: Excellent Service</strong></p>
            </div>
            <div className="border-2 row-span-1 m-2 border-black rounded-md text-center p-2">
              <h3 className="font-bold">Test Details</h3>
              <ul>
                {testDetails.map((test, index) => (
                  <li key={index}>{test}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center col-span-4 row-span-2 mt-10">
            <TimelineComponentTesting />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default TestingStatusItem;