import {Link, RouteProps, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";

const Home: React.FC = () => {
  const [testId, setTestId] = useState('')
  const navi = useNavigate()

  return <div>
    <h1>home</h1>
    <h3>
      Go to Test
    </h3>
    <input type="text" value={testId} onChange={e => setTestId(e.target.value)} />
    <button onClick={() => {
      if (!testId) return
      navi(`/test/${testId}`)
    }}>Go by useNavigate</button>
    {testId ? <Link to={`/test/${testId}`}>Go by Link</Link> : null}
  </div>
}

const TestID: React.FC = () => {
  const { id } = useParams()
  return <h1>Test {id}</h1>
}

export const routes: RouteProps[] = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/test/:id',
    element: <TestID/>,
  },
]
