import React from "react";

class ErrorBoundary extends React.Component{
    state={hasError:false}
    constructor(){
        super();
        console.log("in errorboundary")
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,info){//used to log errors in any reports
        console.log(error,info)
    }
    render(){
        if(this.state.hasError){
            return this.props.fallback
        }
        return this.props.children
    }

}
export default ErrorBoundary