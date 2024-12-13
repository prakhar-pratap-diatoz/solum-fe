import { Pagination , Select , MenuItem} from "@mui/material";
import "./style.scss";

interface PaginationComponentProps{
page : number;
setPage ?: (value : number)=> void;
size : number;
setSize ?: (value : number)=> void;
totalCount : number;
setTotalCount ?: (value : number)=> void;
}

const PaginationComp = ({page , setPage , size , setSize , totalCount , setTotalCount} : PaginationComponentProps) => {



  const handleChange = (e : any) => {
   if(setPage) setPage(1);
   if(setSize) setSize(e.target.value);
  };


  return (
    <div className="pagination-component-parent-wrapper">
      <Select
          labelId="demo-simple-select-label"
          id="pagination-size-select"
          value={size}
          size="small"
          onChange={handleChange}
          MenuProps={{classes : {paper : "pagination-size-dropdown-popper"}}}
        >
          <MenuItem value={20}>20 / Page</MenuItem>
          <MenuItem value={50}>50 / Page</MenuItem>
          <MenuItem value={100}>100 / Page</MenuItem>
        </Select>
      <div className="d-flex justify-content-center">
        <Pagination
          count={totalCount ? Math.ceil(totalCount / size) : 1}
          variant="outlined"
          shape="rounded"
          onChange={(e, page) => {
          if(setPage)  setPage(page);
          }}
          page={page}
          defaultPage={1}
        />
      </div>
    </div>
  );
};

export default PaginationComp;
