import React, { useMemo } from "react";
import { CustomTable } from "../../../design-system/designComponents";

const TabularView = () => {
  const theme: string = "light";
  const users = [
    {
      userName: "john_doe",
      email: "john.doe@example.com",
      companyName: "Acme Corporation",
      role: "Admin",
      status: "Active",
    },
    {
      userName: "jane_smith",
      email: "jane.smith@example.com",
      companyName: "Beta Ltd.",
      role: "Manager",
      status: "Inactive",
    },
    {
      userName: "robert_brown",
      email: "robert.brown@example.com",
      companyName: "Gamma Enterprises",
      role: "Developer",
      status: "Active",
    },
    {
      userName: "carol_williams",
      email: "carol.williams@example.com",
      companyName: "Delta Inc.",
      role: "Tester",
      status: "Pending",
    },
    {
      userName: "alice_jones",
      email: "alice.jones@example.com",
      companyName: "Omega Solutions",
      role: "Support",
      status: "Active",
    },
  ];

  const columns = useMemo<any[]>(
    () => [
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "User Name",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => (
          <>{row?.original?.userName}</>
        ),
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Email",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => <>{row?.original?.email}</>,
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Company Name",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => (
          <>{row?.original?.companyName}</>
        ),
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Role",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => <>{row?.original?.role}</>,
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Status",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => <>{row?.original?.status}</>,
      },
    ],
    [theme]
  );
  return (
    <div className="mt-3">
      <CustomTable
        hasMoreData={false}
        columns={columns}
        data={users}
        theme={theme}
        tableHeight="calc(100vh - 220px)"
      />
    </div>
  );
};

export default TabularView;
