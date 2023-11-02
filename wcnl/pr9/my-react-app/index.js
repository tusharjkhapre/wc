import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';

const jsx=<h1>hello world tushar here</h1>
class Car extends React.Component {
    render()
    {
        return(<h1>I am a car componet</h1>)
    }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx);
root.render(<Car />);