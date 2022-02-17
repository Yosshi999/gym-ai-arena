import React from 'react'
import Error from 'next/error'
import { GetServerSideProps } from 'next'

import {useContest} from '../../../lib/hooks'

type Props = {
  contestId: string;
}
type QueryProps = {
  id: string;
}

export default function Contest({contestId}: Props) {
  const contest = useContest(contestId);
  if (contest.loading) {
    return (
      <>
        Loading...
      </>
    );
  }

  if (contest.data) {
    const {name, startUnixTime, endUnixTime} = contest.data;
    return (
      <>
        <h3>{name}</h3>
        {new Date(startUnixTime).toString()} - {new Date(endUnixTime).toString()}
      </>
    )
  } else {
    return (
      <Error statusCode={404} />
    )
  }
}

export const getServerSideProps: GetServerSideProps<Props, QueryProps> = async ({params}) => {
  const contestId = params.id as string;
  return {
    props: {
      contestId,
    },
  }
};