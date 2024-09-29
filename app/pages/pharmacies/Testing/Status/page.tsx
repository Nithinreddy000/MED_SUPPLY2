import TestingStatusItem from "@/components/Testing/TestingStatusItem";

const Page = () => {
  const Items = [
    { name: "1", status: 0 },
    { name: "2", status: 1 },
    { name: "3", status: 0 },
    { name: "4", status: 2 },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="relative px-2 pt-4 self-end">
        <input
          placeholder="Search"
          className="border-2 mx-2 p-3 border-black rounded-md"
        ></input>

        <i className="top-[2.1rem] right-8 absolute fa-magnifying-glass fa-solid"></i>
      </div>
      <div className="gap-2 grid grid-cols-3 p-7">
        {Items.map((data) => (
          <div className="col-span-1 m-4">
            <TestingStatusItem status={data.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
