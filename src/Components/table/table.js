import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";

const tableKey = process.env.REACT_APP_TABLE_API_KEY;

const Example = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${tableKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching Data", error);
      } finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "address.street",
        header: "Street",
      },
      {
        accessorKey: "address.city",
        header: "City",
      },
      {
        accessorKey: "phone",
        header: "Phone",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      state={{
        isLoading: isLoading,
        showSkeletons: isLoading,

      }}

      muiTablePaperProps={{
        elevation: 3,
      }}

    />
  );
};

export default Example;
