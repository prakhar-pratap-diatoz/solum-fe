import React, { ChangeEvent, useEffect } from "react";
import { Box } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import countries from "./countries.json";
import "./styles.scss";
import { Autocomplete, TextField } from "..";

interface PhoneNumberInputProps {
  currentValue: any;
  handleChange: Function;
  onBlur?: Function;
  setHasError?: (value: boolean) => void;
  id?: string;
}

function PhoneNumberInput({
  currentValue,
  handleChange,
  onBlur,
  setHasError,
  id,
}: PhoneNumberInputProps) {
  const filterOptions: any = createFilterOptions({
    matchFrom: "any",
    stringify: (option: any) => option.name + " " + option.dialCode,
  });

  const numberDigits = countries.find(
    (x: any) => currentValue?.dialCode === x?.dialCode
  )?.allowedNumberOfDigits;

  useEffect(() => {
    setHasError &&
      setHasError(
        currentValue?.phoneNumber?.length !== 0
          ? numberDigits !== null
            ? currentValue?.phoneNumber?.length === numberDigits
            : true
          : true
      );
  }, [handleChange]);
  return (
    <div id="mobile-number-with-dial-code-container" className="w-100">
      <TextField
        id={id}
        type="number"
        className="mobile-number-with-dial-code w-100"
        placeholder="Enter mobile number"
        value={currentValue?.phoneNumber}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
          handleChange({
            ...currentValue,
            phoneNumber: value,
          });
        }}
        error={
          !(currentValue?.phoneNumber?.length !== 0
            ? numberDigits !== null
              ? currentValue?.phoneNumber?.length === numberDigits
              : true
            : true)
        }
        helperText={
          !(currentValue?.phoneNumber?.length !== 0
            ? numberDigits !== null
              ? currentValue?.phoneNumber?.length === numberDigits
              : true
            : true)
            ? "Enter valid mobile number"
            : ""
        }
        onBlur={() => onBlur && onBlur(currentValue)}
        startIcon={
          <Autocomplete
            smallField
            id="dial-code-dropdown"
            disableClearable
            options={countries.filter(({ dialCode }: any) => dialCode) ?? []}
            filterOptions={filterOptions}
            value={currentValue?.dialCode}
            getOptionLabel={(opt) => {
              return opt?.dialCode ?? opt;
            }}
            onChange={(_, val) => {
              if (currentValue?.phoneNumber) {
                if (onBlur)
                  onBlur({
                    dialCode: val?.dialCode,
                    phoneNumber: currentValue?.phoneNumber,
                  });
              } else {
                handleChange({
                  ...currentValue,
                  dialCode: val.dialCode,
                });
              }
            }}
            renderOption={(props: any, option: any) => {
              return (
                <Box
                  component="li"
                  sx={{
                    "& > img": {
                      mr: 2,
                      flexShrink: 0,
                    },
                  }}
                  {...props}
                  key={option?.id}
                >
                  <img loading="lazy" width="20" src={option?.flag} alt="" />
                  {option?.dialCode ? `[${option?.dialCode}]` : null}
                  {"  "}
                  {option.name}{" "}
                  {option.countryCode ? `(${option.countryCode})` : null}{" "}
                </Box>
              );
            }}
            placeholder="+91"
          />
        }
      />
    </div>
  );
}

export default PhoneNumberInput;
