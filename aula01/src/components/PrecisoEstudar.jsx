import React from 'react';
import ReactDOM from 'react-dom/client';

const PrecisoEstudar = (props) => {
  return (
    <div>
      <h1>Preciso estudar {props.course}</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <PrecisoEstudar course="AZURE FUNDAMENTALS AZ-900" />;
root.render(element);

export default PrecisoEstudar;
