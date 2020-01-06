import React, { Component } from 'react';
import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //this could be a Functional Component, doesn't have to be Component
    componentDidUpdate() {
        console.log('[Order Summary] Update ');
        return true;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map((igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{ transform: 'capitalize' }}>
                            {igKey}:{this.props.ingredients[igKey]}
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
                <h3>Total price:{this.props.price.toFixed(2)}</h3>
                <h3>Continue to checkout?</h3>
                <Button btnType="Danger" clicked={this.props.purchasedCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );

    }

}
export default OrderSummary;