import AppContext from "@/constants/context/context";
import {
  useFormik
} from "formik";
import {
  useContext,
  useEffect,
  useState
} from "react";

const useUpdateProductForm = (productId, router) => {
  const {
    showSnackbar
  } = useContext(AppContext)
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (!productId) {
      showSnackbar("Invalid Product ID unable to fetch", "error")
      return;
    }
    const token = localStorage.getItem('token').slice(1, -1) // the token string is "token". Hence stripping the 

    if (!token || token === undefined || token === null) {
      showSnackbar("You need to login/signup to process the order", "info")
      router.push("/login")
    }
    const headers = {
      "Content-Type": "application/json", // Example content type
      Authorization: `Bearer ${token}`, // Example authorization header
    };
    const fetchData = async (productId) => {
      try {
        const resp = await fetch(`http://localhost:8000/products/${productId}`, {
          method: "GET",
          headers: headers,
        })

        const jsonData = await resp.json();
        setProductData(jsonData);

      } catch (error) {
        console.error("yash", error);
        showSnackbar(error?.message || "unable to fetch data", "error");
      }
    }

    fetchData(productId);
  }, [productId, router, showSnackbar]);

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem('token').slice(1, -1) // the token string is "token". Hence stripping the 

      if (!token || token === undefined || token === null) {
        showSnackbar("You need to login/signup to process the order", "info")
        router.push("/login")
      }
      const headers = {
        "Content-Type": "application/json", // Example content type
        Authorization: `Bearer ${token}`, // Example authorization header
      };
      const resp = await fetch(`http://localhost:8000/products/${productId}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(values)
      })
      if (!resp?.ok) {
        throw new Error("Unable to creta product");
      }
    } catch (error) {
      console.log("yash", error)
      showSnackbar(error?.message || "Unable to update the product", "error");
    }
  }
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues:{
      name: "",
      brand: "",
      vertical: "",
      category: "",
      vendor_id: null,
      description: "",
      ingredients: "",
      selling_price: null,
      how_to_use: "",
      quantity: null,
      listing_status: "",
      country_of_origin: "",
      manufacturing_details: "",
      shelf_life: null,
      local_delivery_charge: null,
      zonal_delivery_charge: null,
      national_delivery_charge: null,
      mrp: null,
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return {
    form,
    productData
  };
};

export default useUpdateProductForm;