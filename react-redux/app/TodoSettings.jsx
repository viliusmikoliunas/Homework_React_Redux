import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class TodoSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appColor: this.props.appSettings.backgroundColor
        };

        this.onChangeColor = this.onChangeColor.bind(this);
    }

    render() {
        return (
            <div className="app-color-picker">
                <div>
                    <span>App Color</span>
                </div>
                <input
                    type="color"
                    value={this.state.appColor}
                    onChange={this.onChangeColor}
                />
            </div>
        );
    }

    onChangeColor(e) {
        this.setState({
            appColor: e.target.value
        });
        this.props.dispatchChangeColor(e.target.value);
    }
}

export default connect(
    (state) => ({
        appSettings: state.settings
    }),
    (dispatch) => bindActionCreators({
        dispatchChangeColor: actions.changeColor
    }
    ,dispatch)
)(TodoSettings)