import React from 'react'
import './Resources.css'
import '../../App.css'

function Resources() {
    return (
        <div className='resources-container'>
            <div className='resources-header'>
                <h1>Resources</h1>
            </div>
            <div className='resources'>
                <p>
                <a href="https://www.desmos.com/">Desmos</a> and <a href='https://www.khanacademy.org/math'>Khan Academy</a> are two great educational resources for the remote learning of algebra. 
                Linked below are free interactive, multimedia resources from these websites that I've found especially engaging and helpful. 
                </p>
                <p>
                <a href="https://teacher.desmos.com/collection/5e73b275913f047206662889">Desmos Algebra 2 Distance Learning Collection</a>
                </p>
                <p>
                    Desmos's distance learning collection of graphing activities for exponentials, parabolas, polynomials, and periodics
                </p>
                <p>
                <a href="https://www.khanacademy.org/math/algebra2">Khan Academy Algebra 2 Course</a>
                </p>
                <p>
                    Khan Academy's self-paced, adaptive Algebra 2 course with short instructional videos and supplementary practice exercises
                </p>
            </div>
        </div>
    );
}

export default Resources;
