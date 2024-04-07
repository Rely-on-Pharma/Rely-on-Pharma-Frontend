import useAddNewProductForm from "@/common/Hooks/addnewForm";
import { MemoizedInputField } from "@/constants/SDK/customInput";
import { MemoizedSelectDropDown } from "@/constants/SDK/selectDropdown";
import { statusOptions } from "@/constants/data/adminFormData";
import { Box, Typography } from "@mui/material";
import React from "react";

const PricingInfo = () => {
  const { form } = useAddNewProductForm();
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <MemoizedInputField type={"text"} label={"Seller SKU ID"} />
        <MemoizedSelectDropDown
          form={form}
          optionsData={statusOptions}
          id={"Status"}
          name="Status"
          required={true}
          value={form?.values?.status}
          helperText={form?.errors?.status}
          title={"Select Status"}
          onChange={(e) => {
            const val = e?.target?.value;
            form?.setFieldValue("status", val);
          }}
        />
        <MemoizedInputField type={"number"} label={"MRP"} />
        <MemoizedInputField type={"number"} label={"Your selling Price"} />
      </Box>
      <Box style={{ margin: "1rem 0" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <MemoizedSelectDropDown
            form={form}
            optionsData={statusOptions}
            id={"country"}
            name="country"
            required={true}
            value={form?.values?.country}
            helperText={form?.errors?.country}
            title={"Select country"}
            onChange={(e) => {
              const val = e?.target?.value;
              form?.setFieldValue("country", val);
            }}
          />
          <MemoizedInputField type={"number"} label={"Shelf Life"} />
        </Box>
        <MemoizedInputField
          type={"text"}
          label="Manufaturer Details"
          rows={4}
          multiline={true}
        />
      </Box>

      <Typography>Delivery Details</Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <MemoizedInputField type={"number"} label={"Local Delivery Chargers"} />{" "}
        <MemoizedInputField type={"number"} label={"Zonal Delivery Chargers"} />{" "}
        <MemoizedInputField
          type={"number"}
          label={"National Delivery Chargers"}
        />
      </Box>
    </>
  );
};

export default PricingInfo;
