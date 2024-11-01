import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Editor } from '@tinymce/tinymce-react';

const Submitarticle = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const triggerFileInput = (inputId) => {
    document.getElementById(inputId).click();
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://buzzinguniverse.iqspark.org/css_file/submitarticle.css"
        />
      </Helmet>
      <div style={{ backgroundColor: "#000" }} id="beehive-page" className="site">
        <div id="content" className="site-content">
          <div data-elementor-type="wp-page" data-elementor-id="4795" className="elementor elementor-4795" data-elementor-post-type="page">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-06f419f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="06f419f" data-element_type="section">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9a5a920" data-id="9a5a920" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-05bc150 elementor-widget elementor-widget-shortcode" data-id="05bc150" data-element_type="widget" data-widget_type="shortcode.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-shortcode">
                          <form className="wpuf-form-add wpuf-form-layout1 wpuf-theme-style" action="" method="post">
                            <ul className="wpuf-form form-label-above">

                              <li className="wpuf-el category" data-label="Category">
                                <div className="wpuf-label">
                                  <label htmlFor="category_4781">Category <span className="required">*</span>
                                  </label>
                                </div>
                                <div className="wpuf-fields wpuf_category_select_4783_4781">
                                  <select data-required="yes" data-type="select" name="category" id="category" className="category wpuf_category_4781">
                                    <option value="-1">– select –</option>
                                    <option className="level-0" value="126">Business</option>
                                    <option className="level-0" value="43">Fashion</option>
                                    <option className="level-0" value="127">Finance</option>
                                    <option className="level-0" value="44">Food</option>
                                    <option className="level-0" value="45">Fun</option>
                                    <option className="level-0" value="46">Health</option>
                                    <option className="level-0" value="47">Hobbies</option>
                                    <option className="level-0" value="108">Jobs</option>
                                    <option className="level-0" value="48">Lifestyle</option>
                                    <option className="level-0" value="150">Marketing</option>
                                    <option className="level-0" value="49">Sports</option>
                                    <option className="level-0" value="50">Technology</option>
                                    <option className="level-0" value="51">Traveling</option>
                                    <option className="level-0" value="1">Uncategorized</option>
                                    <option className="level-0" value="128">Weather</option>
                                  </select>
                                  <span className="wpuf-wordlimit-message wpuf-help"></span>
                                  <span className="wpuf-help">Select a category for your article</span>
                                </div>
                              </li>
                              <li className="wpuf-el post_content field-size-large" data-label="Article Description">
                                <div className="wpuf-label">
                                  <label htmlFor="post_content_4781">Article Description <span className="required">*</span>
                                  </label>
                                </div>
                                <div className="wpuf-fields wpuf-rich-validation wpuf_post_content_4781" data-type="rich" data-required="yes" data-id="post_content_4781" data-name="post_content">
                                  <div id="wpuf-insert-image-container">
                                    <button
                                      type="button"
                                      className="wpuf-button wpuf-insert-image"
                                      id="wpuf-insert-image_4781"
                                      onClick={() => triggerFileInput('html5_1i635103c13hf1hk34bh16l51ca53')}
                                    >
                                      <span className="wpuf-media-icon"></span> Insert Photo
                                    </button>
                                    <input
                                      id="html5_1i635103c13hf1hk34bh16l51ca53"
                                      type="file"
                                      accept="image/jpeg,.jpg,.jpeg,image/gif,.gif,image/png,.png,image/bmp,.bmp"
                                      style={{ display: 'none' }}
                                    />
                                  </div>
                                  <div id="wp-post_content_4781-wrap" className="wp-core-ui wp-editor-wrap tmce-active">
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
                                  <span className="wpuf-help">Write the full description of your article</span>
                                </div>
                              </li>
                              <li className="wpuf-el featured_image" data-label="Featured Image">
                                <div className="wpuf-label">
                                  <label htmlFor="featured_image_4781">Featured Image <span className="required">*</span>
                                  </label>
                                </div>
                                <div className="wpuf-fields">
                                  <div id="wpuf-featured_image-4781-upload-container">
                                    <div className="wpuf-file-warning"></div>
                                    <div className="wpuf-attachment-upload-filelist" data-type="file" data-required="yes">
                                      <button
                                        type="button"
                                        id="wpuf-featured_image-4781-pickfiles"
                                        className="button file-selector  wpuf_featured_image_4781"
                                        onClick={() => triggerFileInput('html5_1i635103g14gla7f2n0p1i47f6')}
                                      >
                                        Featured Image
                                      </button>
                                      <input
                                        id="html5_1i635103g14gla7f2n0p1i47f6"
                                        type="file"
                                        multiple
                                        accept="image/jpeg,.jpg,.jpeg,image/gif,.gif,image/png,.png,image/bmp,.bmp"
                                        style={{ display: 'none' }}
                                      />
                                      <ul className="wpuf-attachment-list thumbnails ui-sortable"></ul>
                                    </div>
                                  </div>
                                  <span className="wpuf-help">Upload the main image of your article</span>
                                </div>
                              </li>
                              <li className="wpuf-el tags" data-label="Tags">
                                <div className="wpuf-label">
                                  <label htmlFor="tags_4781">Tags <span className="required">*</span>
                                  </label>
                                </div>
                                <div className="wpuf-fields">
                                  <input className="textfield wpuf_tags_4781" id="tags_4781" type="text" data-required="yes" data-type="text" name="tags" placeholder="" value="" size="40" autoComplete="off" />
                                  <span className="wpuf-wordlimit-message wpuf-help"></span>
                                  <span className="wpuf-help">Separate tags with commas</span>
                                </div>
                              </li>
                              <li className="wpuf-submit">
                                <div className="wpuf-label"> &nbsp; </div>
                                <input type="hidden" id="_wpnonce" name="_wpnonce" value="dba7be9b45" />
                                <input type="hidden" name="_wp_http_referer" value="/submit-article/" />
                                <input type="hidden" name="form_id" value="4781" />
                                <input type="hidden" name="page_id" value="4795" />
                                <input type="hidden" name="wpuf_form_status" value="new" />
                                <input type="hidden" name="wpuf_form_revision" value="1" />
                                <input type="hidden" name="post_id" value="0" />
                                <input type="hidden" name="wpuf_form_gateway" value="bank" />
                                <input type="hidden" name="wpuf_form_total" value="0" />
                                <input type="hidden" name="wpuf_form_payment" value="post" />
                                <button type="submit" name="submit" className="wpuf-submit-button">Submit Article</button>
                              </li>

                            </ul>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submitarticle;
