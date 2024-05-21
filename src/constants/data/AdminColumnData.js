export const listingPageColumns = [
  { id: "name", label: "Product", minWidth: 170 },
  { id: "selling_price", label: "Price", minWidth: 100 },
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
    align: "center",
  },
];

export const inventoryPageColumns = [
  { id: "name", label: "Product Information", minWidth: 200, align: "left" },
  { id: "quantity", label: "Current Stock", minWidth: 150, align: "center" },
  // {
  //   id: "selling_price",
  //   label: "Current Stock",
  //   minWidth: 150,
  //   align: "center",
  // },
  // {
  //   id: "sales_count",
  //   label: "Sale rate/ Month",
  //   minWidth: 170,
  //   align: "center",
  //   format: (value) => value.toLocaleString("en-US"),
  // },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

export const orderPageColumns = [
  { id: "id", label: "Order ID", minWidth: 170 },
  {
    id: "final_amount",
    label: "Price",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
    align: "right",
  },
  {
    id: "products",
    label: "Products",
    minWidth: 170,
    align: "right",
  },
  {
    id: "date",
    label: "Order Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "address",
    label: "Customer Address",
    minWidth: 170,
    align: "right",
  },
  {
    id: "action",
    label: "Tracking ID",
    minWidth: 170,
    align: "right",
  },
];

export const dummyOrdersRows = [
  {
    orderId: "ORD001",
    products: [
      { productName: "Product A", quantity: 2 },
      { productName: "Product B", quantity: 1 },
      { productName: "Product C", quantity: 3 },
    ],
    totalPrice: 250, // Total price of the order
    orderDate: "2024-04-07", // Date of the order
    customerAddress: "123 Main Street, City, Country", // Customer address
    trackingId: 1234,
  },
  {
    orderId: "ORD002",
    products: [
      { productName: "Product X", quantity: 1 },
      { productName: "Product Y", quantity: 2 },
    ],
    totalPrice: 150,
    orderDate: "2024-04-06",
    customerAddress: "456 Elm Street, City, Country",
    trackingId: 1254,
  },
  {
    orderId: "ORD003",
    products: [
      { productName: "Product M", quantity: 5 },
      { productName: "Product N", quantity: 2 },
      { productName: "Product O", quantity: 1 },
    ],
    totalPrice: 400,
    orderDate: "2024-04-05",
    customerAddress: "789 Oak Avenue, City, Country",
  },
];

export const feedbackPageColumns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 150 },
  {
    id: "feedback",
    label: "Feedback",
    minWidth: 200,
  },
];
