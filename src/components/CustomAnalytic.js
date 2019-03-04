import React, { Component } from 'react';

class CustomAnalytic extends Component {
    constructor() {
        super();
        this.startTime = 0;
    }

    componentDidMount() {
        this.startTime = new Date();
    }

    componentWillUnmount() {
        let time = new Date() - this.startTime;
        // console.log('You spent ',time,' milli seconds on ', this.props.details.pageUrl, ' page');
        
        // sending page data to analytics server
        fetch('https://cryptic-refuge-46201.herokuapp.com/api/analytic', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pageUrl: this.props.details.pageUrl,
                timeSpentOnThePage: time
            })
        })
        .then((res) => { return res.json(); })
        .then((data) => {console.log(JSON.stringify(data))});
    }
    
    render() {
        return (
            <>
                {this.props.render()}
                {/* <BlogPage /> */}
            </>
        );
    } 
}

export default CustomAnalytic;