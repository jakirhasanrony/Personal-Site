import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Sc in Computer Science and Engineering" where="Daffodil International University" from="January 2021" to="Present"/>
            <Widecard title="HSC" where="Govt Azizul Haque College, Bogura" from="2016" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
    