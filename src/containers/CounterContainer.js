import React, { Component } from 'react'
import { connect } from 'react-redux';
import Counter from '../components/Counter';
// import { increment, decrement } from '../store/modules';
import { increment, decrement } from '../store/modules/counter';

export class CounterContainer extends Component {

    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    }

    render() {

        const { color, number } = this.props

        return (
            <div>
                <Counter 
                    color={color}
                    value={number}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />                
            </div>
        )
    }
}

const mapStateToProps = ({counter}) => ({
    color: counter.color,
    number: counter.number
})

const mapDispatchToProps = {
    increment,
    decrement    
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
