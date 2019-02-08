import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import GoogleAds from '../../components/GoogleAds';


const FresherJobPage = () => (
    <>
        <SEO title="fresher-job-blog" keywords={['ghosthugs', 'FresherJob', 'IT', 'first blog']} /> 
        <Layout>
            <div className="blog-main-container">
                <div className="blog-main-heading">
                    Key things to consider while accepting your first job offer.
                </div>
                <div className="blog-main-content">
                    <p>
                        So you are straight out of college and you are about to get your first formal tech job
                        you have already put the hard hours in, learning all things necessary and its all been 
                        leading to this, &#8220;Your First Job, your entry ticket in the industry&#8221;. 
                        Now its all gone be great .... 
                        <br /> or may be not ?? <br /><br />
                    </p>
                    <br />
                    <GoogleAds client="ca-pub-9880280576668004" slot="slot1234" />
                    <br />
                    <h3> Let's take a bit more about it.</h3>
                    <p>
                        When you sign up for college, you choose a sepcific domain of study. Then over a period
                        of 3 / 4 years, you constanly move towards the goal of finding the right job for you.
                        Now because you been doing your bit of the story properly, you have offers on the table,
                        people want to hire you, they want you to be part of there team. Companies are ready 
                        to pay you handsome sums in paycheck. <br />
                        Life is good right, I mean the choice is simple who so ever pays the fattest paycheck
                        you pick them, right ??? <br /> 
                        
                    </p>
                </div>
            </div>
        </Layout>
    </>    
)

export default FresherJobPage;