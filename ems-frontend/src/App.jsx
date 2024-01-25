import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import DepartamentComponent from './components/DepartamentComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhost:3000 */}
              <Route path='/' element = { <ListEmployeeComponent />}></Route>
              {/* // http://localhost:3000/employees */}
              <Route path='/employees' element = { <ListEmployeeComponent /> }></Route>
              {/* // http://localhost:3000/add-employee */}
              <Route path='/add-employee' element = { <EmployeeComponent />}></Route>

              {/* // http://localhost:3000/edit-employee/1 */}
              <Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>
              <Route path='/departments' element = { <ListDepartmentComponent />}></Route>

              {/* // http://localhost:3000/add-department */}
              <Route path='/add-department' element = { <DepartamentComponent /> }></Route>

              <Route path='/edit-department/:id' element = { <DepartamentComponent />}></Route>

           </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
