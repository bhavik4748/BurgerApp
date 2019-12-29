import React from 'react';
import Aux from '../../../hoc/Auxx';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{ transform: 'capitalize' }}>
                        {igKey}:{props.ingredients[igKey]}
                    </span>
                </li>
            )
        })

    return (

        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
        </Aux>

    );
};

export default orderSummary;