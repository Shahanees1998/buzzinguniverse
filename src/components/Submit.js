import React, { useState } from 'react';
// import "https://buzzinguniverse.iqspark.org/css_file/submit.css";
import { Helmet } from 'react-helmet';
import { Editor } from '@tinymce/tinymce-react';

function Submit() {
    const [content, setContent] = useState('');

    const handleEditorChange = (content) => {
        setContent(content);
    };
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://buzzinguniverse.iqspark.org/css_file/submit.css"
                />
            </Helmet>
            <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <div className="layout social">
                        <div className="container-fluid">
                            <div className="row">
                                <div style={{ margin: "0 auto" }} className="col-lg-8 col-main">
                                    <main id="main" className="main-content">
                                        <article id="post-59" className="post-59 page type-page status-publish hentry beehive-post">
                                            <div className="entry-content clearfix">
                                                <form action="/post-a-job/" method="post" id="submit-job-form" className="job-manager-form" enctype="multipart/form-data">
                                                    <input type="hidden" id="_wpjm_nonce" name="_wpjm_nonce" value="1dca455611" />
                                                    <input type="hidden" name="_wp_http_referer" value="/post-a-job/" />
                                                    <div className="block-title">
                                                        <h3>Job details</h3>
                                                    </div>

                                                    <fieldset className="fieldset-job_title fieldset-type-text">
                                                        <label for="job_title">Job Title</label>
                                                        <div className="field required-field">
                                                            <input type="text" className="input-text" name="job_title" id="job_title" placeholder="" value="" maxlength="" required="" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-job_location fieldset-type-text">
                                                        <label for="job_location">Location <small>(optional)</small>
                                                        </label>
                                                        <div className="field ">
                                                            <input type="text" className="input-text" name="job_location" id="job_location" placeholder="e.g. &quot;London&quot;" value="" maxlength="" />
                                                            <small className="description">Leave this blank if the location is not important</small>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-remote_position fieldset-type-checkbox">
                                                        <label for="remote_position">Remote Position <small>(optional)</small>
                                                        </label>
                                                        <div className="field ">
                                                            <input type="checkbox" className="input-checkbox" name="remote_position" id="remote_position" value="1" />
                                                            <small className="description">Select if this is a remote position.</small>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-job_type fieldset-type-term-select">
                                                        <label for="job_type">Job type</label>
                                                        <div className="field required-field">
                                                            <select name="job_type" id="job_type" className="postform">
                                                                <option className="level-0" value="26">Freelance</option>
                                                                <option className="level-0" value="23" selected="selected">Full Time</option>
                                                                <option className="level-0" value="27">Internship</option>
                                                                <option className="level-0" value="24">Part Time</option>
                                                                <option className="level-0" value="25">Temporary</option>
                                                            </select>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-job_description fieldset-type-wp-editor">
                                                        <label for="job_description">Description</label>
                                                        <div className="field required-field">
                                                            <Editor
                                                                apiKey="6n6085y2zxnpx1z72tdi0n1cqo5x7zl2zv3z5xtxikdg5oo6" // Get your free API key at https://www.tiny.cloud/
                                                                value={content}
                                                                init={{
                                                                    height: 400,
                                                                    menubar: false,
                                                                    plugins: [
                                                                        'advlist autolink lists link image charmap print preview anchor',
                                                                        'searchreplace visualblocks code fullscreen',
                                                                        'insertdatetime media table paste code help wordcount'
                                                                    ],
                                                                    toolbar:
                                                                        'undo redo | formatselect | bold italic backcolor | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist outdent indent | removeformat | help'
                                                                }}
                                                                onEditorChange={handleEditorChange}
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-application fieldset-type-text">
                                                        <label for="application">Application email/URL</label>
                                                        <div className="field required-field">
                                                            <input type="text" className="input-text" name="application" id="application" placeholder="Enter an email address or website URL" value="Shazzy@yopmail.com" maxlength="" required="" />
                                                        </div>
                                                    </fieldset>

                                                    <div className="block-title">
                                                        <h3>Company details</h3>
                                                    </div>
                                                    <fieldset className="fieldset-company_name fieldset-type-text">
                                                        <label for="company_name">Company name</label>
                                                        <div className="field required-field">
                                                            <input type="text" className="input-text" name="company_name" id="company_name" placeholder="Enter the name of the company" value="" maxlength="" required="" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_website fieldset-type-text">
                                                        <label for="company_website">Website <small>(optional)</small>
                                                        </label>
                                                        <div className="field ">
                                                            <input type="text" className="input-text" name="company_website" id="company_website" placeholder="http://" value="" maxlength="" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_tagline fieldset-type-text">
                                                        <label for="company_tagline">Tagline <small>(optional)</small>
                                                        </label>
                                                        <div className="field ">
                                                            <input type="text" className="input-text" name="company_tagline" id="company_tagline" placeholder="Briefly describe your company" value="" maxlength="64" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_video fieldset-type-text">
                                                        <label for="company_video">Video <small>(optional)</small>
                                                        </label>
                                                        <div className="field ">
                                                            <input type="text" className="input-text" name="company_video" id="company_video" placeholder="A link to a video about your company" value="" maxlength="" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_twitter fieldset-type-text">
                                                        <label for="company_twitter">Twitter username <small>(optional)</small>
                                                        </label>
                                                        <div className="field ">
                                                            <input type="text" className="input-text" name="company_twitter" id="company_twitter" placeholder="@yourcompany" value="" maxlength="" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_logo fieldset-type-file">
                                                        <label for="company_logo">Logo <small>(optional)</small>
                                                        </label>
                                                        <div className="field ">
                                                            <div className="job-manager-uploaded-files"></div>
                                                            <input type="file" className="input-text wp-job-manager-file-upload" data-file_types="jpg|jpeg|gif|png" name="company_logo" id="company_logo" placeholder="" />
                                                            <small className="description"> Maximum file size: 512 MB. </small>
                                                        </div>
                                                    </fieldset>
                                                    <div className="submit">
                                                        <input type="hidden" name="job_manager_form" value="submit-job" />
                                                        <input type="hidden" name="job_id" value="0" />
                                                        <input type="hidden" name="step" value="0" />
                                                        <input type="submit" name="submit_job" className="button" value="Preview" />
                                                        <input type="submit" name="save_draft" className="button button-outline save_draft" value="Save Draft" formnovalidate="" />
                                                        <span className="spinner"></span>
                                                    </div>
                                                </form>
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
}

export default Submit;
