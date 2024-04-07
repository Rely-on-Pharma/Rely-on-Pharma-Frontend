import { useFormik } from "formik";

const useAddNewProductForm = (handleSubmit) => {
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
        category:"",
        verticals:"",
        brand:"",
        sellerId:"",
        status:"",
        mrp:"",
        sellingPrice:"",
        country:"",
        manufacturerDetails:"",
        shelfLife:"",
        localDeliveryCharge:"",
        zonalDelieryCharge:"",
        nationalDelieryCharge:"",
        description:"",
        ingredients:"",
        howToUse:"",
        variants:[],
        productImages:[]
    },
    validate: (values) => {
        const errors = {};

        if(!values?.category){
            errors.category = "Category field cannot be empty!"
        }
        if(!values?.verticals){
            errors.verticals = "Category field cannot be empty!"
        }
        if(!values?.brand){
            errors.brand = "Category field cannot be empty!"
        }
        if(!values?.status){
            errors.status = "Category field cannot be empty!"
        }
        if(!values?.mrp){
            errors.mrp = "Category field cannot be empty!"
        }
        if(!values?.sellerId){
            errors.sellerId = "Category field cannot be empty!"
        }
        if(!values?.mrp){
            errors.mrp = "Category field cannot be empty!"
        }
        return errors;
      },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return {
    form,
  };
};

export default useAddNewProductForm;
