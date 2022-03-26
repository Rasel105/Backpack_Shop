import React from 'react';
import './QuesAns.css'
const QuesAns = () => {
     return (
          <div className='ques-ans'>
               <h3>1. How React Works?</h3>
               <p>
                    <h3>Ans: </h3>
                    React is a Javascript Lirabray for building user Interface. First think is. React.js works one way data binding, when ever any changes have in the web application, the hold ul re-render in the Virtual DOM, Virtual DOM the copy of Present DOM, when changes happen, the it check previous DOM And Current DOM, both two DOM compare where the changes happened, the it just update where the changes. that's why React is so Fast. This is how React Works.
               </p>
               <h3>2. How useState Works?</h3>
               <p>
                    <h3>Ans: </h3>
                    The useState is the heart of React components, useState() it is just for use contain information about the components, the useState is can be changes any time by the user or system interactaction.  the useState is updabled. the useState is also called statefull component. useState is access or modified inside the component. we have set and initial value before any interactaction with useState().
               </p>

               <h3>3. What is the difference between Props and State?</h3>

               <p>
                    <h4>Ans: Props: </h4>
                    1. Props are read only.
                    2. Props are immutable.
                    3. Props allow us to pass data one components to another components as an arguments.
                    4. Props just access by the child.
                    5. Props are reusable.
                    <h4>Ans: State: </h4>
                    1. State is mutable
                    2. State is asynchronous.
                    3. State store information about components.
                    4. State can not be access by the child components
                    5. State is not reusable.
               </p>
          </div>
     );
};

export default QuesAns;