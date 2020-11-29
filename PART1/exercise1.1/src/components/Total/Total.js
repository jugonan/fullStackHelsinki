import { render } from '@testing-library/react';
import React from 'react';

const total = (props) => {
    function addExercises() {
        const total = props.exercise1 + props.exercise2 + props.exercise3;
        return total;
    }

    return (
        <p>{total}</p>
    )

}

export default total;