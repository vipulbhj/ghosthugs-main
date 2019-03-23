import React, { Component } from 'react';

class CustomAnalytic extends Component {
    constructor() {
        super();
        this.startTime = 0;
    }

    analytics(time, pageUrl) {
        // sending page data to analytics server
        // 'https://cryptic-refuge-46201.herokuapp.com/api/analytic'
        // http://localhost:3000/api/analytic
        fetch('https://cryptic-refuge-46201.herokuapp.com/api/analytic', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pageUrl: pageUrl,
                timeSpentOnThePage: time
            })
        })
        .then((res) => { return res.json(); })
        .then((data) => {console.log(JSON.stringify(data))});
    }

    componentDidMount() {
        this.startTime = new Date();
        const startTimeTemp = new Date();
        const pageUrl = this.props.details.pageUrl; 
        const analyticsTemp = this.analytics;
        window.addEventListener('beforeunload', (e) => {
            // Cancel the event
            e.preventDefault();
            
            const time = new Date() - startTimeTemp;
            analyticsTemp(time, pageUrl);

            // Chrome requires returnValue to be set
            e.returnValue = '';

            return;
        });
    }

    componentWillUnmount() {
        let time = new Date() - this.startTime;
        console.log('You spent ',time,' milli seconds on ', this.props.details.pageUrl, ' page');
        this.analytics(time, this.props.details.pageUrl);
    }
    
    render() {
        return (
            <>
                {this.props.render()}
            </>
        );
    } 
}

export default CustomAnalytic;