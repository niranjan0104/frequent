import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Spinner from '../Spinner/Spinner';

const Register = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState({ error: false, loading: false });
    const [country, setCountry] = useState([])
    const [state, setState] = useState([])
    const [city, setCity] = useState([])
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        // country: "",
        // state: "",
        // city: "",
        // gender: "",
        // dob: "",
        // age: "",
    });

    const inputChangeHandler = (e, inputField) => {
        setFormData(
            {
                ...formData,
                [inputField]: e.target.value
            }
        );
    };

    console.log(formData, "formdata");

    const formSubmit = (e) => {
        e.preventDefault();
        setLoader({ loading: true, error: false })
        axios.post(`/user`, formData)
            .then((res) => {
                setLoader({ loading: false, error: false })
                setTimeout(() => {
                    navigate('/');
                }, 200)
            })
            .catch((err) => {
                alert(err)
                console.log(err);
                setLoader({ loading: false, error: true });
            });
    };

    useEffect(() => {
        axios.get(`/country`)
            .then((res) => {
                setCountry(res.data?.data?.records)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    // useEffect(() => {
    //     const countryId = country.find(el => el.name === formData.country);
    //     console.log(country, "country");
    //     axios.get(`/state/${countryId?._id}`)
    //         .then((res) => {
    //             console.log(res.data, "country");
    //             setState(res.data?.data?.records)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [formData.country, country])

    return (
        <>
            {
                <div className='user-detail-wrapper'>
                    <div className="container">
                        <div className='card'>
                            <form onSubmit={(e) => formSubmit(e)}>
                                <div className='bottom-section'>
                                    <div>
                                        <p className='bold'>firstName :</p>
                                        <input className='input-box' name="firstName" type="text" required value={formData.firstName} onChange={(e) => inputChangeHandler(e, "firstName")} placeholder='Firs Name' />
                                    </div>
                                    <div>
                                        <p className='bold'>lastName :</p>
                                        <input className='input-box' name="lastName" type="text" required value={formData.lastName} onChange={(e) => inputChangeHandler(e, "lastName")} placeholder='Last Name' />
                                    </div>
                                    <div>
                                        <p className='bold'>email :</p>
                                        <input className='input-box' name="email" type="email" required value={formData.email} onChange={(e) => inputChangeHandler(e, "email")} placeholder='email' />
                                    </div>
                                    {/* 
                                    <div>
                                        <p className='bold'>country :</p>
                                        <select className='dropdown' name="country" id="country" onChange={(e) => inputChangeHandler(e, "country")}>
                                            <option value="">Select Country</option>
                                            {
                                                country.length ? country.map(el =>
                                                    <option value={el.name}>{el.name}</option>
                                                ) : ""
                                            }
                                        </select>
                                    </div> */}

                                    <div className="btn-wrapper">
                                        <button type="submit" style={{ backgroundColor: "#113dcd" }}>{loader.loading ? "Submitting..." : "Submit"}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Register