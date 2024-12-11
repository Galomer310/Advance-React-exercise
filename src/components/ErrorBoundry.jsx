import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = {
            hasError : false,
        };
    }

    componentDidCatch = (error, errorInfo) => {
        console.log(error);
        console.log(errorInfo);
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) 
            return <h2>{this.props.fallback}</h2>;
        
        return this.props.children;
    }
}

export default ErrorBoundary;