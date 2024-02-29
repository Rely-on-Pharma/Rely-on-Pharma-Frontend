import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material';
import { colors } from '@/constants/colors';
const CustomDescriptionTab = styled(Box)(({theme})=>({
  width: '100%',
  marginBlock:"2rem auto",
  ".tab":{
    marginInline:"12px",
    color:colors?.primaryBase,
    letterSpacing:"1px",
    "&.active":{
      fontWeight:"700"
    }
  },
  ".tabPanel":{
    width:"80%",
    margin:"auto",
    color:colors?.black,
    },
    [theme.breakpoints.down("md")]:{
      ".tab":{
        marginInline:"0px",
        letterSpacing:"0px",
      },
      ".tabPanel":{
        width:"100%",
        },
    }

}))
const DescriptionTab = ({desc="", howToUse="", ingredients=""}) => {
  let tabsData = [
    { label: 'Description', value: '1', content: desc },
    { label: 'How To Use', value: '2', content: howToUse },
    { label: 'Ingredients', value: '3', content: ingredients},
  ]; 
  const [value, setValue] = React.useState(tabsData[0]?.value || null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomDescriptionTab sx={{ typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} className='tablist' aria-label="generalized tabs example" centered>
            {tabsData.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} className={tab?.value === value ? 'tab active' : 'tab'}  />
            ))}
          </TabList>
        </Box>
        {tabsData.map((tab) => (
          <TabPanel className='tabPanel' key={tab.value} value={tab.value}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </CustomDescriptionTab>
  )
}

export default DescriptionTab;
