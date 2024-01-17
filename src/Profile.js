import React from "react";
class Profil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            interval: null,
            timer: 0
        }
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    timer: this.state.timer + 1
                });
            }, 1000)
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    render() {
        return (
            <div>
                <h2>{this.props.person.name}</h2>
                <h2>{this.props.person.bio}</h2>
                <h3>  my name is :{this.props.person.name}</h3>
                <h3> timer : {this.state.timer}</h3>
            </div>
        )
    }
}

export default Profil;