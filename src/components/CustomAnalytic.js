import React, { Component } from 'react';

class CustomAnalytic extends Component {
    constructor() {
        super();
        this.userReadArticle = false;
    }

    sendActivityToAnalyticsServer = (data) => {
        // sending page data to analytics server
        // 'https://cryptic-refuge-46201.herokuapp.com/api/analytic'
        // http://localhost:3000/api/analytic
        fetch(`https://cryptic-refuge-46201.herokuapp.com/api/analytics`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then((res) => { return res.json(); })
        .then((data) => {console.log(JSON.stringify(data))});
    }

    handleScroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const HEIGHT_OF_BODY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Converting value to percentage and Integer
        let contentScrolled = parseInt(winScroll / HEIGHT_OF_BODY * 100);
        
        // If scrolled 85% or more, then make a read request
        if(contentScrolled > 85 && !this.userReadArticle) {
            this.userReadArticle = true;
            this.sendActivityToAnalyticsServer(JSON.stringify({
                pageUrl: this.props.url,
                type: 'read'
            }));
        }
    }

    componentDidMount() {
        this.sendActivityToAnalyticsServer(JSON.stringify({
            pageUrl: this.props.url,
            type: 'viewed'
        }));

        /**
         * This bit is responsible to make a request to the server when the user is done reading the
         * article, using the scroll height when it is greater than 85 of total content.
         * [KNOWN ISSUES <I think this is an ISSUE>]
         *  => This generates a request each time the user reads the article, which I am not sure is ideal
         */
        
         window.addEventListener('scroll', this.handleScroll);   
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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