import React from 'react'

import Header from '../../../components/Header'

class Submissions extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="Contest 1"
          contestId="1"
          active="submissions"
        />
        <h3>Submissions</h3>
        <form method="post" action="/api/submit">
          <textarea name="code" rows={10} cols={80} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Submissions