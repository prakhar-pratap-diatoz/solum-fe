import React, { useMemo } from "react";
import { CustomTable } from "../../../design-system/designComponents";

const TabularView = () => {
  const theme: string = "light";
  const requests = [
    {
      reqId: "REQ001",
      customerName: "John Doe",
      reqBy: "Alice Smith",
      noOfStores: 5,
      licensePurpose: "Software Upgrade",
      expDate: "2024-12-31",
    },
    {
      reqId: "REQ002",
      customerName: "Jane Doe",
      reqBy: "Bob Johnson",
      noOfStores: 3,
      licensePurpose: "New Installation",
      expDate: "2025-01-15",
    },
    {
      reqId: "REQ003",
      customerName: "Acme Corporation",
      reqBy: "Carol Williams",
      noOfStores: 10,
      licensePurpose: "License Renewal",
      expDate: "2024-10-01",
    },
    {
      reqId: "REQ004",
      customerName: "Beta Ltd.",
      reqBy: "David Brown",
      noOfStores: 2,
      licensePurpose: "Testing Purpose",
      expDate: "2024-11-20",
    },
    {
      reqId: "REQ005",
      customerName: "Gamma Enterprises",
      reqBy: "Evelyn Davis",
      noOfStores: 8,
      licensePurpose: "Production Deployment",
      expDate: "2025-02-28",
    },
  ];

  const columns = useMemo<any[]>(
    () => [
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Req ID",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => <>{row?.original?.reqId}</>,
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Customer / Partner Name",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => (
          <>{row?.original?.customerName}</>
        ),
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Requested By",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => <>{row?.original?.reqBy}</>,
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "No of Stores",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => (
          <>{row?.original?.noOfStores}</>
        ),
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "License Purpose",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => (
          <>{row?.original?.licensePurpose}</>
        ),
      },
      {
        accessorFn: (row: any) => `${row?.day}`,
        header: "Exp. Date",
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ renderedCellValue, row }: any) => (
          <>{row?.original?.expDate}</>
        ),
      },
    ],
    [theme]
  );
  return (
    <div className="mt-3">
      <CustomTable
        hasMoreData={false}
        columns={columns}
        data={requests}
        theme={theme}
        tableHeight="calc(100vh - 220px)"
      />
    </div>
  );
};

export default TabularView;
