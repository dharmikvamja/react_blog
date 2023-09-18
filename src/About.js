import React, { useState } from "react";
import axios from "axios";

function About() {
const[data,setdata]=useState([])
        axios.get("https://rickandmortyapi.com/api/character/?page=19")
        .then((res)=>{
            console.log(res.data.results)
            setdata(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
               
                {
                    data.map((e)=>{
                     return   <div className="col-3 mt-3">
                    <div class="card  card-cascade">
                        <div class="view view-cascade overlay">
                            <img
                                class="card-img-top"
                                src={e.image}
                                alt="Card image cap"
                            />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body card-body-cascade text-center">
                            <h4 class="card-title">
                                <strong>{e.name}</strong>
                            </h4>

                            <h6 class="font-weight-bold indigo-text py-2">
                                {e.species}
                            </h6>

                            <p class="card-text">
                               
                            </p>

                            <a
                                type="button"
                                class="btn-floating btn-small btn-fb"
                            >
                                <i class="fab fa-facebook-f"></i>
                            </a>

                            <a
                                type="button"
                                class="btn-floating btn-small btn-tw"
                            >
                                <i class="fab fa-twitter"></i>
                            </a>

                            <a
                                type="button"
                                class="btn-floating btn-small btn-dribbble"
                            >
                                <i class="fab fa-dribbble"></i>
                            </a>
                        </div>

                        <div class="card-footer text-muted text-center">
                           {e.status}
                        </div>
                    </div>
                </div>
                    })
                }
                
            </div>
        </div>
    );
}

export default About;
