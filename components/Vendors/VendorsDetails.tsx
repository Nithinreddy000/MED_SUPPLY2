"use client";

import { Medicine } from "@/app/pages/hospital/Inventory/page";

const VendorsDetails = () => {
  const Alerts = [
    { name: "License 1: FDA Approved" },
    { name: "License 2: ISO Certified" },
    { name: "License 3: GMP Certified" }
  ];

  const tableData: Medicine[] = [
    {
      id: 1,
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
      id: 2,
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
  ];

  const manufacturerDetails = {
    name: "PharmaCo Ltd.",
    address: "123 Pharma St, MedCity, USA",
    contact: "contact@pharmaco.com",
    phone: "+1-800-555-0199",
  };

  const hospitalReviews = [
    { review: "Great service and fast delivery!", rating: 5 },
    { review: "Very reliable supplier.", rating: 4 },
    { review: "Quality products, but delivery could improve.", rating: 3 },
  ];

  const notifications = [
    { name: "Tampering detected in batch PN2024A" },
    { name: "Expiry date approaching for batch PN2024A" },
    { name: "Stock level low for Paracetamol 500mg" }
  ];

  const AlertsComponents = ({ Items }: { Items: { name: string }[] }) => {
    return (
      <div className="flex flex-col gap-2">
        {Items.map((item, index) => (
          <div
            key={index}
            className="border-2 hover:bg-black mx-4 p-4 border-black rounded-md hover:text-white cursor-pointer"
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  const OrdersComponents = ({ Items }: { Items: { review: string; rating: number }[] }) => {
    return (
      <div className="flex flex-col gap-2">
        {Items.map((item, index) => (
          <div
            key={index}
            className="border-2 hover:bg-black mx-4 p-4 border-black rounded-md hover:text-white cursor-pointer"
          >
            <div className="flex items-center">
              {Array.from({ length: item.rating }, (_, starIndex) => (
                <span key={starIndex} className="text-yellow-500">★</span>
              ))}
              {Array.from({ length: 5 - item.rating }, (_, starIndex) => (
                <span key={starIndex} className="text-gray-300">★</span>
              ))}
            </div>
            <p className="mt-2">{item.review}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border-2 grid grid-rows-11 p-4 w-5/6 h-full">
      <div className="row-span-1">{manufacturerDetails.contact}</div>
      <div className="grid grid-cols-6 row-span-5">
        <div className="border-2 col-span-2 border-black">
          <p><strong>Manufacturer Name:</strong> {manufacturerDetails.name}</p>
          <p><strong>Address:</strong> {manufacturerDetails.address}</p>
          <p><strong>Contact:</strong> {manufacturerDetails.contact}</p>
          <p><strong>Phone:</strong> {manufacturerDetails.phone}</p>
        </div>
        <div className="border-2 col-span-2 border-black">
          <div className="flex flex-col gap-4 mx-4 py-2 h-full">
            <p>Licenses</p>
            <AlertsComponents Items={Alerts} />
          </div>
        </div>
        <div className="border-2 grid grid-rows-2 col-span-2 border-black">
          <div className="border-2 m-2 mx-4 p-4 border-black rounded-md">
            <OrdersComponents Items={hospitalReviews} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 row-span-5">
        <div className="border-2 col-span-4 p-2 border-black">
          <div className="mx-2 text-lg">Previous Orders</div>
          <div className="w-full overflow-auto p-4">
            <table className="table-auto w-full border-collapse"> {/* Added border-collapse */}
              <thead>
                <tr>
                  <th>Item ID</th>
                  <th>Item Name</th>
                  <th>Expiry Date</th>
                  <th>Manufactured Date</th>
                  <th>Quantity In Stock</th>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((item: Medicine, index: any) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 cursor-pointer" // Removed border classes
                      onClick={() => console.log("clicked")}
                    >
                      <td className="text-center">{item.id}</td>
                      <td className="text-center">{item.name}</td>
                      <td className="text-center">{item.expiry}</td>
                      <td className="text-center">{item.manufactured}</td>
                      <td className="text-center">{item.quantity}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border-2 col-span-2 border-black">
          <p className="p-4">Alerts & Notifications</p>
          <AlertsComponents Items={notifications} />
        </div>
      </div>
    </div>
  );
};

export default VendorsDetails;