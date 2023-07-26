import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./HomePage.css"
import Spinner from '../Spinner/Spinner';


const HomePage = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState({ error: false, loading: false });

    useEffect(() => {
        setLoader({ loading: true, error: false })
        axios.get("/users")
            .then((res) => {
                setData(res.data.data.records);
                setLoader({ loading: false, error: false })
            })
            .catch((e) => {
                setLoader({ loading: false, error: true })
                console.log(e);
            })
    }, []);

    return (
        <div className='container'>
            {loader.loading && <Spinner />}
            {loader.error && <h1>Something went wrong</h1>}
            <Link to={'/register'} className='reg-btn-wrapper'>
                <p className='register-btn'>Register</p>
            </Link>
            {
                data.length ? data.map((el, index) => {
                    return (
                        <div key={index} className='user-detail-wrapper'>
                            <p>{el?.firstName}</p>
                            <p>{el?.lastName}</p>
                            <p>{el?.email}</p>
                        </div>
                    )
                }) : <h1 className='empty-data'>No data</h1>
            }
        </div>

    );
}

export default HomePage