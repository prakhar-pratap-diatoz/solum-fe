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
  columns: any;
  data: any[];
  tableHeight: string;
  borderLess?: boolean;
  handleRowClick?: (row: any) => void;
  handleCellClick?: (cell: any) => void;
  //pass accessorykey that you want to fix in left or right side
  columnPinning?: { left?: string[]; right?: string[] };
  fetchNextPage?: Function;
  hasMoreData?: boolean;
  borderCondition?: (row: any) => boolean;
  checkAnimation?: any;
}

const AdvanceTable = ({
  columns,
  data,
  columnPinning,
  borderLess,
  tableHeight,
  handleRowClick,
  handleCellClick,
  fetchNextPage,
  hasMoreData,
  borderCondition,
  checkAnimation,
  ...rest
}: Props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const fetchMoreOnBottomReached = (
    containerRefElement?: HTMLDivElement | null
  ) => {
    if (containerRefElement) {
      const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
      //once the user has scrolled reached to the bottom of the table, fetch more data if we can
      if (scrollHeight - scrollTop - clientHeight < 1 && hasMoreData) {
        fetchNextPage && fetchNextPage();
      }
    }
  };
  const observerRef = useRef<any>(null);

  useEffect(() => {
    // Callback function to handle mutations
    const handleMutations = (mutationsList: any) => {
      mutationsList.forEach((mutation: any) => {
        if (mutation.attributeName === "data-bs-theme") {
          // Handle changes to data-bs-theme attribute
          const themeValue =
            document.documentElement.getAttribute("data-bs-theme");
          setTheme(themeValue ?? "light");
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
          mode: theme === "dark" ? "dark" : "light",
          info: {
            main: "rgb(255, 0, 0)", //add in a custom color for the toolbar alert background stuff
          },
          background: {
            default: theme === "dark" ? "#2a2b2d" : "#fefefe",
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
        components: {
          MuiTooltip: {
            defaultProps: {
              arrow: true,
            },
            styleOverrides: {
              tooltip: {
                backgroundColor: " var(--tool-tip-bg-color) !important",
                color: "var(--tool-tip-text-color) !important",
              },
              arrow: {
                color: " var(--tool-tip-bg-color)",
              },
            },
          },
        },
      }),
    [theme]
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
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enablePagination: false,
    enableColumnPinning: Boolean(columnPinning),
    initialState: {
      columnPinning: columnPinning ? columnPinning : { left: [], right: [] },
    },
    muiTableContainerProps: {
      ref: tableContainerRef,
      sx: {
        maxHeight: tableHeight,
        "&::-webkit-scrollbar": {
          backgroundColor: "var(--color-body-bg)",
        },
      },
      onScroll: (event: UIEvent<HTMLDivElement>) => {
        fetchMoreOnBottomReached(event.target as HTMLDivElement);
      },
    },
    muiTableHeadCellProps: ({ column }: any) => {
      return {
        sx: {
          display: column.id === "mrt-row-expand" ? "none" : "flex",
          borderRight:
            borderLess || column.columnDef.columnDefType !== "data"
              ? "unset"
              : "1px solid var(  --color-table-border)",
          "& .Mui-TableHeadCell-Content": {
            visibility:
              column.columnDef.id === "mrt-row-drag" ? "hidden" : "visible",
          },
          backgroundColor: "var(--color-bg-card) !important",
          height: "42px",
          fontWeight: "400",
          fontSize: "13px",
          padding:
            column.columnDef.columnDefType === "display" ? "0" : "0 1rem",
          paddingTop: 0,
          justifyContent: "center",
          paddingBottom: 0,
          "& .MuiButtonBase-root": {
            padding:
              column.columnDef.columnDefType === "display" ? "2px" : "8px",
            width:
              column.columnDef.columnDefType === "display" ? "unset" : "2.5rem",
            backgroundColor: "transparent !important",
          },
          borderTop: "1px solid var(--color-primary-border)",

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
      };
    },

    muiTableBodyCellProps: ({ cell, column, row, table }: any) => {
      const originalRow = row?.original;
      const { id } = column || {};
      const { addTaskId } = row?.original;
      return {
        onClick: (event: any) => {
          if (handleCellClick) handleCellClick(cell);
        },
        sx: {
          minHeight: "42px",
          display: column.id === "mrt-row-expand" ? "none" : "flex",
          padding:
            column.columnDef.columnDefType === "display" ? "0" : "0 1rem",
          "&.MuiTableCell-root": {
            background: "var(--color-bg-card) !important",
            boxShadow: "unset",
            "&:before": {
              boxShadow: "unset",
              background: "var(--color-bg-card) !important",
            },
          },
          "& .MuiButtonBase-root": {
            visibility:
              cell.column.columnDef.id === "mrt-row-expand"
                ? "visible !important"
                : "hidden",
            padding:
              cell.column.columnDef.columnDefType === "display" ? "2px" : "8px",
            width:
              cell.column.columnDef.columnDefType === "display"
                ? "unset"
                : "2.5rem",
            backgroundColor: "transparent !important  ",
          },
          "& #task_create_btn": {
            "& .MuiButtonBase-root": {
              backgroundColor: "var(--color-secondary) !important",
            },
          },

          // paddingLeft:
          //   cell.column.columnDef.columnDefType === "display" ? "0px" : "1rem",
          // paddingRight:
          //   cell.column.columnDef.columnDefType === "display" ? "0px" : "1rem",

          "& .Mui-disabled": {
            display:
              cell.column.columnDef.columnDefType !== "data"
                ? "none !important"
                : "inline-flex",
          },
          maxWidth: id === "name" ? "100%" : "fit-content",
          borderRight:
            borderLess ||
            // (borderCondition && !borderCondition(row)) ||
            cell.column.columnDef.columnDefType !== "data" ||
            originalRow?.hasOwnProperty("sectionIndex") ||
            addTaskId === "CREATE_NEW_TASK" ||
            addTaskId === "Add Task"
              ? "unset"
              : "1px solid var(  --color-table-border)",
        },
      };
    },
    muiTableHeadRowProps: ({ table }: any) => {
      return {
        sx: {
          boxShadow: "none",
        },
      };
    },
    muiTableBodyRowProps: ({ row, table }: any) => {
      return {
        onClick: (event: any) => {
          if (handleRowClick) handleRowClick(row);
        },
        sx: (theme: any) => ({
          backgroundColor: "var(--color-bg-card) !important",

          "& .MuiButtonBase-root": {
            visibility: "hidden",
          },
          "& .create-task-action-wrapper": {
            "& .MuiButtonBase-root": {
              visibility: "visible !important",
            },
          },
          "& .MuiTableCell-root:empty": {
            display: "none",
          },

          "&:hover": {
            "& .MuiButtonBase-root": {
              visibility:
                row.original.addTaskId === "Add Task" ||
                row.original.parentSectionId
                  ? "hidden"
                  : "visible",
            },
            "& #more-vertical-options": {
              "& .MuiButtonBase-root": {
                visibility:
                  row.original.addTaskId === "Add Task"
                    ? "hidden"
                    : "visible !important",
              },
            },

            "& #create-issue-add-box": {
              visibility: "visible",
            },
          },
          td: {
            // background:
            //   checkAnimation?.sectionId === row.parentId &&
            //   checkAnimation?.taskIndex === row.index
            //     ? "transparent linear-gradient(270deg, #c851a8 0%, #7d80d6 46%, #8de2dc 100%) 0% 0% no-repeat padding-box"
            //     : "",
            // row.parentId
            // ? "var(--color-body-bg)"
            // : theme.palette.background,
            backgroundSize:
              checkAnimation?.sectionId === row.parentId &&
              checkAnimation?.taskIndex === row.index
                ? "400% 100%"
                : undefined,
            animation:
              checkAnimation?.sectionId === row.parentId &&
              checkAnimation?.taskIndex === row.index
                ? "gradient 1s ease infinite"
                : undefined,
          },
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
            backgroundColor: row.parentId
              ? theme.palette.background
              : "var(--color-body-bg)",
          },
        }),
      };
    },

    ...rest,
    //your custom table options...
    //Please visit 'https://www.material-react-table.com/' to check other props
  });

  return (
    <div id="e2e_advance_custom_material_table">
      <div className="custom-table-wrapper mb-2">
        <ThemeProvider theme={tableTheme}>
          <MaterialReactTable table={table} />
        </ThemeProvider>
      </div>
    </div>
  );
};
export default AdvanceTable;
