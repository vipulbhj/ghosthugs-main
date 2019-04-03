import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CustomAnalytic from '../../components/CustomAnalytic';

import banner from '../../images/symbolinjs.png';


const SymbolsInJavascriptBlog = () => (
    <>
        <SEO title="blogs.." keywords={[
            'ghosthugs',
            'open-source-guide',
            'IT', 'Open source',
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
                    Symbols in Javascript and Practical Use cases
                </div>
                <div className="blog-main-content">
                    <div className="blog-banner-image">
                        <img src={banner} alt="Top Banner" />
                        <p>powered by <code>carbon.now.sh</code></p>
                    </div>
                    <p>
                        In this blog, we are going to go down the less explored land on Javascript
                        <strong> Symbols</strong>. And explore practical use cases where they become expremely
                        useful. *spoiler's in the image above*
                    </p>
                    <p>
                        <strong>What are they ??</strong> <br />
                        Symbols are a new Primitive type which was introduced in ES6, and they are pretty 
                        useful to be honest. 
                    </p>
                    <p>
                        <strong>Symbols ??</strong> <br /> 
                        The Symbol() function returns a value of type symbol, which is internally repersented 
                        as a big number. Like a really big number, so that they can give you unique values at 
                        each call and this can be really powered in so many scenario, like keys in JSX 
                        ( above code snippet )
                    </p>
                </div>
                <p>
                    But you can also generate same values and that is achieved using 
                    <code> Symbol.for()</code>
                </p>
                <p>
                    And that's mostly it. There is no super complicated magic going on with symbols and 
                    they can help you in places where you want unique values and they are core javascript
                    feature so allows for more scalable solutions that are faster and smaller.
                </p>
            </div>
        </Layout>
    </>
)



export default () => <CustomAnalytic render={() => <SymbolsInJavascriptBlog />} 
    url="/all-blogs/symbol-in-javascript"
/>;