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
                    <div id="gist95297986" className="gist">
                    <div className="gist-file">
                        <div className="gist-data">
                            <div className="js-gist-file-update-container js-task-list-container file-box">
                                <div id="file-symbol-js" className="file">
                                    <div itemProp="text" className="Box-body px-0 blob-wrapper data type-javascript ">
                                        <table className="highlight tab-size js-file-line-container" data-tab-size="8">
                                            <tbody>
                                            <tr>
                                                <td id="file-symbol-js-L1" className="blob-num js-line-number" data-line-number="1"></td>
                                                <td id="file-symbol-js-LC1" className="blob-code blob-code-inner js-file-line"><span
                                                        className="pl-k">const</span> <span className="pl-c1">sym1</span> <span
                                                        className="pl-k">=</span> <span className="pl-c1">Symbol</span>();</td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L2" className="blob-num js-line-number" data-line-number="2"></td>
                                                <td id="file-symbol-js-LC2" className="blob-code blob-code-inner js-file-line"><span
                                                        className="pl-k">const</span> <span className="pl-c1">sym2</span> <span
                                                        className="pl-k">=</span> <span className="pl-c1">Symbol</span>();</td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L3" className="blob-num js-line-number" data-line-number="3"></td>
                                                <td id="file-symbol-js-LC3" className="blob-code blob-code-inner js-file-line"></td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L4" className="blob-num js-line-number" data-line-number="4"></td>
                                                <td id="file-symbol-js-LC4" className="blob-code blob-code-inner js-file-line">sym1 <span
                                                        className="pl-k">===</span> sym2; </td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L5" className="blob-num js-line-number" data-line-number="5"></td>
                                                <td id="file-symbol-js-LC5" className="blob-code blob-code-inner js-file-line"><span
                                                        className="pl-c"><span className="pl-c">//</span> false</span></td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L6" className="blob-num js-line-number" data-line-number="6"></td>
                                                <td id="file-symbol-js-LC6" className="blob-code blob-code-inner js-file-line"></td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L7" className="blob-num js-line-number" data-line-number="7"></td>
                                                <td id="file-symbol-js-LC7" className="blob-code blob-code-inner js-file-line"><span
                                                        className="pl-k">const</span> <span className="pl-c1">sym3</span> <span
                                                        className="pl-k">=</span> <span className="pl-c1">Symbol</span>.<span
                                                        className="pl-en">for</span>(<span className="pl-s"><span
                                                            className="pl-pds">&quot;</span>cat<span className="pl-pds">&quot;</span></span>);
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L8" className="blob-num js-line-number" data-line-number="8"></td>
                                                <td id="file-symbol-js-LC8" className="blob-code blob-code-inner js-file-line"><span
                                                        className="pl-k">const</span> <span className="pl-c1">sym4</span> <span
                                                        className="pl-k">=</span> <span className="pl-c1">Symbol</span>.<span
                                                        className="pl-en">for</span>(<span className="pl-s"><span
                                                            className="pl-pds">&quot;</span>cat<span className="pl-pds">&quot;</span></span>);
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L9" className="blob-num js-line-number" data-line-number="9"></td>
                                                <td id="file-symbol-js-LC9" className="blob-code blob-code-inner js-file-line"></td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L10" className="blob-num js-line-number" data-line-number="10"></td>
                                                <td id="file-symbol-js-LC10" className="blob-code blob-code-inner js-file-line">sym3 <span
                                                        className="pl-k">===</span> sym4;</td>
                                            </tr>
                                            <tr>
                                                <td id="file-symbol-js-L11" className="blob-num js-line-number" data-line-number="11"></td>
                                                <td id="file-symbol-js-LC11" className="blob-code blob-code-inner js-file-line"><span
                                                        className="pl-c"><span className="pl-c">//</span> true</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gist-meta gist-meta-custom"><a
                                href="https://gist.github.com/vipulbhj/8ef7eea2ba4bf3aa8b9a7becb7eaeacb/raw/89c89e35873713b85d4b83afa180ca9689935bcb/symbol.js"
                                style={{float: 'right'}}>view raw</a><a
                                href="https://gist.github.com/vipulbhj/8ef7eea2ba4bf3aa8b9a7becb7eaeacb#file-symbol-js">symbol.js </a>hosted
                            with &#10084; by <a href="https://github.com">GitHub</a></div> 
                    </div>
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
            </div>
        </Layout>
    </>
)



export default () => <CustomAnalytic render={() => <SymbolsInJavascriptBlog />} 
    url="/all-blogs/symbol-in-javascript"
/>;