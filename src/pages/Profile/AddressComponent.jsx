import { useState ,useEffect } from "react";
import TextField from "@mui/material/TextField";
import { colors } from "@/constants/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

const HomeAddressBox = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const modifyAddress = (address) => {
  const token = localStorage.getItem('token').slice(1,-1) // the token string is "token". Hence stripping the "
    const url = 'http://localhost:8000/address'

     console.log(address)
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Example authorization header
      },
      body: JSON.stringify(address)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('PUT request succeeded with JSON response:', data);
    })
    .catch(error => {
      console.error('There was a problem with the PUT request:', error);
    });

  }
  const addNewAddress = (address) => {
  const token = localStorage.getItem('token').slice(1,-1) // the token string is "token". Hence stripping the "
    const url = 'http://localhost:8000/address'

     console.log(address)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Example authorization header
      },
      body: JSON.stringify(address)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('POST request succeeded with JSON response:', data);
    })
    .catch(error => {
      console.error('There was a problem with the POST request:', error);
    });

  }
  const handleAddAddressClick = () => {
    const newAddress = {pincode: 0, address_line: "",user_tag: "", isEditing: true}
    setAddresses([...addresses,newAddress]);
    console.log(newAddress)
  };

  const handleEditClick = (index) => {
    console.log(index)
    addresses[index].isEditing = true;
    const newAddresses = JSON.parse(JSON.stringify(addresses))
    setAddresses(newAddresses);
  };

  const handleSaveClick = (index) => {
    if(addresses[index].id === undefined ){
        addNewAddress({user_tag: addresses[index].user_tag, address_line: addresses[index].address_line, pincode: addresses[index].pincode})
    }
    else{
        modifyAddress({id: addresses[index].id,user_tag: addresses[index].user_tag, address_line: addresses[index].address_line, pincode: addresses[index].pincode})
      }

    addresses[index].isEditing = false;
    const newAddresses = JSON.parse(JSON.stringify(addresses))
    setAddresses(newAddresses);
  };

  const handleTitleChange = (event,index) => {
    console.log(index)
    addresses[index].user_tag = event.target.value;
    const newAddresses = JSON.parse(JSON.stringify(addresses))
    setAddresses(newAddresses);
  };

  const handlePincodeChange = (event,index) => {
    addresses[index].pincode = event.target.value;
    const newAddresses = JSON.parse(JSON.stringify(addresses))
    setAddresses(newAddresses);
  };
  const handleAddressChange = (event,index) => {
    addresses[index].address_line = event.target.value;
    const newAddresses = JSON.parse(JSON.stringify(addresses))
    setAddresses(newAddresses);
  };
   useEffect(() => {
    // Function to fetch data from the API
    const token = localStorage.getItem('token').slice(1,-1) // the token string is "token". Hence stripping the "
    const headers = {
      'Content-Type': 'application/json', // Example content type
      'Authorization': `Bearer ${token}` // Example authorization header
    };

    // Define the options for the fetch request
    const requestOptions = {
      method: 'GET', // Specify the request type (GET, POST, etc.)
      headers: headers // Pass the headers object
    };
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/address',requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const addresses = await response.json();
        addresses.forEach((address) => {address['isEditable'] = false})
        setAddresses(addresses);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
    }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row", md: "row", lg: "row" }}
      gap={2}
    >
      
      {addresses.map( (address,index) => {

        return (
        <Box
        key = {index}
        sx={{
          borderRadius: 5,
          border: 1,
          borderColor: "black",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          maxWidth: { xs: "100", sm: "100%", md: "50%", lg: "50%" },
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            color={colors?.primaryDark}
            sx={{
              fontSize: { xs: "4vw", md: "3vw", lg: "1.7vw" },
            }}
          >
            {address.isEditing ? (
              <TextField
                placeholder = {"Name (Eg: Work)"}
                value={address.user_tag}
                onChange={(event) => { handleTitleChange(event,index) } }
                size="small"
                width="30%"
              />
            ) : (
              address.user_tag
            )}
          </Typography>
          <Button
            variant="outlined"
            onClick={address.isEditing ? () => handleSaveClick(index) : () => handleEditClick(index) }
            sx={{
              border: "1px solid black",
              backgroundColor: colors?.primaryMedium,
              borderRadius: "8px",
              boxShadow: "none",
              marginX: "1rem",
            }}
          >
            {address.isEditing ? "Save" : "Edit"}
          </Button>
        </Box>
        <Typography variant="body1" mt={2}>
          {address.isEditing ? (
            <TextField
              placeholder = {"Enter your address"}
              value={address.address_line}
              onChange={(event) => handleAddressChange(event,index) }
              size="small"
              multiline
              width="40%"
              rows={4}
            />
          ) : (
            address.address_line
          )}
        </Typography>
        <Typography variant="body1" mt={2}>
          {address.isEditing ? (
            <TextField
              placeholder = {"Enter Pincode"}
              value={address.pincode}
              type = "number"
              onChange={(event) => handlePincodeChange(event,index) }
              size="small"
              multiline
              width="40%"
              rows={4}
            />
          ) : (
            address.pincode
          )}
        </Typography>
      </Box>
       )})}
      <Box
        sx={{
          borderRadius: 5,
          border: 1,
          borderStyle: "dashed",
          borderColor: "black",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "100%",
            sm: "fit-content",
            md: "fit-content",
            lg: "fit-content",
          },
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={handleAddAddressClick}
          sx={{ cursor: "pointer" }}
        >
          <Box display="flex" alignItems="center">
            <AddIcon sx={{ mr: 1 }} />
            <Typography
              color={colors?.primaryDark}
              sx={{
                fontSize: { xs: "2vw", md: "3vw", lg: "1.7vw" },
              }}
            >
              Add Address
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeAddressBox;
