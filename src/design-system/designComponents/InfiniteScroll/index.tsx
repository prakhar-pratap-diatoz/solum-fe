import { ReactNode } from "react";
import InfiniteScrollPagination from "react-infinite-scroller";
import { CircularProgress } from "@mui/material";
import "./styles.scss";

const InfiniteScroll = ({
  children,
  hasMore,
  fetchInfo,
  key,
  useWindow,
  height,
}: {
  children: ReactNode;
  hasMore: boolean;
  fetchInfo: (value: number) => void;
  key?: number | string;
  useWindow?: boolean;
  height?: string;
}) => {
  return (
    <div
      id="e2e_design_infinite_scroll"
      style={{ height: height ? height : "calc(100vh - 280px)" }}
    >
      <InfiniteScrollPagination
        key={key ? key : "0"}
        initialLoad={false}
        pageStart={0}
        loadMore={(value: any) => {
          fetchInfo(value);
        }}
        hasMore={hasMore}
        loader={
          <div className="scroll-loader">
            <CircularProgress color="success" />
          </div>
        }
        useWindow={false}
      >
        {children}
      </InfiniteScrollPagination>
    </div>
  );
};

export default InfiniteScroll;
