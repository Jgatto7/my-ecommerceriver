import React, { useState, useEffect } from  "react";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom"; 


const films = [
    { id: 1, image: "https://lacamisetanosemancha.blogspot.com/2012/07/river-plate-1986.html?m=0", category: 'films', title: "River1986" },
    {id: 2, image: "https://lacamisetanosemancha.blogspot.com/2012/07/river-plate-1986.html?m=0", category: 'films', title: "River1996"},
    {id: 3, image: "https://lacamisetanosemancha.blogspot.com/2012/07/river-plate-1986.html?m=0", category: 'films', title: "River00"},
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
        }, 3000);
    });

    getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
}, [])

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;