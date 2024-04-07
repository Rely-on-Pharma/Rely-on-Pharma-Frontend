import useAddNewProductForm from '@/common/Hooks/addnewForm';
import { checkError } from '@/common/utils/validateHelpers';
import { MemoizedAutoSelectDropDown } from '@/constants/SDK/autoCompleteSelect';
import { MemoizedSelectDropDown } from '@/constants/SDK/selectDropdown';
import { brandOptions, categoryOptions, verticalsOptions } from '@/constants/data/adminFormData';
import { Box } from '@mui/material';
import React from 'react'

const CategorySelection = () => {
    const {form} = useAddNewProductForm()
  return (
    <>
            <MemoizedSelectDropDown className="input-dropdown"
              id={"category"}
              name="category" 
              required={true}
              form={form}
              value={form?.values?.category}
              helperText={form?.errors?.category}
              title={"Select Category"}
              optionsData={categoryOptions}
              label={"hello"}

              onChange={(e) => {
                const val = e?.target?.value;
                form?.setFieldValue("category", val);
              }}/>
              <MemoizedSelectDropDown className="input-dropdown"
              id={"verticals"}
              name="verticals" 
              required={true}
              form={form}
              label={"hello"}
              value={form?.values?.verticals}
              helperText={form?.errors?.verticals}
              title={"Select verticals"}
              optionsData={verticalsOptions}
              onChange={(e) => {
                const val = e?.target?.value;
                form?.setFieldValue("verticals", val);
              }}/>
              <MemoizedAutoSelectDropDown
              id="brand-options"
              name="brand"
              required={true}
              value={form?.values?.brand}
              label="Select brand"
              options={brandOptions}
              helperText={form?.errors?.brand}
              error={!!checkError("brand", form)}
              onChange={(event, newValue) => {
                form?.setFieldValue("brand", newValue);
              }}
              onInputChange={(event, inputValue) => {
                form?.setFieldValue("brand", inputValue);
              }}
              className="input-dropdown"
            />
        </>
  )
}

export default CategorySelection