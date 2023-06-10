import React, {useState, useEffect} from 'react';


import ItemList from '../ItemList';
import Title from '../Title';
import { useParams } from 'react-router-dom';

const films = [
    {id: 1, image: "https://lacamisetanosemancha.blogspot.com/2012/07/river-plate-1986.html?m=0", category: 'films', title: "River1986"},
    {id: 2, image: "https://lacamisetanosemancha.blogspot.com/2012/07/river-plate-1986.html?m=0", category: 'films', title: "River1996"},
    {id: 3, image: "https://lacamisetanosemancha.blogspot.com/2012/07/river-plate-1986.html?m=0", category: 'films', title: "River00"},
];



export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
            }, 1000)

        });
        if (categoriaId) {
            getData.then(res => setData( res.filter(film => film.category === categoriaId)));            
        } else {
            getData.then(res => setData(res));
        }

    }, [categoriaId])


    return (
        <>
            <Title greeting={texto} />
            <ItemList data = {data} />
        </>
    );
}

export default ItemListContainer;