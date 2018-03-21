import React from 'react';

export default class TodoSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appColor: this.props.appColor
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

        this.props.onChangeColor(e.target.value);
    }
}