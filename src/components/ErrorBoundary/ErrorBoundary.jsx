import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        console.error("Uncaught error: ", error, errorInfo);
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h1>Sorry... Something went wrong.</h1>
                </div>
            );
        }

        return this.props.children;
    }
}