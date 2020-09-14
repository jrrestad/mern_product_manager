import React, { useState, useEffect } from 'react'
import axios from 'axios';

const DisplayAll = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return(
        <div>
            {
                loading ?
                <p>loading, please wait...</p>
                :
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((item, i) => 
                            <tr key={i}>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>{item.description}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default DisplayAll;