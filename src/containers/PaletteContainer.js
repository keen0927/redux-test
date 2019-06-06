import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';


export class PaletteContainer extends Component {

    handleSelect = (color) => {
        const { changeColor } = this.props;
        console.log('what');
        changeColor(color);
    }

    render() {

        const { color } = this.props;

        return (
            <div>
                <Palette onSelect={this.handleSelect} selected={color} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.counter.color,
});

const mapDispatchToProps = dispatch => ({
    changeColor: color => dispatch(changeColor(color))
});




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteContainer);
