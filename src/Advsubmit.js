import React, {useState} from 'react';
// import "https://buzzinguniverse.iqspark.org/css_file/advsubmit.css"
import { Helmet } from 'react-helmet';
import { Editor } from '@tinymce/tinymce-react';
function Advsubmit() {
    const [content, setContent] = useState('');

    const handleEditorChange = (content) => {
        setContent(content);
    };
    return (
        <>
        <Helmet>
        <link
          rel="stylesheet"
          href="https://buzzinguniverse.iqspark.org/css_file/advsubmit.css"
        />
      </Helmet>
            <article style={{
                width: "70%",
                margin: "0 auto",
                marginTop: "100px"
            }} id="post-469" className="post-469 page type-page status-publish hentry beehive-post">
                <div className="entry-content clearfix">
                    <form action="" method="post" className="adverts-form adverts-form-aligned">
                        <fieldset>
                            <input type="hidden" name="_post_id" id="_post_id" />
                            <input type="hidden" name="_adverts_action" id="_adverts_action" value="preview" />
                            <input type="hidden" name="_wpadverts_checksum" id="_wpadverts_checksum" value="deb2771cce8ca3ab0fe86e155662fbd5" />
                            <input type="hidden" name="_wpadverts_checksum_nonce" id="_wpadverts_checksum_nonce" value="4e497fc2fc" />
                            <input type="hidden" name="_post_id_nonce" id="_post_id_nonce" />
                            <input type="hidden" name="_timetrap_field" id="_timetrap_field" value="Y3B2d2RGS0x1MnZkdWE3MEtwSk1tZz09" />
                            <div className="adverts-control-group adverts-field-header adverts-field-name-_contact_information">
                                <div className="adverts-field-header block-title">
                                    <h3 className="adverts-field-header-title">Contact Information</h3>
                                </div>
                            </div>
                            <div className="adverts-control-group adverts-field-account adverts-field-name-_adverts_account">
                                <label for="_adverts_account"> Account </label>
                                <div>You are posting as <strong>
                                    <a href="/activity/">Shazzy</a>
                                </strong>. <br />If you want to use a different account, please <a href="/wp-login.php?action=logout&amp;_wpnonce=a802432ae5&amp;redirect_to=https%3A%2F%2Fbuzzinguniverse.com%2Fterms-of-service%2F%3Floggedout%3Dtrue">logout</a>. </div>
                            </div>
                            <div className="adverts-control-group adverts-field-text adverts-field-name-adverts_person">
                                <label for="adverts_person"> Contact Person <span className="adverts-form-required">*</span>
                                </label>
                                <input type="text" name="adverts_person" id="adverts_person" value="Shazzy" />
                            </div>
                            <div className="adverts-control-group adverts-field-text adverts-field-name-adverts_email">
                                <label for="adverts_email"> Email <span className="adverts-form-required">*</span>
                                </label>
                                <input type="text" name="adverts_email" id="adverts_email" value="Shazzy@yopmail.com" />
                            </div>
                            <div className="adverts-control-group adverts-field-text adverts-field-name-adverts_phone">
                                <label for="adverts_phone"> Phone Number </label>
                                <input type="text" name="adverts_phone" id="adverts_phone" />
                            </div>
                            <div className="adverts-control-group adverts-field-header adverts-field-name-_item_information">
                                <div className="adverts-field-header block-title">
                                    <h3 className="adverts-field-header-title">Item Information</h3>
                                </div>
                            </div>
                            <div className="adverts-control-group adverts-field-text adverts-field-name-post_title">
                                <label for="post_title"> Title <span className="adverts-form-required">*</span>
                                </label>
                                <input type="text" name="post_title" id="post_title" />
                            </div>
                            <div className="adverts-control-group adverts-field-select adverts-field-name-advert_category">
                                <label for="advert_category"> Category </label>
                                <div className="adverts-multiselect-holder">
                                    <input type="text" id="advert_category" placeholder="Select options ..." autocomplete="off" className="adverts-multiselect-input" value="" />
                                    <div className="adverts-multiselect-options">
                                        <label for="advert_category-0" className="adverts-option-depth-0">
                                            <input type="checkbox" id="advert_category-0" value="28" name="advert_category[]" />
                                            <span>Default</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="adverts-control-group adverts-field-gallery adverts-field-name-gallery">
                                <label for="gallery"> Gallery </label>
                                <div id="adverts-plupload-upload-ui-gallery" className="adverts-plupload-upload-ui adverts-browser-frontend drag-drop">
                                    <div id="adverts-drag-drop-area-gallery" className="adverts-drag-drop-area"></div>
                                    <div className="adverts-gallery">
                                        <p>Drop files here to add them.</p>
                                        <p>
                                            <a href="#" id="adverts-plupload-browse-button-gallery" className="adverts-plupload-browse-button adverts-button">browse files ...</a>
                                        </p>
                                    </div>
                                    <div className="adverts-gallery-uploads ui-sortable"></div>
                                    <div id="html5_1i683ejrj1lpqf8j1rqu1te88v33_container" className="moxie-shim moxie-shim-html5">
                                        <input id="html5_1i683ejrj1lpqf8j1rqu1te88v33" type="file" multiple="" accept="" />
                                    </div>
                                </div>
                            </div>
                            <div className="adverts-control-group adverts-field-textarea adverts-field-name-post_content">
                                <label for="post_content"> Description <span className="adverts-form-required">*</span>
                                </label>
                                <div id="wp-post_content-wrap" className="wp-core-ui wp-editor-wrap tmce-active">
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
                            </div>
                            <div className="adverts-control-group adverts-field-text adverts-field-name-adverts_price">
                                <label for="adverts_price"> Price </label>
                                <input type="text" name="adverts_price" id="adverts_price" className="adverts-filter-money" />
                            </div>
                            <div className="adverts-control-group adverts-field-text adverts-field-name-adverts_location">
                                <label for="adverts_location"> Location </label>
                                <input type="text" name="adverts_location" id="adverts_location" />
                            </div>
                            <div className="adverts-control-group adverts-field-header adverts-field-name-_listing_information">
                                <div className="adverts-field-header block-title">
                                    <h3 className="adverts-field-header-title">Listing Information</h3>
                                </div>
                            </div>
                            <div className="adverts-control-group adverts-payments-field-payment adverts-field-name-payments_listing_type">
                                <label for="payments_listing_type"> Listing <span className="adverts-form-required">*</span>
                                </label>
                                <div className="adverts-pricings-list">
                                    <div className="adverts-listing-type-x ">
                                        <label className="adverts-cute-input adverts-cute-radio " for="payments_listing_type_2534">
                                            <input name="payments_listing_type" className="adverts-listing-type-input" id="payments_listing_type_2534" type="radio" value="2534" />
                                            <div className="adverts-cute-input-indicator"></div>
                                        </label>
                                        <div className="adverts-listing-type-field">
                                            <div className="adverts-listing-type-name">
                                                <span className="adverts-listing-type-title">Premium</span>
                                            </div>
                                            <div className="adverts-listing-type-features">
                                                <span className="adverts-listing-type-feature-duration">
                                                    <span className="adverts-listing-type-icon adverts-icon-clock"></span> Visible 45 days </span>
                                            </div>
                                        </div>
                                        <span className="adverts-listing-type-cost"> $50.00 </span>
                                    </div>
                                    <div className="adverts-listing-type-x ">
                                        <label className="adverts-cute-input adverts-cute-radio " for="payments_listing_type_2533">
                                            <input name="payments_listing_type" className="adverts-listing-type-input" id="payments_listing_type_2533" type="radio" value="2533" checked="checked" />
                                            <div className="adverts-cute-input-indicator"></div>
                                        </label>
                                        <div className="adverts-listing-type-field">
                                            <div className="adverts-listing-type-name">
                                                <span className="adverts-listing-type-title">Free</span>
                                            </div>
                                            <div className="adverts-listing-type-features">
                                                <span className="adverts-listing-type-feature-duration">
                                                    <span className="adverts-listing-type-icon adverts-icon-clock"></span> Visible 30 days </span>
                                            </div>
                                        </div>
                                        <span className="adverts-listing-type-cost"> Free </span>
                                    </div>
                                </div>
                            </div>
                            <div className="adverts-control-group adverts-field-text adverts-field-name-website_address">
                                <label for="website_address"> Website Address </label>
                                <input type="text" name="website_address" id="website_address" autocomplete="off" />
                            </div>
                            <div className="adverts-control-group submit adverts-field-actions">
                                <input type="submit" name="submit" value="Preview" className="adverts-cancel-unload medium" />
                            </div>
                        </fieldset>
                        <input type="hidden" name="wpadverts-form-upload-uniqid" id="wpadverts-form-upload-uniqid" />
                    </form>
                </div>

            </article>
        </>
    );
}

export default Advsubmit;
