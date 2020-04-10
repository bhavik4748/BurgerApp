
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxx/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandling';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     }
    // }

    state = {
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount() {
        // axios.get('https://bg-burger-app.firebaseio.com/ingredients.json')
        //     .then(res => {
        //         this.setState({ ingredients: res.data });
        //     })
        //     .catch(error => this.setState({ error: true }));
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Bhavik Gosrani",
        //         address: {
        //             street: 'TEST STREET',
        //             zipcode: '41351',
        //             country: 'USA'
        //         },
        //         email: 'test123@gmail.com',
        //     },
        //     deliveryMethod: 'fastest'
        // };
        // this.setState({ loading: true });

        // axios.post('/orders.json', order)
        //     .then(response => this.setState({ loading: false, purchasing: false }))
        //     .catch(error => this.setState({ loading: false, purchasing: false }));
        const queryParms = [];
        queryParms.push('price=' + this.state.totalPrice);
        for (let i in this.state.ingredients) {
            queryParms.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParms.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
        // this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0;

        let orderSummary = null;
        let burger = this.state.error ? 'Ingredients cannot be loaded' : <Spinner />;
        if (this.props.ings) {
            burger = <Aux>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    price={this.props.price}
                    ordered={this.purchaseHandler}
                />
            </Aux>
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                purchasedCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}
            ></OrderSummary>
        }

        if (this.state.loading)
            orderSummary = <Spinner></Spinner>
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );

    }

}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
