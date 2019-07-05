import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import FilterBar from '../components/FilterBar/FilterBar'
import KanBanBoard from '../components/KanBanBoard/KanBanBoard'
import KanBanBoardClass from '../components/KanBanBoard/KanBanBoardClass'

function Shell() {
  return (
    <div>
      <TopNav />
      <FilterBar />
      <KanBanBoardClass />
    </div>
  )
}

export default Shell
