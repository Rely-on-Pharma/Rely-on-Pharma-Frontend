"use client"
import { Box, styled } from '@mui/material'
import Heading from '../Heading'
import AddnewForm from './AddnewForm'


const CustomAddNewMain = styled(Box)(({theme})=>({
    padding:"2rem"
}))
const AddnewMain = () => {
  return (
    <CustomAddNewMain>
        <Heading title='Add New Product'/>
        <AddnewForm/>
    </CustomAddNewMain>
  )
}

export default AddnewMain