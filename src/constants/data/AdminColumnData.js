export const listingPageColumns = [
    { id: "name", label: "Product", minWidth: 170 },
    { id: "price", label: "Price", minWidth: 100 },
    {
      id: "category",
      label: "Category",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "brand",
      label: "Brand",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  export const inventoryPageColumns = [
    { id: "name", label: "Product Information", minWidth: 200 },
    { id: "stock", label: "Current Stock", minWidth: 150 },
    {
      id: "rate",
      label: "Sale rate/ Month",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "action",
        label: "Action",
        minWidth: 170,
        align: "right",
      },
  ];