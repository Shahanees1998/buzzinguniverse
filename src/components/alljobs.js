import React, { useState } from 'react';
// import "https://buzzinguniverse.iqspark.org/css_file/alljobs.css"
import { Helmet } from 'react-helmet';
const Alljobs = () => {

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://buzzinguniverse.iqspark.org/css_file/alljobs.css"
                />
            </Helmet>
            <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <div className="layout social">
                        <div className="container-fluid">
                            <div style={{
                                width: "90%",
                                display: "flex",
                                justifyContent: "center"
                            }} className="row">
                                <div className="col-lg-8 col-main">
                                    <main id="main" className="main-content">
                                        <div className="beehive-title-bar social">
                                            <div className="title-bar-wrapper">
                                                <div className="title-wrapper screen-reader-text">
                                                    <h1 className="title h3">Jobs</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <article id="post-61" className="post-61 page type-page status-publish hentry beehive-post">
                                            <div className="entry-content clearfix">
                                                <div className="job_listings" data-location="" data-keywords="" data-show_filters="true" data-show_pagination="false" data-per_page="30" data-orderby="featured" data-order="DESC" data-categories="" data-disable-form-state-storage="" data-post_id="61">
                                                    <form className="job_filters beehive-filters">
                                                        <div className="search_jobs">
                                                            {/* <div className="search_keywords">
                                                                <label for="search_keywords">Keywords</label>
                                                                <input type="text" name="search_keywords" id="search_keywords" placeholder="Keywords" value="" />
                                                            </div> */}
                                                            <div className="search_location">
                                                                <label for="search_location">Location</label>
                                                                <input type="text" name="search_location" id="search_location" placeholder="Location" value="" />
                                                            </div>
                                                            <div className="search_submit">
                                                                <input type="submit" value="" />
                                                            </div>
                                                        </div>
                                                        <button className="button-filter" type="button" data-toggle="collapse" data-target="#job_filters_collapse" aria-expanded="false" aria-controls="job_filters_collapse">
                                                            <i className=" uil-sliders-v"></i> Filter </button>
                                                        <div className="collapse" id="job_filters_collapse">
                                                            <ul className="job_types">
                                                                <li>
                                                                    <label for="job_type_freelance" className="freelance">
                                                                        <input type="checkbox" name="filter_job_type[]" value="freelance" checked="checked" id="job_type_freelance" /> Freelance </label>
                                                                </li>
                                                                <li>
                                                                    <label for="job_type_full-time" className="full-time">
                                                                        <input type="checkbox" name="filter_job_type[]" value="full-time" checked="checked" id="job_type_full-time" /> Full Time </label>
                                                                </li>
                                                                <li>
                                                                    <label for="job_type_internship" className="internship">
                                                                        <input type="checkbox" name="filter_job_type[]" value="internship" checked="checked" id="job_type_internship" /> Internship </label>
                                                                </li>
                                                                <li>
                                                                    <label for="job_type_part-time" className="part-time">
                                                                        <input type="checkbox" name="filter_job_type[]" value="part-time" checked="checked" id="job_type_part-time" /> Part Time </label>
                                                                </li>
                                                                <li>
                                                                    <label for="job_type_temporary" className="temporary">
                                                                        <input type="checkbox" name="filter_job_type[]" value="temporary" checked="checked" id="job_type_temporary" /> Temporary </label>
                                                                </li>
                                                            </ul>
                                                            <input type="hidden" name="filter_job_type[]" value="" />
                                                        </div>

                                                    </form>
                                                    <noscript>Your browser does not support JavaScript, or it is disabled. JavaScript must be enabled in order to view listings.</noscript>
                                                    <ul className="job_listings">
                                                        <li className="animate-item slideInUp post-281 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_type-full-time beehive-post job-type-full-time" data-longitude="" data-latitude="" style={{ visibility: "visible" }}>
                                                            <div className="job-list-item">
                                                                <div>
                                                                    <figure>
                                                                        <img className="company_logo" src="https://buzzinguniverse.com/wp-content/uploads/2020/01/job-logo-8.png" alt="Clinivex Analytics" />
                                                                    </figure>
                                                                </div>
                                                                <div className="job-info">
                                                                    <h4 className="job-title">
                                                                        <a href="/job/marketing-data-enrichment-specialist/">Marketing Data Enrichment Specialist</a>
                                                                    </h4>
                                                                    <div className="about-company">
                                                                        <span className="address mute ellipsis">3rd street, Perm, Russia</span>
                                                                        <p className="company-name color-primary ellipsis">Clinivex Analytics</p>
                                                                    </div>
                                                                </div>
                                                                <div className="job-listing-meta">
                                                                    <ul className="job-types-lists ellipsis">
                                                                        <li className="job-type full-time">Full Time</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
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
        </>
    );
};

export default Alljobs;
