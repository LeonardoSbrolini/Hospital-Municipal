import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import BannerText from '../../components/bannerText';



const CreateEquipmentPage = () => {
    const [newEquipmentNome, setNewEquipmentNome] = useState('');
    const [newEquipmentModelo, setNewEquipmentModelo] = useState('');
    const [newEquipmentMarca, setNewEquipmentMarca] = useState('');
    const [newEquipmentQuantidade, setNewEquipmentQuantidade] = useState(0);
    const [equipment, setEquipment] = useState([]);

    const estoqueCollectionRef = collection(db, 'Estoque')

    const createEquipment = async () => {
        const equipmentSearch = await addDoc(estoqueCollectionRef, { Nome: newEquipmentNome, Marca: newEquipmentMarca, Modelo: newEquipmentModelo, Quantidade: newEquipmentQuantidade });
        const newEquipment = { id: equipmentSearch.id, Nome: newEquipmentNome, Marca: newEquipmentMarca, Modelo: newEquipmentModelo, Quantidade: newEquipmentQuantidade }
        setEquipment(() => [...equipment, newEquipment])
        console.log(newEquipmentNome);
    }

    return (
        <>
            <BannerText conteudo='Página de criação dos equipamentos'></BannerText>
            <div className='container'>
                <div className='row'>
                    <input className='col form-control' placeholder='Nome' onChange={(event) => { setNewEquipmentNome(event.target.value) }}></input>
                    <input className='col form-control' placeholder='Marca' onChange={(event) => { setNewEquipmentMarca(event.target.value) }}></input>
                    <input className='col form-control' placeholder='Modelo' onChange={(event) => { setNewEquipmentModelo(event.target.value) }}></input>
                    <input className='col form-control' placeholder='Quantidade' onChange={(event) => { setNewEquipmentQuantidade(event.target.value) }}></input>
                    <Link to='/' className='col btn btn-primary' onClick={createEquipment}>Criar Equipamento</Link>
                </div>
            </div>
        </>

    )
}

export default CreateEquipmentPage