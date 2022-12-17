import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import BannerText from '../../components/bannerText';



const UpdateEquipmentPage = () => {
    const [newEquipmentNome, setNewEquipmentNome] = useState('');
    const [newEquipmentModelo, setNewEquipmentModelo] = useState('');
    const [newEquipmentMarca, setNewEquipmentMarca] = useState('');
    const [newEquipmentQuantidade, setNewEquipmentQuantidade] = useState(0);
    const [equipment, setEquipment] = useState([]);

    const estoqueCollectionRef = collection(db, 'Estoque')

    return (
        <>
            <BannerText conteudo='Página de criação dos equipamentos'></BannerText>
            <div className='container'>
                <div className='row'>
                    <input className='col form-control' placeholder='Nome' onChange={(event) => { setNewEquipmentNome(event.target.value) }}></input>
                    <input className='col form-control' placeholder='Marca' onChange={(event) => { setNewEquipmentMarca(event.target.value) }}></input>
                    <input className='col form-control' placeholder='Modelo' onChange={(event) => { setNewEquipmentModelo(event.target.value) }}></input>
                    <input className='col form-control' placeholder='Quantidade' onChange={(event) => { setNewEquipmentQuantidade(event.target.value) }}></input>
                    <Link to='/' className='col btn btn-danger'>Alterar</Link>
                    <Link to='/' className='col btn btn-primary'>Voltar</Link>
                </div>
            </div>
        </>

    )
}

export default UpdateEquipmentPage