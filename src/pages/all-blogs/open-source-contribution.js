import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import banner from '../../images/osc-blog-banner.png';
import middle from '../../images/osc-blog-middle.png';
// import GoogleAds from '../../components/GoogleAds';


const OpenSourceContribution = () => (
    <>
    <SEO title="a-progressive-open-source-guide" keywords={[
        'ghosthugs', 
        'open-source-guide', 
        'IT','Open source', 
        'conribution',
        'first pull request', 
        'programming', 
        'coding',
        'github',
        'git'
        ]} /> 
    <Layout>
        <div className="blog-main-container">
            <div className="blog-main-heading">
                A Progressive Guide To Open Source Contribution
            </div>
            <div className="blog-main-content">
                <div className="blog-banner-image">
                    <img src={banner} alt="Top Banner" />
                    <p>my personal laptop</p>
                </div>
                <p>
                    The image above was clicked at the time of writing this article. This is what my laptop look
                    like and I am extremely pumped about it. Pretty much everyone who see's my laptop think 
                    &#8220;I landed starting out of <strong>Mr. Robot</strong> or something&#8221; 
                    which is cool to be honest, so I don't burst the bubble untill I have too.<br />
                    Now there might be folks who would say I am living in a bubble of my own with that 
                    thought process and to them, I would say <i>YOU ARE RIGHT, BUT I LIKE IT HERE</i> :p
                </p>
                <p>
                    Sorry for wasting your time, let me come to the point...<br /> 
                    <strong>Why I am showing you this ??</strong><br />
                    Before I started getting these, whenever I saw someone with such swag, a feeling of 
                    inferiority struck me. I can't even tell you at how many hackathone's I would walk up 
                    to someone with cool swag and ask them how they got it and got some cool story about 
                    some random event. Almost every single time walking back, I thought the guy would go and 
                    work at google or something after this. Now, I have these let me assure you I am not going 
                    at google anytime soon. 
                </p>
                <div className="blog-banner-image">
                    <img src={middle} alt="Top Banner" />
                    <p>haha sorry for show off</p>
                </div>
                <p>
                    <strong>So, how did I finally become cool, you ask ??</strong><br />
                    I simply used google translate, sounds interesting right ...<br />
                    So, last year in the month of September I was exposed to this event called Hacktoberfest
                    (a huge shoutout to all the folks from the 
                    <a href="https://hacktoberfest.digitalocean.com/"> hacktoberfest</a> team). 
                    If you don't know what that is, you should definitely follow the link. Now considering you 
                    know what that is, I decided to take part in it. And so I did but it was all about swag for
                    me, so I created two github accounts, signed up from both. Now comes the day, the contest 
                    (not really) starts. I trying looking up projects that I can contribute too.
                    Few days passed and I was using resources like <a href="https://up-for-grabs.net">
                    Up-For-Grab</a> etc. <br />
                    Then I found this <a href="https://github.com/lingonsaft/hacktoberfest">project</a>, I 
                    personal love these guys. So, basically what they do is they clutter projects on github 
                    which are specifically made for hacktoberfest participants and often only require you to 
                    edit one file. The goal is simple, they want you to get use to the life cycle of open 
                    source contribution. My eyes lit up and basically I put PRs (pull requests) to five such 
                    projects, from both accounts LOL, the jokes on me. <br />
                    Now, my anxiety finally felt secure, and I was just browising the website when I noticed a 
                    small bug which was caused some weirdness to happen on the website. So, I decided to give
                    it a try and soon submitted a PR with a patch. That helped a little with my confidence as
                    I can actually deal with real world issues and fix them, then I was hungry for Microsoft
                    swag, so I used google translate to translate the readme and lincense to hindi and made PRs.
                    hey hey hey, don't look at me that way, I have moved on and become a better contributor, 
                    sorry Microsoft. <br />
                </p>
                <p>
                    <strong>There has to be a learning here or else this is just another rant.</strong><br />
                    Post HACKTOBERFEST, I participanted in 2 more contest, contributed meaningfully to 5+
                    projects, created and published 2 npm packages (available   
                    <a href="https://libraries.io/github/vipulbhj/"> here</a>). Ended up opening a seven year old project 
                    and editing it under the hood (which btw used Angular, React and JQuery all in one codebase, mingled 
                    together and if wondring what it is, its called Grifana and its absolutly insane wizardary at its best).
                    <br />
                </p>
                <p> 
                    <strong>WTF, you are so gone work at google after this (LOL, I am so sorry)</strong><br />
                    So, while waiting for my swag to arrive and me starting to show off, I started usign github 
                    as social media, like literally. I would sit on it for hours and just browse projects, feel
                    intimidated with there size and go read someother README, few days in without realizing, I was
                    reading code, people way smarter than me wrote. Look at a statement and go like huh, thats 
                    interesting. And finally it happened, the biggest vunerability was found in huge npm package, 
                    read a bunch or articles, watched some videos. And here I am, one semi cold winter with a hot head.
                    I will write a node framework with almost zero depandenceies with no clue how will I do that, 
                    doubting myself at each new feature, but also feeling on the top of the world with every completed
                    feature. I worked on it for weeks and now its my pride project. Its called 
                    <a href="https://github.com/vipulbhj/not-really-a-framework"> NARF </a> 
                    (not-really-a-framework) because I am bad with names and no one suggested anything better 
                    as no one was using it LOL. I read lots and lots of code from the express framework and 
                    stole a lot, generarted some new ideas of mine own but most importantly got rid of the fear
                    of huge codebases and that is the main reason for such drastic imporvements  
                </p>
                <p>
                    <strong>What's in here for you ???</strong><br />
                    My point is be crazy and start sometime which you have no clue how to do, find a project 
                    you feel for, google google and google. Just don't be scared and never feel bad about 
                    opening a PR and asking dumb questions. Believe me people appreciate questions so much.
                </p>
            </div>
        </div>
    </Layout>
    </>
)

export default OpenSourceContribution;