"use client"; // Add this line at the top
import CustomButton from "@/components/CustomButton";
import Addnew from "@/components/Inventory/Addnew";
import MedicineDetails from "@/components/Inventory/MedicineDetails";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Sidebar } from "primereact/sidebar";
import React, { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";

interface Medicine {
  id: string;
  name: string;
  batch: string;
  manufacturer: string;
  expiry: string;
  manufactured: string;
  quantity: number;
  category: string;
  reorderLevel: number;
  reorderQuantity: number;
  status: string;
  minStockLevel: number;
  maxStockLevel: number;
  storageLocation: string;
  tempRequirements: string;
  certification: string;
  imageUrl?: string; // Assuming imageUrl can be optional
}

export default function TablePage() {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(
    null
  );

  const tableData: Medicine[] = [
    {
      id: "#001",
      name: "Paracetamol 500mg",
      batch: "PN2024A",
      manufacturer: "PharmaCo",
      expiry: "2025-06-30",
      manufactured: "2023-06-01",
      quantity: 1000,
      category: "Tablet",
      reorderLevel: 200,
      reorderQuantity: 500,
      status: "In Stock",
      minStockLevel: 100,
      maxStockLevel: 1500,
      storageLocation: "Rack 5 / Shelf 3",
      tempRequirements: "Store at 25°C",
      certification: "GMP Certified",
    },
    {
      id: "#001",
      name: "Dolo 650",
      batch: "PN2024A",
      manufacturer: "PharmaCo",
      expiry: "2025-06-30",
      manufactured: "2023-06-01",
      quantity: 1000,
      category: "Tablet",
      reorderLevel: 200,
      reorderQuantity: 500,
      status: "In Stock",
      minStockLevel: 100,
      maxStockLevel: 1500,
      storageLocation: "Rack 5 / Shelf 3",
      tempRequirements: "Store at 31°C",
      certification: "GMP Certified",
    },
    // ...other data
  ];

  const ItemId = [
    { value: "01", label: "01" },
    { value: "02", label: "02" },
    { value: "003", label: "003" },
  ];
  const ItemName = [
    { value: "Paracetamol", label: "Paracetamol" },
    { value: "Aspirin", label: "Aspirin" },
    { value: "Ibuprofen", label: "Ibuprofen" },
  ];
  const BatchNumber = [
    { value: "013", label: "013" },
    { value: "025", label: "025" },
    { value: "0039", label: "0039" },
  ];
  const Manufacturer = [
    { value: "PharmaCo", label: "PharmaCo" },
    { value: "PharmaCo2", label: "PharmaCo2" },
    { value: "PharmaCo3", label: "PharmaCo3" },
  ];
  const expiryOptions = [
    { value: "Expires in 1 month", label: "Expires in 1 month" },
    { value: "Expires in 2 months", label: "Expires in 2 months" },
    { value: "Expires in 1 year", label: "Expires in 1 year" },
    { value: "Expires in 2 years", label: "Expires in 2 years" },
  ];
  const categories = [
    { value: "Tablet", label: "Tablet" },
    { value: "Syrup", label: "Syrup" },
  ];
  const statusOptions = [
    { value: "In Stock", label: "In Stock" },
    { value: "Out of Stock", label: "Out of Stock" },
  ];

  type OptionType = {
    value: string;
    label: string;
  };

  interface FilterComponentProps {
    options: OptionType[];
    label: string;
  }

  const FilterComponent: React.FC<FilterComponentProps> = ({
    options,
    label,
  }) => {
    const [selectedOptions, setSelectedOptions] = useState<
      MultiValue<OptionType>
    >([]);

    const handleChange = (selected: MultiValue<OptionType>) => {
      setSelectedOptions(selected);
    };

    // const handleOptionRemove = (optionToRemove: OptionType) => {
    //   setSelectedOptions((prevSelectedOptions) =>
    //     prevSelectedOptions.filter(
    //       (option) => option.value !== optionToRemove.value
    //     )
    //   );
    // };

    return (
      <div className="form-group cursor-pointer">
        <label className="">{label}</label>
        <Select
          isMulti
          name="filters"
          options={options}
          onChange={handleChange}
          value={selectedOptions}
          className=" cursor-pointer"
        />
      </div>
    );
  };
  const [addingnew, setaddingNew] = useState(false);
  const [details, setdetails] = useState(false);
  const [filter, setfilter] = useState(false);

  const setSelection = (item: any) => {
    setSelectedMedicine(item);

    setdetails(true);
  };

  useEffect(() => {
    console.log("updated");
  }, [selectedMedicine]);
  return (
    <div className=" w-full h-full overflow-hidden">
      {/* SideBars */}
      <Sidebar
        visible={addingnew}
        position="right"
        onHide={() => setaddingNew(false)}
        className="bg-white  text-black w-[75%]  border-black"
      >
        <Addnew />
      </Sidebar>
      <Sidebar
        visible={details}
        position="right"
        onHide={() => setdetails(false)}
        className="bg-white  text-black w-[75%]  border-black"
      >
        <MedicineDetails selectedMedicine={selectedMedicine} />
      </Sidebar>
      <Sidebar
        visible={filter}
        position="right"
        onHide={() => setfilter(false)}
        className="bg-white  text-black w-[25%]  border-black"
      >
        <div className="relative flex-1 py-6 px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4">
            <FilterComponent options={ItemId} label="Item Id" />
            <FilterComponent options={ItemName} label="Item Name" />
            <FilterComponent options={BatchNumber} label="Batch Number" />
            <FilterComponent options={Manufacturer} label="Manufacturers" />
            <FilterComponent options={expiryOptions} label="Expiry Date" />
            <FilterComponent options={categories} label="Category" />
            <FilterComponent options={statusOptions} label="Status" />
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
          <CustomButton onClick={() => setfilter(false)}>
            Apply Filter
          </CustomButton>
        </div>
      </Sidebar>
      {/* Buttons */}
      <div>
        <div className="flex w-full justify-between">
          <div>
            <input
              placeholder="Search"
              className="border-2 mx-2 p-1 rounded-md"
            ></input>
          </div>

          <div className="flex gap-3 m-2">
            <CustomButton
              className=" flex items-center py-2"
              onClick={() => setaddingNew(true)}
            >
              <i className="fa fa-plus align-bottom"></i>
            </CustomButton>
            <CustomButton className=" flex items-center py-2">
              <i className="fa fa-edit align-bottom"></i>
            </CustomButton>
            <CustomButton className=" flex items-center py-2">
              <i className="fa fa-trash align-bottom"></i>
            </CustomButton>
            <CustomButton
              className=" flex items-center py-2"
              onClick={() => setfilter(true)}
            >
              <i className="fas fa-filter"></i>
            </CustomButton>
          </div>
        </div>
      </div>
      <table className="table-auto mx-2 w-full overflow-auto">
        <thead>
          <tr>
            <th className="">Item ID</th>
            <th className="">Item Name</th>
            <th className="">Batch Number</th>
            <th className="">Manufacturer</th>
            <th className="">Expiry Date</th>
            <th className="">Manufactured Date</th>
            <th className="">Quantity In Stock</th>
            <th className="">Category</th>

            <th className="">Reorder Quantity</th>

            <th className="">Minimum Stock Level</th>
            <th className="">Maximum Stock Level</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 cursor-pointer border-t-2 border-b-2"
              onClick={() => setSelection(item)}
            >
              <td className="text-center ">{item.id}</td>
              <td className="text-center ">{item.name}</td>
              <td className=" text-center">{item.batch}</td>
              <td className=" text-center">{item.manufacturer}</td>
              <td className=" text-center">{item.expiry}</td>
              <td className=" text-center">{item.manufactured}</td>
              <td className=" text-center">{item.quantity}</td>
              <td className=" text-center">{item.category}</td>

              <td className=" text-center">{item.reorderQuantity}</td>

              <td className=" text-center">{item.minStockLevel}</td>
              <td className=" text-center">{item.maxStockLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
