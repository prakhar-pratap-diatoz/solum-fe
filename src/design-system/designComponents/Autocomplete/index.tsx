import {
  FocusEventHandler,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from "react";
import { InfoOutlined } from "@mui/icons-material";
import {
  Autocomplete as MaterialAutocomplete,
  Paper,
  TextField,
  InputAdornment,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
  AutocompleteRenderOptionState,
} from "@mui/material";
import { DropdownIcon } from "../../assets";
import "./style.scss";

interface CustomAutocompleteProps {
  id: string;
  className?: string;
  heading?: string;
  required?: boolean;
  multiple?: boolean;
  freeSolo?: boolean;
  fullWidth?: boolean;
  subHeading?: string;
  disablePortal?: boolean;
  disabled?: boolean;
  getOptionLabel?: (option: any) => string;
  options?: Array<any> | any[];
  isPopupIcon?: boolean;
  value?: string | undefined | any;
  placeholder?: string;
  disableClearable?: boolean;
  includeInputInList?: boolean;
  filterSelectedOptions?: boolean;
  noOptionsText?: ReactNode | string;
  clearOnBlur?: boolean;
  onInputChange?: (
    event: SyntheticEvent,
    value: string,
    reason: string
  ) => void;
  filterOptions?: any; // (options: Array<any>, state: object) => Array<any>
  isOptionEqualToValue?: (option: any, value: any) => boolean;
  limitTags?: number;
  onChange?: (
    event: SyntheticEvent<Element, Event>,
    value: any,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<any> | undefined
  ) => void;
  onBlur?: FocusEventHandler<HTMLDivElement> | undefined;
  renderOption?: (
    props: HTMLAttributes<HTMLLIElement>,
    option: any,
    state: AutocompleteRenderOptionState
  ) => ReactNode | undefined;
  renderTags?: (
    value: Array<any>,
    getTagProps: Function,
    ownerState: object
  ) => ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  PaperComponent?: any;
  smallField?: boolean;
  onSearch?: any;
  textValue?: string;
  inputValue?: string;
  autoComplete?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  getOptionDisabled?: (option: any) => boolean;
  disableCloseOnSelect?: boolean;
  readOnly?: boolean;
  defaultValue?: any;
  error?: boolean;
  helperText?: string | ReactNode;
  open?: boolean;
  openOnFocus?: boolean;
  componentsProps?: any;
  onOpen?: ((event: SyntheticEvent<Element, Event>) => void) | undefined;
  onClose?: ((event: SyntheticEvent<Element, Event>) => void) | undefined;
  loading?: boolean;
  loadingText?: ReactNode;
  autoFocus?: boolean;
  inputRef?: any;
  isNoDisablePortal?: boolean;
  groupBy?: (option: any) => string;
  autoHighlight?: boolean;
}

function Autocomplete({
  id,
  className,
  heading,
  fullWidth = true,
  freeSolo = false,
  required = false,
  multiple = false,
  subHeading,
  getOptionLabel,
  disabled = false,
  options = [],
  value,
  placeholder,
  onChange,
  isOptionEqualToValue,
  renderOption,
  startIcon,
  isPopupIcon = false,
  endIcon,
  renderTags,
  PaperComponent,
  smallField,
  disableClearable = false,
  autoComplete,
  onSearch,
  textValue = "",
  inputValue,
  onInputChange,
  filterOptions,
  includeInputInList,
  filterSelectedOptions,
  noOptionsText,
  limitTags,
  onKeyDown,
  getOptionDisabled,
  disableCloseOnSelect,
  readOnly = false,
  defaultValue,
  error,
  helperText,
  open,
  clearOnBlur,
  openOnFocus,
  componentsProps,
  onOpen,
  onClose,
  loadingText,
  loading = false,
  autoFocus,
  inputRef,
  onBlur,
  isNoDisablePortal,
  groupBy,
  autoHighlight = false,
}: CustomAutocompleteProps) {
  return (
    <div className={`custom-autocomplete ${className ? className : ""}`}>
      {heading ? (
        <div className="custom-autocomplete-heading">
          {heading}
          {required ? <span className="field-required-icon">*</span> : null}
        </div>
      ) : null}
      {subHeading ? (
        <div className="custom-autoComplete-sub-heading">{subHeading}</div>
      ) : null}
      <div
        className={`design-system-auto-complete ${
          heading ? "auto-complete-wrapper" : ""
        }`}
      >
        <MaterialAutocomplete
          id={id}
          loadingText={loadingText}
          loading={loading}
          fullWidth={fullWidth}
          openOnFocus={openOnFocus}
          inputValue={
            inputValue || inputValue === ""
              ? (inputValue as any)
              : (undefined as any)
          }
          noOptionsText={
            typeof noOptionsText === "string" || !noOptionsText ? (
              <p className="m-0" style={{ color: "var(--color-primary-text)" }}>
                {noOptionsText ? noOptionsText : "No options"}
              </p>
            ) : (
              <>{noOptionsText}</>
            )
          }
          sx={
            smallField
              ? {
                  ".MuiOutlinedInput-input": {
                    height: "28px",
                  },
                }
              : {
                  ".MuiOutlinedInput-input": {
                    height: "32px",
                  },
                }
          }
          onOpen={onOpen ? onOpen : undefined}
          onClose={onClose ? onClose : undefined}
          freeSolo={freeSolo}
          value={value ? value : ""}
          open={open ? open : undefined}
          onChange={onChange}
          componentsProps={componentsProps ? componentsProps : undefined}
          defaultValue={defaultValue ? defaultValue : undefined}
          PaperComponent={
            PaperComponent
              ? PaperComponent
              : ({ children }: { children: any }) => (
                  <Paper style={{ borderRadius: 5 }}>{children}</Paper>
                )
          }
          multiple={multiple}
          includeInputInList={
            includeInputInList ? includeInputInList : undefined
          }
          clearOnBlur={clearOnBlur}
          autoComplete={autoComplete}
          filterSelectedOptions={
            filterSelectedOptions ? filterSelectedOptions : undefined
          }
          onInputChange={onInputChange ? onInputChange : undefined}
          filterOptions={filterOptions ? filterOptions : undefined}
          limitTags={limitTags ? limitTags : undefined}
          options={options}
          disabled={disabled}
          forcePopupIcon={isPopupIcon && freeSolo}
          popupIcon={
            isPopupIcon ? (
              !smallField ? (
                <DropdownIcon fill="var(--color-primary-text)" />
              ) : (
                <DropdownIcon fill="var(--color-primary-text)" />
              )
            ) : null
          }
          onKeyDown={onKeyDown}
          getOptionLabel={getOptionLabel ? getOptionLabel : undefined}
          groupBy={groupBy ? groupBy : undefined}
          isOptionEqualToValue={
            isOptionEqualToValue ? isOptionEqualToValue : undefined
          }
          renderOption={renderOption ? renderOption : undefined}
          renderTags={renderTags ? renderTags : undefined}
          disablePortal={isNoDisablePortal ? false : true}
          disableClearable={disableClearable}
          getOptionDisabled={getOptionDisabled}
          disableCloseOnSelect={disableCloseOnSelect}
          readOnly={readOnly}
          onBlur={onBlur ? onBlur : undefined}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              size="small"
              error={error ? error : undefined}
              onChange={onSearch}
              autoFocus={autoFocus ? autoFocus : undefined}
              inputRef={inputRef ? inputRef : undefined}
              value={textValue ? textValue : undefined}
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                startAdornment: startIcon ? (
                  <>
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                  </>
                ) : (
                  params.InputProps.startAdornment
                ),

                endAdornment: endIcon ? (
                  <>
                    <InputAdornment position="end">{endIcon}</InputAdornment>
                    {params.InputProps.endAdornment}
                  </>
                ) : (
                  params.InputProps.endAdornment
                ),
              }}
            />
          )}
          renderGroup={(params) => (
            <li key={params.key}>
              <div className="params-group-header">{params.group}</div>
              <div className="params-group-header-desc">{params.children}</div>
            </li>
          )}
          autoHighlight={autoHighlight}
        />
        {error && helperText ? (
          <div className="text-field-helper-error-text">
            <InfoOutlined className="text-field-helper-text-icon" />
            {helperText}
          </div>
        ) : helperText ? (
          <div className="text-field-helper-text">{helperText}</div>
        ) : null}
      </div>
    </div>
  );
}
export default Autocomplete;
