import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListProduct() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("https://658c2957859b3491d3f59c3a.mockapi.io/Product").then(function(res) {
            console.log(res);
            setList(res.data)
        });

    }, []);
  return (
    <div>

        
             {list &&
                list.map((item, index) => {
                    return (
                        <div>
                            <Link to={`/product/${item.id}`}>{item.name} </Link>
                        </div>
                    );
            })}
    </div>
  )
}
