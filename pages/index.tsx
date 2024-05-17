import * as React from 'react'
import { Grid, Stack } from '@mui/material'
import Category from '../src/components/categories'
import OrderTable from '../src/components/order-table'
import Activities from '../src/components/activities'
import AuthorEarnings from '../src/components/author-earnings'
import Footer from '../src/layouts/footer'
import Trends from '../src/components/trends'
import RecentCustomers from '../src/components/recent-customer'
import SalesProgress from '../src/components/sales-progress'

const IndexPage = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={8} sm={12}>
          <Category />
          <OrderTable />
          <Stack>
            <RecentCustomers />
          </Stack>
          <AuthorEarnings />
        </Grid>
        <Grid item lg={4} gap={3} sm={12}>
          <Stack>
            <SalesProgress />
          </Stack>
          <Trends />
          <Activities />
        </Grid>
        <Footer />
      </Grid>
    </>
  )
}

export default IndexPage
