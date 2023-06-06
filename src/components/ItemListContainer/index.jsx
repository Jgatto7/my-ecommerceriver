import React, {useState, useEffect} from 'react';

import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import Title from '../Title';

const films = [
    {id: 1, image: "https://lacamisetanosemancha.blogspot.com/2012/07/river-plate-1986.html?m=0", title: "River1986"},
];



export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
            }, 3000)

        });
        getData.then(res => setData(res));

    },[])

    const onAdd = (quantity) => {
        console.log('Compraste $ {quantity} unidades');
    }
    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data = {data} />
        </>
    );
}

export default ItemListContainer;