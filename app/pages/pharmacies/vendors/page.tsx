import VendorsDetails from "@/components/Vendors/VendorsDetails";

const page = () => {
  const List = [
    { name: "Pfizer" },
    { name: "Moderna" },
    { name: "Johnson & Johnson" },
    { name: "AstraZeneca" },
    { name: "Merck" },
    { name: "Sanofi" },
    { name: "GlaxoSmithKline" },
    { name: "Bayer" },
    { name: "Novartis" },
    { name: "Roche" },
    { name: "Eli Lilly" },
    { name: "AbbVie" },
  ];
  
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-1/6 h-full">
        <div className="relative mt-2 w-full">
          <input
            placeholder="Search"
            className="border-[1px] mr-2 p-2 border-black rounded-md w-[95%]"
          ></input>

          <i className="top-[0.8rem] right-8 absolute fa-magnifying-glass fa-solid"></i>
        </div>
        <div className="flex flex-col overflow-auto">
          {List.map((data, index) => (
            <div key={index} className="border-2 hover:bg-black my-2 py-4 rounded-md hover:text-white cursor-pointer">
              <p className="px-2"> {data.name}</p>
            </div>
          ))}
        </div>
      </div>
      <VendorsDetails />
    </div>
  );
};

export default page;