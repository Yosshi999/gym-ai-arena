import React from 'react'
import { GetServerSideProps } from 'next'

import Header from '../../../components/Header'

type Props = {
  contestId: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  return {
    props: {
      contestId: parseInt(params.id as string, 10),
    },
  }
}
export default function Contest({contestId}: {contestId: number}) {
    return (
      <div>
        <Header
          title={`Contest ${contestId}`}
          contestId={contestId}
          active="overview"
        />
        <h3>Overview</h3>
      </div>
    )
}