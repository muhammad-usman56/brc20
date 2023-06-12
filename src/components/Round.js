import React,{useEffect} from 'react'
import {Box,Container,Grid, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';


import { data } from "../backend/table"
export default function Round() {
    
  
    useEffect(() => {
console.log(data)
     
      },[data]);
   
    
      return (
        <Box
          id="contact"
          sx={{
            backgroundSize: "100% 100%",
            marginTop:'5%'
          }}
        >
            
          <Container maxWidth="xl">
          <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            background: "linear-gradient(45deg, #110C1F 20%, #09091B 50%)",
            padding: "2%",
            border: "2px solid #13121D",
            borderRadius: 7,
            color: "white",
            marginLeft:'2%',
            marginRight:'5%'
          }}
        >
            <Box overflow="auto"  style={{maxHeight: '800px'}}>
        <Table style={{color:'white'}}>
          <TableHead>
            <TableRow>
            <TableCell style={{ fontWeight:'bold', color: 'white' }}>Pool</TableCell>
              <TableCell style={{ fontWeight:'bold', color: 'white' }}>%</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Amount</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Price</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Collected funds</TableCell>
              <TableCell style={{fontWeight:'bold', color: 'white' }}>FDV</TableCell>
              <TableCell style={{fontWeight:'bold', color: 'white' }}>% on TGE</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Cliff</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Vesting</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>TGE</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 1</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 2</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 3</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 4</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 5</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 6</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 7</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 8</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 9</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 10</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 11</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 12</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 13</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 14</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 15</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 16</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 17</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 18</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 19</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 20</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 21</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 22</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 23</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 24</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 25</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 26</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 27</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 28</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 29</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 30</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 31</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 32</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 33</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 34</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 35</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Month 36</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row) => (
              <TableRow key={row.Pool}>
    <TableCell style={{ fontWeight:'bold', color: 'white' }}>{row.Pool}</TableCell>
              <TableCell style={{ fontWeight:'bold', color: 'white' }}>{row.p}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Amount}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Price}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Collectedfunds}</TableCell>
              <TableCell style={{fontWeight:'bold', color: 'white' }}>{row.FDV}</TableCell>
              <TableCell style={{fontWeight:'bold', color: 'white' }}>{row.TGEs}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Cliff}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Vesting}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.TGE}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month1}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month2}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month3}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month4}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month5}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month6}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month7}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month8}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month9}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month10}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month11}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month12}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month13}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month14}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month15}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month16}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month17}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month18}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month19}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month20}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month21}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month22}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month23}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month24}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month25}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month26}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month27}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month28}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month29}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month30}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month31}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month32}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month33}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month34}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month35}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.Month36}</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>{row.SUM}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
        </Grid>
  </Container>
  </Box>
  )
}
