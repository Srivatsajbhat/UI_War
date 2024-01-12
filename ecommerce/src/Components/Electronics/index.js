import React from 'react'
import './elec.css'
import img from "./P2.jpg"

function Electronics() {
    return (
        <div>
            <div class="card"style={{width: "32%"}}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">NOTHING</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/des" class="btn btn-primary">BUY NOW</a>
                </div>
            </div>
            <div class="card"style={{width: "32%"}}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Nothing</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/des" class="btn btn-primary">BUY NOW</a>
                </div>
            </div>
            <div class="card"style={{width: "32%"}}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">NOTHING</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/des" class="btn btn-primary">BUY NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Electronics
