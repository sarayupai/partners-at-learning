import React from 'react'
import './Activities.css'
import '../../App.css'

function Activities() {
    return (
        <div className='activities-container'>
            <div className='activities-header'>
                <h1>Activities</h1>
            </div>
            <div className='activities'> 
                <div className='activity-1'>   
                    <h2>Desmos Art</h2>
                        <h3>Purpose:</h3> 
                        <p>Combine art, math, and technology to improve graphing skills</p>
                        <h3>Materials:</h3>
                        <p>-An electronic device</p>
                        <p>-<a href="https://www.desmos.com/calculator">Desmos Graphing Calculator</a> (Alternatively, you can download the Desmos app)</p>
                        <h3>Instructions:</h3>
                        <p>1. Log in to Desmos and create an artpeice of your choosing by graphing equations</p>
                        <p>-Group expressions (functions, tables, points, etc.) into labelled folders based on the component of the artwork they create</p>
                        <p>-Minimum requirements: Use at least 4 different colors and 4 different functions in your completed artwork</p>
                        <p>3. Explain how two math concepts (domain/range, inequalities, transformations, etc.) and two types of functions (quadratic, polar, peicewise, etc.) helped create your art</p>
                        <p>-Add these explanations as "Notes" under the expressions the explanations reference</p>
                        <p>4. Title and save your graph</p>
                        <p>5. Reflect: How can we use mathmetical principles to create art? How can we use graphical concepts to manipulate equations?</p>
                </div>
                <div className='activity-2'>
                    <h2>Logarithms in the Real World</h2>
                        <h3>Purpose:</h3>
                        <p>-Illustrate the value of math in the real world</p>
                        <p>-Develop word problem solving skills</p> 
                        <p>-Deepen understanding of exponential, logarithmic, and inverse functions</p>
                        <h3>Materials:</h3>
                        <p>-An electronic device with internet</p>
                        <p>-Graphing calculator (if needed)</p> 
                        <p>-Writing materials (optional)</p>
                        <h3>Intructions:</h3>
                        <p>1. Research applications of logarithms in an subject area that interests you (example: pH scale for chemistry)</p>
                        <p>2. Create a word problem on this topic that can be solved using logarithms</p>
                        <p>3. Create an exponential equation that models the word problem and graph it (by hand or with a graphing calculator)</p>
                        <p>4. Solve the word problem in two ways: graphically (by marking the solution point and estimating its value) and by hand (by plugging in a value into the equation you wrote before)</p>
                        <p>-Check that the two values agree</p>
                        <p>5. In the context of the word problem, explain the meaning of the equation, graph (including the marked point), and solution</p>
                        <p>6. Repeat steps 3 - 5, but this time model the problem with an logarithmic equation</p>
                        <p>7. Challenge: Explain how the two sets of functions, graphs, and solution points relate the concept of inverses</p>
                        <p>9. Compile this information in a handout to be shared with the class</p> 
                        <p>10. Read at least two handouts on a different subject area than your own</p>
                        <p>11. Reflect: How are logarithms used in the real world? How did this activity help you understand the steps to solving a word problem? Did this activity change your understanding of logarithmic, exponential, and inverse functions? If so, how? 
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Activities;
