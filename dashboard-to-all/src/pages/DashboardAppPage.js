import { Helmet } from 'react-helmet-async';
// eslint-disable-next-line import/no-unresolved
import TradingView from 'src/sections/@dashboard/app/TradingView';
import { Grid, Container, Typography } from '@mui/material';
import {NavigTypes, TranspLoads, TypeNav} from '../sections/@dashboard/app'

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={6}>
            <TradingView/>
          </Grid>

          <Grid item xs={12} md={4} lg={6}>
            <TypeNav/>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={6}>
            <TranspLoads/>
          </Grid>
          
          <Grid item xs={12} md={4} lg={6}>
            <NavigTypes/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
