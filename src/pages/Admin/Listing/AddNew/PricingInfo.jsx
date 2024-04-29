import { MemoizedInputField } from "@/constants/SDK/customInput";
import { MemoizedSelectDropDown } from "@/constants/SDK/selectDropdown";
import { statusOptions } from "@/constants/data/adminFormData";
import { Box, Typography } from "@mui/material";

const PricingInfo = ({form}) => {

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <MemoizedInputField
          type={"number"}
          label={"Seller SKU ID/vendor id"}
          name="vendor_id"
          value={form?.values?.vendor_id}
          onChange={(e) => form?.setFieldValue("vendor_id", e?.target?.value)}
        />
        <MemoizedSelectDropDown
          form={form}
          optionsData={statusOptions}
          id={"status"}
          name="status"
          required={true}
          value={form?.values?.status}
          helperText={form?.errors?.status}
          title={"Select Status"}
          onChange={(e) => {
            const val = e?.target?.value;
            form?.setFieldValue("status", val);
          }}
        />
        <MemoizedInputField
          type={"number"}
          label={"MRP"}
          name="mrp"
          value={form?.values?.mrp}
          onChange={(e) => form?.setFieldValue("mrp", e?.target?.value)}
        />
        <MemoizedInputField
          type={"number"}
          label={"Your selling Price"}
          value={form?.values?.selling_price}
          onChange={(e) =>
            form?.setFieldValue("selling_price", e?.target?.value)
          }
        />
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
            id={"country_of_origin"}
            name="country_of_origin"
            required={true}
            value={form?.values?.country_of_origin}
            helperText={form?.errors?.country_of_origin}
            title={"Select country_of_origin"}
            onChange={(e) => {
              const val = e?.target?.value;
              form?.setFieldValue("country_of_origin", val);
            }}
          />
          <MemoizedInputField
            type={"number"}
            label={"Shelf Life"}
            name="shelf_life"
            value={form?.values?.shelf_life}
            onChange={(e) =>
              form?.setFieldValue("shelf_life", e?.target?.value)
            }
          />
        </Box>
        <MemoizedInputField
          type={"text"}
          label="Manufaturer Details"
          rows={4}
          multiline={true}
          name="shelf_life"
          value={form?.values?.manufacturing_details}
          onChange={(e) =>
            form?.setFieldValue("manufacturing_details", e?.target?.value)
          }
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
        <MemoizedInputField
          type={"number"}
          label={"Local Delivery Chargers"}
          name="local_delivery_charge"
          value={form?.values?.local_delivery_charge}
          onChange={(e) => {
            form.handleChange(e);
          }}
        />
        <MemoizedInputField
          type={"number"}
          label={"Zonal Delivery Chargers"}
          name="zonal_delivery_charge"
          value={form?.values?.zonal_delivery_charge}
          onChange={(e) =>
            form?.setFieldValue("zonal_delivery_charge", e?.target?.value)
          }
        />
        <MemoizedInputField
          type={"number"}
          label={"National Delivery Chargers"}
          name="shelf_life"
          value={form?.values?.national_delivery_charge}
          onChange={(e) =>
            form?.setFieldValue("national_delivery_charge", e?.target?.value)
          }
        />
      </Box>
    </>
  );
};

export default PricingInfo;
