import React from 'react';
// import { add, subtract, multiply, divide } from './calculate';
import * as find from './calculate';
function result() {
    return (
        <div className="card bg-dark text-info d-grid mx-auto p-4 m-4 fs-3">
            {/* <ul>
                <li>{add()}</li>
                <li>{subtract()}</li>
                <li>{multiply()}</li>
                <li>{divide()}</li>
            </ul> */}
            <ul>
                <li>{find.add()}</li>
                <li>{find.subtract()}</li>
                <li>{find.multiply()}</li>
                <li>{find.divide()}</li>
            </ul>
        </div>
    );
}
export default result;