import React from 'react';
import './QuesAns.css'
const QuesAns = () => {
     return (
          <div className='ques-ans'>
               <h3>1. How React Works?</h3>
               <h3>2. What is the difference between Props and State?</h3>
               <p>
                    <h3>Ans: </h3>
                    React is a Javascript Lirabray for building user Interface. First think is. React.js works one way data binding,
               </p>
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