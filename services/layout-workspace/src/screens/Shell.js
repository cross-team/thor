import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import FilterBar from '../components/FilterBar/FilterBar'
import KanBanBoard from '../components/KanBanBoard/KanBanBoard'

function Shell() {
  return (
    <div>
      <TopNav />
      <FilterBar />
      <KanBanBoard />
    </div>
  )
}

export default Shell
