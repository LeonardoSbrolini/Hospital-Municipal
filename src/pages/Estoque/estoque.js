import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import './estoque.css'
import BannerText from '../../components/bannerText';

const EstoquePage = () => {
  const [equipment, setEquipment] = useState([]);

  const estoqueCollectionRef = collection(db, 'Estoque')


  const deleteEquipment = async (id) => {
    const equipmentDoc = doc(db, 'Estoque', id);
    await deleteDoc(equipmentDoc,id);
    setEquipment(() => equipment.filter(item => item.id != id))
  }

  useEffect(() => {
    const getEstoque = async () => {
      const data = await getDocs(estoqueCollectionRef);
      setEquipment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getEstoque();
  }, [])

  return (
    <>
      <BannerText conteudo='Página de Estoque'></BannerText>
      <section className="Conteudo">
        <table className='table table-hover'>
          <thead>
            <tr className='tableHeader'>
              <th>Id</th>
              <th>Nome</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>  
          <tbody>
            {equipment.map((equipment) =>
              <tr key={equipment.id} className='tableLine'>
                <td>{equipment.id}</td>
                <td>{equipment.Nome}</td>
                <td>{equipment.Marca}</td>
                <td>{equipment.Modelo}</td>
                <td>{equipment.Quantidade}</td>
                <td className='Actions'>
                  <Link to='/UpdateEquipment' className='btn btn-primary'>Editar</Link>
                  <button className='btn btn-danger' onClick={() => deleteEquipment(equipment.id)}>Deletar</button>
                </td>
              </tr>
            )}
          </tbody> 
        </table>
        <Link to='/CreateEquipment' className='btn btn-primary'>Adicionar</Link>
      </section>
    </>

  );
}

export default EstoquePage;