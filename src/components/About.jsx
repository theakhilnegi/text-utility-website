import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }
    let myStyleForAbout = {
        color: props.mode === 'dark' ? 'white' : 'black',
    }

    return (
        <div className='container'>
            <h1 className='my-3' style={myStyleForAbout}>About Us</h1>
            <div id="accordion">
                <div className="card my-1" style={myStyle}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button style={myStyle} className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Our Goal</strong>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div style={myStyle} className="card-body">
                            Welcome to our Text Utilities website, a platform dedicated to providing you with a variety of useful text tools designed to simplify your everyday writing and communication needs.

                            Our website offers a range of tools to enhance your writing skills and improve the overall quality of your written communication. From grammar and spelling checkers to word counters and text formatting tools, we have everything you need to ensure that your writing is clear, concise, and error-free.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Our Team</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div style={myStyle} className="card-body">
                            Our team of experts works tirelessly to ensure that our website is user-friendly, efficient, and accessible to everyone. We are committed to delivering the best possible experience to our users, and we are constantly updating and improving our tools to meet your changing needs.

                            Whether you're a student, professional writer, or just someone looking to improve your writing skills, our website has something for you. We strive to make our tools easy to use and accessible to everyone, regardless of their level of expertise.
                        </div>
                    </div>
                </div>
                <div className="card my-1" style={myStyle}>
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" style={myStyle} data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>To The User</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div style={myStyle} className="card-body">
                            Thank you for choosing our Text Utilities website, and we hope that our tools help you achieve your writing goals and improve your communication skills.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
