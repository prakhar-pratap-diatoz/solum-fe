import React from 'react'
import MainContainer from '../../MainContainer'
import { Header, Button } from '../../../design-system/designComponents'
import { Add } from "@mui/icons-material";


const LicenceRequest = () => {
  return (
    <MainContainer>
        <div>
            <Header heading={"Licence Requests"} actions={<Button title="Create Request" startIcon={<Add />} />}/>
        </div>
    </MainContainer>
  )

}
export default LicenceRequest