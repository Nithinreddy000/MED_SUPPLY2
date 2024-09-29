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
import TimelineComponentOrders from "../../components/Testing/TimelineComonentForOrderStatus";

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

interface LogisticData {
  driverName: string;
  vehicleNumber: string;
  presentLocation: string;
}

interface ShippingAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipcode: string;
}

const OrdersStatusItem = ({ status }: any) => {
  const [open, setOpen] = useState<boolean>();

  const logisticData: LogisticData = {
    driverName: "John Doe",
    vehicleNumber: "AB-123-CD",
    presentLocation: "123 Main St, Springfield",
  };

  const shippingAddress: ShippingAddress = {
    addressLine1: "456 Elm St",
    addressLine2: "Apt 789",
    city: "Gotham",
    state: "NY",
    zipcode: "12345",
  };

  return (
    <div className="flex justify-between border-2 py-14 p-7 border-black rounded-md">
      <div className="flex gap-5">
        <p>ID: 1234</p>
        <div>
          {status === 0 && (
            <p className="bg-yellow-400 bg-opacity-50 px-2 rounded-lg">
              Pending
            </p>
          )}
          {status === 1 && (
            <p className="bg-red-400 bg-opacity-50 px-2 rounded-lg">Rejected</p>
          )}
          {status === 2 && (
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
            Order Trends
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
          <div className="grid grid-rows-2 col-span-2 row-span-2 p-10">
            <div className="border-2 m-2 border-black rounded-md p-4">
              <h3 className="font-bold text-lg">Logistic Data</h3>
              <p>Driver: {logisticData.driverName}</p>
              <p>Vehicle: {logisticData.vehicleNumber}</p>
              <p>Location: {logisticData.presentLocation}</p>
            </div>
            <div className="border-2 m-2 border-black rounded-md p-4">
              <h3 className="font-bold text-lg">Shipping Address</h3>
              <p>{shippingAddress.addressLine1}</p>
              {shippingAddress.addressLine2 && (
                <p>{shippingAddress.addressLine2}</p>
              )}
              <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipcode}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center col-span-4 row-span-2 mt-20">
            <TimelineComponentOrders />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default OrdersStatusItem;