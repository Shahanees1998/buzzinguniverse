import React from 'react';
import '../css/submit.css'
import { Helmet } from 'react-helmet';

export default function ManageJob() {
    return (
        <div id="content" className="site-content">
                <Helmet>
                <link
                    rel="stylesheet"
                    href="https://buzzinguniverse.iqspark.org/css_file/submit.css"
                />
            </Helmet>
            <div id="primary" className="content-area">
                <div className="layout social">
                    <div className="container-fluid">
                        <div className="row">
                            <div style={{ margin: "0 auto" }} className="col-lg-8 col-main">
                                <main id="main" className="main-content">
                                    <article id="post-59" className="post-59 page type-page status-publish hentry beehive-post">
                                        <div className="entry-content clearfix">
                                            <div className="manage-job-container">
                                                <table className="job-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Title</th>
                                                            <th>Filled?</th>
                                                            <th>Date Posted</th>
                                                            <th>Listing Expires</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>software developer</td>
                                                            <td>-</td>
                                                            <td>October 31, 2024</td>
                                                            <td>November 30, 2024</td>
                                                        </tr>
                                                        <tr>
                                                            <td>software developer (Draft)</td>
                                                            <td>-</td>
                                                            <td>October 31, 2024</td>
                                                            <td>-</td>
                                                        </tr>
                                                        {/* Add more rows as needed */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </article>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}