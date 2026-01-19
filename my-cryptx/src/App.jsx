
import './App.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import ChartVisual from './components/ui/ChartVisual'
import TransactionTable from './components/ui/TransacttionTable'

function App() {


  return (
    <>
    <Header />  
     <Sidebar />
     <ChartVisual/> 
     <TransactionTable /> 
    </>
  )
}

export default App
