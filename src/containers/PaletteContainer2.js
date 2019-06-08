import React, { Component } from 'react'
import Palette from '../components/Palette';

export class PaletteContainer2 extends Component {

    handleSelect = color => {
        const { changeColor } = this.props;
        changeColor(color);
    }

    render() {

        const { color } = this.props;

        return (
            <div>
                <Palette 
                    onSelect={this.handleSelect}
                    selected={color}
                /> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    color: state.counter.color
})

const mapDispatchToProps = dispatch => ({
    changeColor: color => dispatch(changeColor(color));
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteContainer2);
