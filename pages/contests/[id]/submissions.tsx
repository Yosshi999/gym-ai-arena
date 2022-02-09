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
export default function Submissions({contestId}: {contestId: number}) {
    return (
      <div>
        <Header
          title={`Contest ${contestId}`}
          contestId={contestId}
          active="submissions"
        />
        <h3>Submissions</h3>
      </div>
    )
}
