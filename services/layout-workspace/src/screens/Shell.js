import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import FilterBar from '../components/FilterBar/FilterBar'
import { FTIKanBanBoard } from '@franklin-thor/fti'
import orderList from '../assets/orderList'

function Shell() {
  return (
    <div>
      <TopNav />
      <FilterBar />
      <FTIKanBanBoard data={orderList} />
    </div>
  )
}

export default Shell
