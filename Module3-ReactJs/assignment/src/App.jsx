import List from './List'
import UpdateState from './UpdateState'

function App() {

  const listData = [
    {id:1, name:"Jatin"},
    {id:2, name:"Sujal"},
    {id:3, name:"Bhargav"},
  ]

  return (
    <>
    <div>
      <h1>List View</h1>
       {
        listData.map(({id,name})=>(
          <List key={id} firstName={name} />
        ))
       }
       </div>

       <div>
       <UpdateState/>
       </div>
    </>
  )
}

export default App
