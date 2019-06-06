import React, { Component } from 'react';
import Palette from '../components/Palette';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';

class PaletteContainer extends Component {

    handleSelect = color => {
        const { changeColor } = this.props;
        console.log('what');
        changeColor(color);
    }

    render() {

        const { color } = this.props;
        const { handleSelect } = this;

        return (
            <div>
                <Palette onSelect={handleSelect} selected={color} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.counter.color,
});

const mapDispatchToProps = dispatch => ({
    changeColor: color => dispatch(changeColor(color))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteContainer);