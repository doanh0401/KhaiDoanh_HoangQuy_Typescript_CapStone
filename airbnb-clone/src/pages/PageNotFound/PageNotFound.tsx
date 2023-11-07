import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import "./PageNotFound.scss"

export default function PageNotFound() {
  return (
    <div className='pageNotFound-container'>
        <Box className="pageNotFound-box">
            <Container maxWidth="md">
                <Typography className='text1'>
                    404: The page you are looking for isn’t here
                </Typography>
                <Typography className='text2'>You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation</Typography>
                <Box className="imgContainer">
                    <img src="./img/404pic.jpg" alt="404" />
                </Box>
            </Container>
        </Box>
    </div>
  )
}