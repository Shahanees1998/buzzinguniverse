import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Editor } from '@tinymce/tinymce-react';
import '../css/submit.css'
function Submit() {
    const [jobInfo, setJobInfo] = useState({
        title: '',
        location: '',
        remote: false,
        type: 'Full Time',
        description: '',
        companyId : '',
        application: '',
    });

    const [companyInfo, setCompanyInfo] = useState({
        name: '',
        website: '',
        tagline: '',
        video: '',
        twitter: '',
        logo: null,
    });

    const handleJobChange = (e) => {
        const { name, value, type, checked } = e.target;
        setJobInfo((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleCompanyChange = (e) => {
        const { name, value } = e.target;
        setCompanyInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditorChange = (content) => {
        setJobInfo((prev) => ({
            ...prev,
            description: content,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setCompanyInfo((prev) => ({
            ...prev,
            logo: file,
        }));
    };
    const validateForm = () => {
        const { title, location, type, description, application, companyId } = jobInfo;
        const { name, website, tagline, video, twitter, logo } = companyInfo;

        if (!title || !location || !type || !description || !application || !companyId) {
            alert("Please fill in all the fields for job");
            return false;
        }
        if( companyId == '0' &&  (!website || !tagline || !video || !twitter || !logo))
        {
            alert("Please fill in all the fields for company");
            return false;
        }
        return true;
    };
    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm) {
            console.log('all fields filled')
        }



    }
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
                                                <form action="/post-a-job/" method="post" id="submit-job-form" className="job-manager-form" enctype="multipart/form-data" onSubmit={handleSubmit} >
                                                    <input type="hidden" id="_wpjm_nonce" name="_wpjm_nonce" value="1dca455611" />
                                                    <input type="hidden" name="_wp_http_referer" value="/post-a-job/" />
                                                    <div className="block-title">
                                                        <h3>Job details</h3>
                                                    </div>

                                                    <fieldset className="fieldset-job_title fieldset-type-text">
                                                        <label htmlFor="job_title">Job Title</label>
                                                        <div className="field required-field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="title"
                                                                id="job_title"
                                                                placeholder="Enter the job title"
                                                                value={jobInfo.title}
                                                                onChange={handleJobChange}
                                                                required
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-job_location fieldset-type-text">
                                                        <label htmlFor="job_location">Location <small>(optional)</small></label>
                                                        <div className="field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="location"
                                                                id="job_location"
                                                                placeholder="e.g. &quot;London&quot;"
                                                                value={jobInfo.location}
                                                                onChange={handleJobChange}
                                                            />
                                                            <small className="description">Leave this blank if the location is not important</small>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-remote_position fieldset-type-checkbox">
                                                        <label htmlFor="remote_position">Remote Position <small>(optional)</small></label>
                                                        <div className="field" style={{ marginTop: '1.5%' }}>
                                                            <input
                                                                type="checkbox"
                                                                className="input-checkbox"
                                                                name="remote"
                                                                id="remote_position"
                                                                checked={jobInfo.remote}
                                                                onChange={handleJobChange}
                                                            />
                                                            <small className="description">Select if this is a remote position.</small>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-job_type fieldset-type-term-select">
                                                        <label htmlFor="job_type">Job type</label>
                                                        <div className="field required-field">
                                                            <select
                                                                name="type"
                                                                id="job_type"
                                                                className="postform"
                                                                value={jobInfo.type}
                                                                onChange={handleJobChange}
                                                            >
                                                                <option value="Freelance">Freelance</option>
                                                                <option value="Full Time">Full Time</option>
                                                                <option value="Internship">Internship</option>
                                                                <option value="Part Time">Part Time</option>
                                                                <option value="Temporary">Temporary</option>
                                                            </select>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-job_description fieldset-type-wp-editor">
                                                        <label htmlFor="job_description">Description</label>
                                                        <div className="field required-field">
                                                            <Editor
                                                                apiKey="6n6085y2zxnpx1z72tdi0n1cqo5x7zl2zv3z5xtxikdg5oo6" // Get your free API key at https://www.tiny.cloud/
                                                                value={jobInfo.description}
                                                                init={{
                                                                    height: 400,
                                                                    menubar: false,
                                                                    plugins: [
                                                                        'advlist autolink lists link image charmap print preview anchor',
                                                                        'searchreplace visualblocks code fullscreen',
                                                                        'insertdatetime media table paste code help wordcount'
                                                                    ],
                                                                    toolbar:
                                                                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                                                                }}
                                                                onEditorChange={handleEditorChange}
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-application fieldset-type-text">
                                                        <label htmlFor="application">Application email/URL</label>
                                                        <div className="field required-field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="application"
                                                                id="application"
                                                                placeholder="Enter an email address or website URL"
                                                                value={jobInfo.application}
                                                                onChange={handleJobChange}
                                                                required
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-job_type fieldset-type-term-select">
                                                        <label htmlFor="job_type">Select Company</label>
                                                        <div className="field required-field">
                                                            <select
                                                                name="companyId"
                                                                id="companyId"
                                                                className="postform"
                                                                value={jobInfo.companyId}
                                                                onChange={handleJobChange}
                                                            >
                                                                <option value="4">Company 1</option>
                                                                <option value="3">Company 2</option>
                                                                <option value="2">Company 3</option>
                                                                <option value="1">Company 4</option>
                                                                <option value="0">Other</option>
                                                            </select>
                                                        </div>
                                                    </fieldset>
                                                  {jobInfo.companyId == '0' &&  <>
                                                    <div className="block-title">
                                                        <h3>Company details</h3>
                                                    </div>
                                                    <fieldset className="fieldset-company_name fieldset-type-text">
                                                        <label htmlFor="company_name">Company name</label>
                                                        <div className="field required-field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="name"
                                                                id="company_name"
                                                                placeholder="Enter the name of the company"
                                                                value={companyInfo.name}
                                                                onChange={handleCompanyChange}
                                                                required
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_website fieldset-type-text">
                                                        <label htmlFor="company_website">Website <small>(optional)</small></label>
                                                        <div className="field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="website"
                                                                id="company_website"
                                                                placeholder="http://"
                                                                value={companyInfo.website}
                                                                onChange={handleCompanyChange}
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_tagline fieldset-type-text">
                                                        <label htmlFor="company_tagline">Tagline <small>(optional)</small></label>
                                                        <div className="field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="tagline"
                                                                id="company_tagline"
                                                                placeholder="Briefly describe your company"
                                                                value={companyInfo.tagline}
                                                                onChange={handleCompanyChange}
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_video fieldset-type-text">
                                                        <label htmlFor="company_video">Video <small>(optional)</small></label>
                                                        <div className="field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="video"
                                                                id="company_video"
                                                                placeholder="A link to a video about your company"
                                                                value={companyInfo.video}
                                                                onChange={handleCompanyChange}
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_twitter fieldset-type-text">
                                                        <label htmlFor="company_twitter">Twitter username <small>(optional)</small></label>
                                                        <div className="field">
                                                            <input
                                                                type="text"
                                                                className="input-text text-field"
                                                                name="twitter"
                                                                id="company_twitter"
                                                                placeholder="@yourcompany"
                                                                value={companyInfo.twitter}
                                                                onChange={handleCompanyChange}
                                                            />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="fieldset-company_logo fieldset-type-file">
                                                        <label htmlFor="company_logo">Logo <small>(optional)</small></label>
                                                        <div className="field">
                                                            <input
                                                                type="file"
                                                                className="input-text wp-job-manager-file-upload"
                                                                data-file_types="jpg|jpeg|gif|png"
                                                                name="logo"
                                                                id="company_logo"
                                                                onChange={handleFileChange}
                                                            />
                                                            <small className="description"> Maximum file size: 512 MB. </small>
                                                        </div>
                                                    </fieldset>
                                                    </>}
                                                    <div className="submit">
                                                        <input type="hidden" name="job_manager_form" value="submit-job" />
                                                        <input type="hidden" name="job_id" value="0" />
                                                        <input type="hidden" name="step" value="0" />
                                                        <input type="submit" name="submit_job" className="button" value="Submit" />
                                                        <input type="submit" name="save_draft" className="button button-outline save_draft" value="Save Draft" formNoValidate style={{ marginLeft: '2%' }} />
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
