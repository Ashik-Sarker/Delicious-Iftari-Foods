import React from 'react';
import './Discussion.css';

const Discussion = () => {
    return (
        <div className='discussion'>
            <h3> Q1.How React Work </h3>
            <p>Ans:React maintains a tree. This tree is able to do efficient diff computations on the nodes. React allows you to effectively re-construct DOM in java script. And push only those changes to the DOM. At first react create a virtual DOM then it compares to the main DOM. If result have any changes then it update main DOM otherwise nothing to change. Which have actually occur.</p>
            
            <h3>Q2.Props vs State </h3>
            <p>Ans: Props are read only and use to pass data one component to another and its passes data one way.In state the data is passed within the component only. Props is immutable and can not be modified. State is mutable and can be modified. Props can be used with state and functional components. State can be used only with state component or class component. props is read only and state is read and write both.</p>

            <h3>Q3. How UseState work </h3> 
            <p>Ans: Use State is a Hook that allows us to have state variables in functional components. It is a function that return a value and function and we need to set initial state. Then we can update the value of the variable using function setState and the value is updated.</p>

        </div>
    );
};

export default Discussion;