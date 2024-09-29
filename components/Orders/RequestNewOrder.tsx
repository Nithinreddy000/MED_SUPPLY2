import { useState } from "react";

const RequestNewOrder = () => {
  //   const postquery = useMutation({
  //     mutationFn: createPost,
  //     onSuccess: () => {
  //       console.log("posted");
  //     },
  //   });
  const [formData, setformData] = useState<any>({
    id: undefined,
    name: "",
    batch: "",
    manufacturer: "",
    expiry: "",
    manufactured: "",
    quantity: undefined,
    category: "",
    reorderLevel: undefined,
    reorderQuantity: undefined,
    status: "",
    minStockLevel: undefined,
    maxStockLevel: undefined,
    storageLocation: "",
    tempRequirements: "",
    certification: "",
    imageUrl: "", // Assuming imageUrl can be optional
  });

  return (
    <div className="w-full">
      <p className="py-2 font-bold text-lg">Add New</p>

      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 p-7">
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Item ID
          </label>
          <input
            name="id"
            value={formData.id}
            onChange={(e) =>
              setformData({ ...formData, id: Number(e.target.value) })
            }
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 focus:border-blue-500 rounded-md w-full focus:outline-none sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Item Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Batch Number
          </label>
          <input
            name="batch"
            value={formData.batch}
            onChange={(e) =>
              setformData({ ...formData, batch: e.target.value })
            }
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Manufacturer
          </label>
          <input
            name="manufacturer"
            value={formData.manufacturer}
            onChange={(e) =>
              setformData({ ...formData, manufacturer: e.target.value })
            }
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Expiry Date
          </label>
          <input
            name="expiry"
            value={formData.expiry}
            onChange={(e) =>
              setformData({ ...formData, expiry: e.target.value })
            }
            type="date"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Manufactured Date
          </label>
          <input
            name="manufactured"
            value={formData.manufactured}
            onChange={(e) =>
              setformData({ ...formData, manufactured: e.target.value })
            }
            type="date"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Quantity in Stock
          </label>
          <input
            name="quantity"
            value={formData.quantity}
            onChange={(e) =>
              setformData({ ...formData, quantity: Number(e.target.value) })
            }
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Category (Tablet, Syrup,etc.)
          </label>
          <input
            name="category"
            type="text"
            value={formData.category}
            onChange={(e) =>
              setformData({ ...formData, category: e.target.value })
            }
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Reorder Level
          </label>
          <input
            name="reorderLevel"
            type="number"
            value={formData.reorderLevel}
            onChange={(e) =>
              setformData({ ...formData, reorderLevel: Number(e.target.value) })
            }
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Reorder Quantity
          </label>
          <input
            value={formData.reorderQuantity}
            onChange={(e) =>
              setformData({
                ...formData,
                reorderQuantity: Number(e.target.value),
              })
            }
            name="reorderQuantity"
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Status (In Stock/Out of Stock)
          </label>
          <select
            value={formData.status}
            onChange={(e) =>
              setformData({
                ...formData,
                status: e.target.value,
              })
            }
            name="status"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 focus:border-blue-500 rounded-md w-full focus:outline-none sm:text-sm"
          >
            <option value="in_stock">In Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Minimum Stock Level
          </label>
          <input
            value={formData.minStockLevel}
            onChange={(e) =>
              setformData({
                ...formData,
                minStockLevel: Number(e.target.value),
              })
            }
            name="minStockLevel"
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Maximum Stock Level
          </label>
          <input
            value={formData.maxStockLevel}
            onChange={(e) =>
              setformData({
                ...formData,
                maxStockLevel: Number(e.target.value),
              })
            }
            name="maxStockLevel"
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Storage Location
          </label>
          <input
            value={formData.storageLocation}
            onChange={(e) =>
              setformData({
                ...formData,
                storageLocation: e.target.value,
              })
            }
            name="storageLocation"
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Temperature Requirements
          </label>
          <input
            name="tempRequirements"
            type="text"
            value={formData.tempRequirements}
            onChange={(e) =>
              setformData({
                ...formData,
                tempRequirements: e.target.value,
              })
            }
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Certification/Patents
          </label>
          <input
            name="certification"
            value={formData.certification}
            onChange={(e) =>
              setformData({
                ...formData,
                certification: e.target.value,
              })
            }
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
      </div>
      {/* <div className="px-7">
        <CustomButton onClick={() => console.log("Submited")}>
          Submit
        </CustomButton>
      </div> */}
    </div>
  );
};

export default RequestNewOrder;
