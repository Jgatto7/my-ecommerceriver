import React, { useState, useEffect } from  "react";

import ItemDetail from "../ItemDetail";


const film = { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Escudo_del_C_A_River_Plate.svg/800px-Escudo_del_C_A_River_Plate.svg.png", title: "Riverescudo" };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
        }, 3000);
    });

    getData.then(res => setData(res));
}, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;