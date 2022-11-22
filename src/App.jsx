
import './App.css';
import { useState } from 'react'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { Form } from './components/Form';
import { Total } from './components/Total';
import { List } from './components/List';

function App() {
  const [ isHome , setIsHome] = useState(true)
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saida", value: 150 }
])
  const [filter, setFilter] = useState("todos")

  const buttonFilter = listTransactions.filter( element => filter === "todos" ? true : element.type  === filter)
 
  function addForm(newData){
    setListTransactions([...listTransactions,newData])
  }
  function removeData(list){
    const newData = listTransactions.filter((element,index) => {
      return index !== list
      
    })
    setListTransactions(newData)
  }

  
  return (
    <div className="App">
      {
        isHome ? <Home button={()=> setIsHome(!isHome)}/>
        :
        <div>
          <Header button={()=> setIsHome(!isHome)}/>
          <main className='containerPageMain'>
            <section className='boxSum'>
              <Form addForm={addForm} />
              <Total listTransactions={buttonFilter}/>
            </section>
            <section className='boxList'>
              <List  listTransactions={buttonFilter} removeData={removeData} setFilter={setFilter} />
            </section>
          </main>
        </div>
      }
    </div>
  );
}

export default App;
