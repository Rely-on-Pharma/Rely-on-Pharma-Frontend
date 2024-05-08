import { checkError } from '@/common/utils/validateHelpers';
import { MemoizedAutoSelectDropDown } from '@/constants/SDK/autoCompleteSelect';
import { MemoizedInputField } from '@/constants/SDK/customInput';
import { MemoizedSelectDropDown } from '@/constants/SDK/selectDropdown';
import { brandOptions, categoryOptions, verticalsOptions,  } from '@/constants/data/adminFormData';

const CategorySelection = ({form}) => {
  return (
    <>
        <MemoizedInputField
          type={"text"}
          label={"Enter producct name"}
          name="name"
          value={form?.values?.name}
          onChange={(e) => form?.setFieldValue("name", e?.target?.value)}
        />
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
              id={"vartical"}
              name="vartical" 
              required={true}
              form={form}
              label={"hello"}
              value={form?.values?.vartical}
              helperText={form?.errors?.vartical}
              title={"Select varticals"}
              optionsData={verticalsOptions}
              onChange={(e) => {
                const val = e?.target?.value;
                form?.setFieldValue("vartical", val);
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