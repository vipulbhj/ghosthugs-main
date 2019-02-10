import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const BlogsPage = () => (
    <>
        <SEO title="Blogs List" keywords={['ghosthugs', 'blogs', 'IT', 'company']} /> 
        <Layout>
            <ul>
                <li className="blogs-list-li">
                    <Link to="/all-blogs/fresherJob">
                        Key things to consider while accepting your first job offer
                    </Link>
                </li>
                <li className="blogs-list-li">
                    <Link to="/all-blogs/open-source-contribution">
                        A Progressive Guide To Open Source Contribution
                    </Link>
                </li>
                <li className="blogs-list-li">
                    <Link to="/all-blogs/fresherJob">
                        new blog coming soon...
                    </Link>
                </li>
            </ul>
        </Layout>
    </>    
)

export default BlogsPage;
