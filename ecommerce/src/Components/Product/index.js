import React from 'react'
import './product.css'

function Product() {
    return (
        <div className='product'>
            <div className='catogories'>
                <div className='heading'><h1>Catagories</h1></div>
                <div class="card-list">
                    <div class="card">
                        <img src="image.jpg" alt="Image" class="card-img" />
                        <div class="card-body">
                            <h5 class="card-title">Electronics</h5>
                        </div>
                    </div>

                    <div class="card">
                        <img src="image.jpg" alt="Image" class="card-img" />
                        <div class="card-body">
                            <h5 class="card-title">Fashion</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src="image.jpg" alt="Image" class="card-img" />
                        <div class="card-body">
                            <h5 class="card-title">Health</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src="image.jpg" alt="Image" class="card-img" />
                        <div class="card-body">
                            <h5 class="card-title">Beauty</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
