import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Template from './pages/template';
import EstoquePage from './pages/Estoque/estoque.js';
import ChamadosPage from './pages/Chamados/chamados';
import CreateEquipmentPage from './pages/CriarEquipamento/criarEquipamentos';
import UpdateEquipmentPage from './pages/AlterarEquipamento/alterarEquipamentos'

const appRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Template></Template>}>
                    <Route path='/' element={<EstoquePage></EstoquePage>}></Route>
                    <Route path='/chamados' element={<ChamadosPage></ChamadosPage>}></Route>
                    <Route path='/createEquipment' element={<CreateEquipmentPage></CreateEquipmentPage>}></Route>
                    <Route path='/updateEquipment' element={<UpdateEquipmentPage></UpdateEquipmentPage>}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default appRouter
