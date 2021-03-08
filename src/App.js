import './App.css'
import { useState } from 'react'
import VideoList from './components/VideoList/VideoList'
import moment from 'moment'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
    {
      url:
        'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().subtract(10, 'minutes').format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      url:
        'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().subtract(1, 'hours').format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      url:
        'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().subtract(1, 'day').format('YYYY-MM-DD hh:mm:ss'),
    },
    {
      url:
        'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2020-11-03 12:10:00',
    },
    {
      url:
        'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      url:
        'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '1982-12-02 05:24:00',
    },
  ])

  return (
    <div className="App">
      <VideoList list={list} />
    </div>
  )
}

export default App
