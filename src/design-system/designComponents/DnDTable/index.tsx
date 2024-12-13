import {
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Checkbox } from "@mui/material";
import { Spinner } from "../Result";
import {
  KeyboardArrowRight,
  KeyboardArrowDown,
  DragIndicator,
  CheckCircleOutline,
} from "@mui/icons-material";
import "./styles.scss";

interface IHeaderProps {
  id: string;
  title: string;
  key: string;
  render: (parentIndex: number, childIndex: number, value: any) => ReactNode;
}
interface IDnDtableProps {
  parentKey: string;
  childKey: string;
  headers: IHeaderProps[];
  handleDragEnd: Function;
  tableData: any;
  setTableData: Dispatch<SetStateAction<any>>;
  loading: boolean;
  rowSelected: any;
  handleAddChild: Function;
  selectedRow: any;
  checkedRows: (row: any) => boolean;
  setCheckedRows: Function;
  checkAnimation: any;
  parentRender: (parentIndex: number, value: any) => ReactNode;
  subDataKey: string;
}

function DnDTable({
  parentKey,
  childKey,
  headers,
  handleDragEnd,
  tableData,
  setTableData,
  loading,
  rowSelected,
  handleAddChild,
  selectedRow,
  checkedRows,
  setCheckedRows,
  checkAnimation,
  parentRender,
  subDataKey,
}: IDnDtableProps) {
  const [dragging, setDragging] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [resizingHeader, setResizingHeader] = useState<any | null>(null);
  const [closedSections, setClosedSection] = useState<string[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (initialWidth) {
        if (!dragging || resizingHeader === null) return;
        const newWidth = initialWidth + event.clientX;
        resizingHeader.style.width = `${newWidth}px`;
        const currentActiveId = resizingHeader.getAttribute("id");

        for (let i = 0; i < headers.length; i++) {
          if (currentActiveId === `${childKey}-${headers[i].id}`) {
            const tableCells = document.getElementsByClassName(
              `table-cell-common-${headers[i].id}`
            );
            for (let i = 0; i < tableCells.length; i++) {
              //@ts-expect-error
              tableCells[i].style.width = `${newWidth}px`;
            }
          }
        }
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
      setResizingHeader(null);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, initialWidth, resizingHeader]);

  const handleMouseDown = (event: any, header: any) => {
    setInitialWidth(header.offsetWidth - event.clientX);
    setDragging(true);
    setResizingHeader(header);
  };

  const openCloseSections = (sectionId: string) => {
    if (closedSections.includes(sectionId)) {
      setClosedSection(closedSections.filter((id) => id !== sectionId));
    } else {
      setClosedSection([...closedSections, sectionId]);
    }
  };

  return (
    <DragDropContext
      onDragEnd={(result: any) =>
        handleDragEnd(result, tableData, setTableData)
      }
    >
      <div className="dnd-table">
        <div>
          <table
            className="w-100"
            style={{
              borderCollapse: "collapse",
            }}
          >
            <thead className="table-header-row">
              {headers.map(({ id, title }: any) => {
                return (
                  <th id={`${childKey}-${id}`} className="table-cell-common">
                    {title}
                    <span
                      className="resize-handle"
                      onMouseDown={(event: any) =>
                        handleMouseDown(event, event.target.parentElement)
                      }
                    ></span>
                  </th>
                );
              })}
            </thead>
          </table>
        </div>

        <div id="text-row-wrapper">
          {loading ? (
            <div>
              <div>
                <div
                  style={{
                    height: "200px",
                  }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Spinner />
                </div>
              </div>
            </div>
          ) : (
            <Droppable droppableId="board-id" type="droppable-section">
              {(provided: any) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {tableData?.map((parent: any, parentIndex: number) => (
                    <Draggable
                      key={parent.id ? parent.id : `parent${parentIndex}`}
                      draggableId={
                        parent.id ? parent.id : `parent${parentIndex}`
                      }
                      index={parentIndex}
                    >
                      {(provided: any) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`accordion-section ${
                              closedSections.includes(parent?.id)
                                ? "closed"
                                : ""
                            }`}
                          >
                            <>
                              <table
                                style={{
                                  width: "100%",
                                  borderCollapse: "collapse",
                                }}
                                className={`accordion-header ${
                                  closedSections.includes(parent?.id)
                                    ? "closed"
                                    : ""
                                }`}
                              >
                                <thead
                                  {...provided.dragHandleProps}
                                  className="parent-row"
                                >
                                  <th className="name-column">
                                    <DragIndicator
                                      className="drag-handle"
                                      fontSize="small"
                                    />

                                    {!closedSections.includes(parent.id) ? (
                                      <KeyboardArrowDown
                                        style={{
                                          color: "var(--color-ternary-text)",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          openCloseSections(parent.id);
                                        }}
                                      />
                                    ) : (
                                      <KeyboardArrowRight
                                        style={{
                                          color: "var(--color-ternary-text)",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          openCloseSections(parent.id);
                                        }}
                                      />
                                    )}
                                    {parentRender(parentIndex, parent)}
                                  </th>
                                </thead>
                              </table>
                              <Droppable
                                key={parentIndex}
                                droppableId={
                                  parent?.id
                                    ? parent.id
                                    : `parent${parentIndex}`
                                }
                                type="droppable-card"
                              >
                                {(provided: any) => {
                                  return (
                                    <div
                                      className={`accordion-content ${
                                        closedSections.includes(parent?.id)
                                          ? "closed"
                                          : "opened"
                                      }`}
                                      ref={provided.innerRef}
                                      {...provided.droppableProps}
                                    >
                                      {parent?.[subDataKey]?.map(
                                        (child: any, childIndex: number) => {
                                          return (
                                            <Draggable
                                              key={
                                                child?.id
                                                  ? child.id
                                                  : `child${childIndex}`
                                              }
                                              draggableId={
                                                child?.id
                                                  ? child.id
                                                  : `child${childIndex}`
                                              }
                                              index={childIndex}
                                            >
                                              {(provided: any) => {
                                                return (
                                                  <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    className="inner-item"
                                                  >
                                                    <table
                                                      style={{
                                                        borderCollapse:
                                                          "collapse",
                                                      }}
                                                      className="dnd-table"
                                                      onClick={() =>
                                                        rowSelected(
                                                          parentIndex,
                                                          childIndex,
                                                          childKey?.toUpperCase()
                                                        )
                                                      }
                                                    >
                                                      <thead
                                                        className={`header-row ${
                                                          selectedRow[
                                                            childKey + "Index"
                                                          ] === childIndex &&
                                                          selectedRow[
                                                            parentKey + "Index"
                                                          ] == parentIndex
                                                            ? "selected-row"
                                                            : ""
                                                        } ${
                                                          checkAnimation[
                                                            parentKey + "Index"
                                                          ] === parentIndex &&
                                                          checkAnimation[
                                                            childKey + "Index"
                                                          ] === childIndex
                                                            ? "check-animation"
                                                            : ""
                                                        }`}
                                                        key={child?.id}
                                                      >
                                                        {headers.map(
                                                          (
                                                            {
                                                              id,
                                                              title,
                                                              key,
                                                              render,
                                                            }: any,
                                                            columnIndex: number
                                                          ) => {
                                                            return (
                                                              <th
                                                                id={`child-${id}`}
                                                                key={`child-${id}`}
                                                                className={`table-cell-common table-cell-common-${id}`}
                                                              >
                                                                {columnIndex ===
                                                                0 ? (
                                                                  <div className="d-flex align-items-center">
                                                                    <span
                                                                      {...provided.dragHandleProps}
                                                                    >
                                                                      <DragIndicator
                                                                        className="drag-handle mr-4"
                                                                        fontSize="small"
                                                                      />
                                                                    </span>
                                                                    <span>
                                                                      <Checkbox
                                                                        size="small"
                                                                        disableRipple
                                                                        checkedIcon={
                                                                          <CheckCircleOutline
                                                                            style={{
                                                                              color:
                                                                                "var(--color-success)",
                                                                            }}
                                                                          />
                                                                        }
                                                                        icon={
                                                                          <CheckCircleOutline
                                                                            style={{
                                                                              color:
                                                                                "var(--color-ternary-text)",
                                                                            }}
                                                                          />
                                                                        }
                                                                        checked={checkedRows(
                                                                          child
                                                                        )}
                                                                        onChange={(
                                                                          event,
                                                                          checked
                                                                        ) =>
                                                                          setCheckedRows(
                                                                            parentIndex,
                                                                            childIndex,
                                                                            checked
                                                                          )
                                                                        }
                                                                      />
                                                                    </span>
                                                                    {render(
                                                                      parentIndex,
                                                                      childIndex,
                                                                      child
                                                                    )}
                                                                  </div>
                                                                ) : (
                                                                  render(
                                                                    parentIndex,
                                                                    childIndex,
                                                                    child
                                                                  )
                                                                )}
                                                              </th>
                                                            );
                                                          }
                                                        )}
                                                      </thead>
                                                    </table>
                                                  </div>
                                                );
                                              }}
                                            </Draggable>
                                          );
                                        }
                                      )}

                                      <table
                                        className="w-100"
                                        style={{
                                          border: "none",
                                          borderCollapse: "collapse",
                                        }}
                                      >
                                        <tr className="add-child-row">
                                          <td className="pl-4">
                                            <div
                                              className="add-child"
                                              onClick={() => {
                                                handleAddChild(parentIndex);
                                              }}
                                            >
                                              Add {childKey}...
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                      {provided.placeholder}
                                    </div>
                                  );
                                }}
                              </Droppable>
                            </>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </div>
      </div>
    </DragDropContext>
  );
}

export default DnDTable;
