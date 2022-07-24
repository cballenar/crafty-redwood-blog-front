import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EntriesCell from 'src/components/EntriesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Entries</h1>

      <EntriesCell />
    </>
  )
}

export default HomePage
