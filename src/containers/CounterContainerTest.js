import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from '../store/modules/counter';
import Counter from '../components/Counter';


export class CounterContainerTest extends Component {

    handlerIncrement = () => {
        this.props.increment();
    }

    handlerDecrement = () => {
        this.props.decrement();
    }

    render() {

        const { number, color } = this.props;
        const { handlerDecrement, handlerIncrement } = this;

        return (
            <div>
                <Counter 
                    value={number}
                    color={color}
                    onIncrement={handlerIncrement}
                    onDecrement={handlerDecrement}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    number: state.number,
    color: state.color
})

const mapDispatchToProps = {
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainerTest);