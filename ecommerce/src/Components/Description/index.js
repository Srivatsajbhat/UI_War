import React from 'react'
import img from "./P2.jpg"
import "./des.css"

function Description() {
    return (
        <div className='wrapper'>
            <div className='pro-des'>
                <img src={img} style={{ width: "40%"}} class="card-img-top" alt="..." />
            </div>
            <div className='description'>
                <div className='title'>
                    <h1>NOTHING</h1>
                </div><br></br>
                <div className='details'>
                    <h3>Details</h3>
                    <p>eople also search for
lorem ipsum text copy paste
dummy text copy paste
lorem ipsum free text
free printable dummy text
lorem ipsum text meaning
lorem ipsum text translation
EXPLORE 6 RELATED PAGES
Description of the "Lorem ipsum dolor sit amet" text that …
Explains the text that begins with "Lorem ipsum dolor sit amet consectetuer" in Word Help. The text is nonsense that is based on actual Latin, …
1
Global web icon
support.microsoft.com
10 of the Most Unique Lorem Ipsum Generators - How-To Geek
10 of the Most Unique Lorem Ipsum Generators - How-To Geek
2
Global web icon
www.howtogeek.com
Lorem ipsum - Simple English Wikipedia, the free encyclopedia
Using Lorem ipsum to focus attention on graphic elements in a website design proposal. Lorem ipsum is a dummy text used to replace text in …
3
Global web icon
simple.wikipedia.org
Lorem ipsum (full text) | Article about Lorem ipsum (full text) by …
Lorem ipsum (text) A common piece of text used as mock-content when testing a given page layout or font. The following text is often used: "Lorem …
4
Global web icon
encyclopedia2.thefreedictionary.com
Lorem Ipsum - All the facts - Lipsum generator
Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of …
5
Global web icon
www.lipsum.com
Best Lorem Ipsum Generator | Lorem Generator
The Lorem Generator is unique in that it allows you to really customize your Lorem Ipsum text. Generate all sorts of text: Generate words, sentences, …</p>
                    <h1>PRICE : $100</h1>
                    <div className='but'>
                        <button className='btn btn-primary' style={{width:"30%"}}>BUY NOW</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Description
