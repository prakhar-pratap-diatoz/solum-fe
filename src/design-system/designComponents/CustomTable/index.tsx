import { type UIEvent, useMemo, useRef, useEffect, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData, //default shape of TData (Record<string, any>)
  type MRT_TableOptions,
} from "material-react-table";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles.scss";

interface Props {
  columns: any[];
  data: any[];
  theme: any;
  tableHeight: string;
  borderLess?: boolean;
  handleRowClick?: (row: any) => void;
  handleCellClick?: (cell: any) => void;
  //pass accessorykey that you want to fix in left or right side
  columnPinning?: { left?: string[]; right?: string[] };
  fetchNextPage?: Function;
  hasMoreData?: boolean;
}

const CustomTable = ({
  columns,
  data,
  theme,
  columnPinning,
  borderLess,
  tableHeight,
  handleRowClick,
  handleCellClick,
  fetchNextPage,
  hasMoreData,
  ...rest
}: Props) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const fetchMoreOnBottomReached = (
    containerRefElement?: HTMLDivElement | null
  ) => {
    if (containerRefElement) {
      const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
      //once the user has scrolled reached to the bottom of the table, fetch more data if we can
      if (scrollHeight - scrollTop - clientHeight <= 1 && hasMoreData) {
        fetchNextPage && fetchNextPage();
      }
    }
  };
  const [themeValue, setThemeValue] = useState(localStorage.getItem("theme"));
  const observerRef = useRef<any>(null);

  useEffect(() => {
    // Callback function to handle mutations
    const handleMutations = (mutationsList: any) => {
      mutationsList.forEach((mutation: any) => {
        if (mutation.attributeName === "data-bs-theme") {
          // Handle changes to data-bs-theme attribute
          const themeValue =
            document.documentElement.getAttribute("data-bs-theme");
          setThemeValue(themeValue ?? "light");
        }
      });
    };

    // Create a new observer with the callback function
    const observer = new MutationObserver(handleMutations);

    // Set up the observer to watch for changes in the attributes of the document element
    observer.observe(document.documentElement, { attributes: true });

    // Save the observer reference to clean up later
    observerRef.current = observer;

    // Clean up the observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeValue === "dark" ? "dark" : "light",
          info: {
            main: "rgb(255, 0, 0)", //add in a custom color for the toolbar alert background stuff
          },
          background: {
            default: themeValue === "dark" ? "#2a2b2d" : "#fefefe",
          },
        },
        typography: {
          fontFamily: [
            "SF Pro Display",
            "SF Pro Icons",
            "Helvetica Neue",
            "Helvetica",
            "Arial",
            "sans-serif",
          ].join(","),
        },
      }),
    [themeValue]
  );
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnResizing: true,
    layoutMode: "grid",
    enableColumnFilters: false,
    enableStickyHeader: true,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableBottomToolbar: true,
    enableTopToolbar: false,
    enablePagination: false,
    enableColumnPinning: Boolean(columnPinning),
    initialState: {
      columnPinning: columnPinning ? columnPinning : { left: [], right: [] },
    },
    muiTableContainerProps: {
      ref: tableContainerRef,
      sx: { maxHeight: tableHeight },
      onScroll: (event: UIEvent<HTMLDivElement>) => {
        fetchMoreOnBottomReached(event.target as HTMLDivElement);
      },
    },
    muiTableHeadCellProps: {
      sx: {
        borderRight: borderLess
          ? "unset"
          : "1px solid var(  --color-table-border)",
        borderTop: "1px solid var(--color-primary-border)",
        "& .MuiButtonBase-root": {
          display: "none",
        },
        backgroundColor: "var(--color-bg-card) !important",
        "&:hover": {
          "& .MuiButtonBase-root": {
            display: "inline-block",
          },
        },

        "& .Mui-TableHeadCell-ResizeHandle-Wrapper": {
          "& hr": {
            borderWidth: 0,
            borderColor: "transparent !important",
          },
          "&:hover": {
            "& hr": {
              borderWidth: "2px",
              borderColor: "var(--color-secondary-text) !important",
            },
          },
        },
        "&.MuiTableCell-root": {
          background: "var(--color-bg-card) !important",
          boxShadow: "unset",
          borderBottom: "1px solid var(--color-primary-border)",

          "&:before": {
            boxShadow: "unset ",
            background: "transparent !important",
          },
          "&:hover": {
            "& .Mui-TableHeadCell-ResizeHandle-Wrapper": {
              "& hr": {
                borderColor: "var(--color-secondary-text) !important",
              },
            },
          },
        },
      },
    },

    muiTableBodyCellProps: ({ cell, column, row, table }: any) => {
      return {
        onClick: (event: any) => {
          if (handleCellClick) handleCellClick(cell);
        },
        sx: {
          borderRight: borderLess
            ? "unset"
            : "1px solid var(  --color-table-border)",
          "&.MuiTableCell-root": {
            background: "var(--color-bg-card) !important",
            boxShadow: "unset",
            "&:before": {
              boxShadow: "unset",
              background: "var(--color-bg-card) !important",
            },
          },
        },
      };
    },
    muiTableBodyRowProps: ({ row }: any) => {
      return {
        onClick: (event: any) => {
          if (handleRowClick) handleRowClick(row);
        },
        sx: (theme: any) => ({
          // td: {
          //   backgroundColor: lighten(
          //     darken(theme.palette.background.default, 0.1),
          //     row.depth * (theme.palette.mode === "dark" ? 0.2 : 0.1)
          //   ),
          // },
          cursor: handleRowClick ? "pointer" : undefined, //you might want to change the cursor too when adding an onClick
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-transparent) !important",
          },
          "& .MuiInputBase-root ": {
            width: "100%",
            height: "40px",
            border: "1px solid var(--color-transparent) !important",
            backgroundColor: " var(--color-transparent) !important",
            "&:hover": {
              border: "1px solid var(--color-transparent) !important",
            },
          },
          "& .Mui-focused": {
            backgroundColor:
              "var(--color-textfield-background-color) !important",
          },

          backgroundColor: "var(--color-bg-card) !important",
          "&:hover td": {
            backgroundColor: "var(--color-table-row-hover-bg)",
          },
        }),
      };
    },

    ...rest,
    //your custom table options...
    //Please visit 'https://www.material-react-table.com/' to check other props
  });

  return (
    <div id="e2e_custom_material_table">
      <div className="custom-table-wrapper">
        <ThemeProvider theme={tableTheme}>
          <MaterialReactTable table={table} />
        </ThemeProvider>
      </div>
    </div>
  );
};
export default CustomTable;
