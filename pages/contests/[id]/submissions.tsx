import axios from 'axios'
import React from 'react'
import { Table } from 'react-bootstrap'

type Submission = {
  code: string;
  createdAt: number;
}
type Props = {
  submissions: Submission[];
}

export const getServerSideProps = async () => {
  const response = await axios.get<Submission[]>("http://localhost:3000/api/submissions");
  const submissions = response.data;
  return {props: {submissions}};
}

class Submissions extends React.Component<Props> {
  render() {
    return (
      <>
        <h3>Submissions</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>CreatedAt</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.submissions.map(({createdAt, code}, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{createdAt}</td>
                  <td>{code}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <h3>Submit your code</h3>
        <form method="post" action="/api/submit">
          <textarea name="code" rows={10} cols={80} />
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default Submissions