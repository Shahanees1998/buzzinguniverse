import React from 'react';
import Header from './components/Header';
import LoginSection from './components/LoginSection';
import Articles from './components/Articles';
import ExploreSection from './components/ExploreSection';
import VirtualPlace from './components/virtualPlace';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'https://buzzinguniverse.iqspark.org/css_file/landingpage.css';
import { Helmet } from 'react-helmet';
function LandingPage() {

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://buzzinguniverse.iqspark.org/css_file/landingpage.css"
        />
      </Helmet>
      <div className="home-page bp-nouveau home page-template page-template-elementor_canvas page page-id-99 wp-custom-logo theme-beehive woocommerce-js beehive beehive-guest-user beehive-child elementor-default elementor-template-canvas elementor-kit-32 elementor-page elementor-page-99 desktop-slidenav right-sidebar js e--ua-blink e--ua-chrome e--ua-webkit">
        {/* <Header />
      <Articles />
      <ExploreSection />
      <VirtualPlace /> */}
        <div data-elementor-type="wp-page" data-elementor-id="99" className="elementor elementor-99"
          data-elementor-post-type="page">
          <Header />
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-5a4c9df0 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="5a4c9df0" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-668726fa"
                data-id="668726fa" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-205ea3c3 elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient elementor-widget elementor-widget-posts"
                    data-id="205ea3c3" data-element_type="widget" id="home-post"
                    data-settings="{&quot;cards_columns&quot;:&quot;5&quot;,&quot;cards_columns_tablet&quot;:&quot;2&quot;,&quot;cards_columns_mobile&quot;:&quot;1&quot;,&quot;cards_row_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:35,&quot;sizes&quot;:[]},&quot;cards_row_gap_widescreen&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;cards_row_gap_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;cards_row_gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;cards_row_gap_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;cards_row_gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}"
                    data-widget_type="posts.cards">
                    <div className="elementor-widget-container">
                      <div
                        className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid elementor-has-item-ratio">
                        <article
                          className="elementor-post elementor-grid-item post-5901 post type-post status-publish format-standard has-post-thumbnail hentry category-food tag-5-desserts-your-guests-will-love-at-a-holiday-dinner beehive-post">
                          <div className="elementor-post__card">
                            <a className="elementor-post__thumbnail__link"
                              href="/articale1"
                              tabindex="-1">
                              <div className="elementor-post__thumbnail"><img decoding="async" width="300"
                                height="200"
                                src="https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner-300x200.jpg"
                                className="attachment-medium size-medium wp-image-5903" alt=""
                                srcset="https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner-300x200.jpg  300w,https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner-450x300.jpg  450w,https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner-310x206.jpg  310w,https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner-150x100.jpg  150w,https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner-600x400.jpg  600w,https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner.jpg  602w"
                                sizes="(max-width: 300px) 100vw, 300px" /></div>
                            </a>
                            <div className="elementor-post__badge">Food</div>
                            <div className="elementor-post__text">
                              <h3 className="elementor-post__title">
                                <a
                                  href="/articale1">
                                  5 Desserts Your Guests Will Love at a Holiday Dinner </a>
                              </h3>
                            </div>
                            <div className="elementor-post__meta-data">
                              <span className="elementor-post-date">
                                December 23, 2023 </span>
                            </div>
                          </div>
                        </article>
                        <article
                          className="elementor-post elementor-grid-item post-5465 post type-post status-publish format-standard has-post-thumbnail hentry category-business beehive-post">
                          <div className="elementor-post__card">
                            <a className="elementor-post__thumbnail__link"
                              href="/Articale4"
                              tabindex="-1">
                              <div className="elementor-post__thumbnail elementor-fit-height"><img
                                decoding="async" width="300" height="167"
                                src="https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-300x167.png"
                                className="attachment-medium size-medium wp-image-5467" alt=""
                                srcset="https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-300x167.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-768x427.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-540x300.png  540w,https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-310x172.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-150x83.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-600x333.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store.png  900w"
                                sizes="(max-width: 300px) 100vw, 300px" /></div>
                            </a>
                            <div className="elementor-post__badge">Business</div>
                            <div className="elementor-post__text">
                              <h3 className="elementor-post__title">
                                <a
                                  href="/Articale4">
                                  How to Start and Grow a Successful Online Store </a>
                              </h3>
                            </div>
                            <div className="elementor-post__meta-data">
                              <span className="elementor-post-date">
                                December 7, 2023 </span>
                            </div>
                          </div>
                        </article>
                        <article
                          className="elementor-post elementor-grid-item post-5048 post type-post status-publish format-standard has-post-thumbnail hentry category-marketing tag-the-art-of-building-a-strong-brand-and-attracting-customers beehive-post">
                          <div className="elementor-post__card">
                            <a className="elementor-post__thumbnail__link"
                              href="/articale3"
                              tabindex="-1">
                              <div className="elementor-post__thumbnail elementor-fit-height"><img
                                loading="lazy" decoding="async" width="300" height="154"
                                src="https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-300x154.png"
                                className="attachment-medium size-medium wp-image-5067" alt=""
                                srcset="https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-300x154.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-1024x526.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-768x394.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-584x300.png  584w,https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-310x159.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-150x77.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-600x308.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/11/098090.png  1130w"
                                sizes="(max-width: 300px) 100vw, 300px" /></div>
                            </a>
                            <div className="elementor-post__badge">Marketing</div>
                            <div className="elementor-post__text">
                              <h3 className="elementor-post__title">
                                <a
                                  href="/articale3">
                                  The Art of Building a Strong Brand and Attracting Customers </a>
                              </h3>
                            </div>
                            <div className="elementor-post__meta-data">
                              <span className="elementor-post-date">
                                November 15, 2023 </span>
                            </div>
                          </div>
                        </article>
                        <article
                          className="elementor-post elementor-grid-item post-5028 post type-post status-publish format-standard has-post-thumbnail hentry category-business tag-exploring-the-impact-of-nfts-in-reshaping-business-strategies beehive-post">
                          <div className="elementor-post__card">
                            <a className="elementor-post__thumbnail__link"
                              href="/articale2"
                              tabindex="-1">
                              <div className="elementor-post__thumbnail elementor-fit-height"><img
                                loading="lazy" decoding="async" width="300" height="154"
                                src="https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-300x154.png"
                                className="attachment-medium size-medium wp-image-5069" alt=""
                                srcset="https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-300x154.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-1024x526.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-768x394.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-584x300.png  584w,https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-310x159.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-150x77.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-600x308.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/11/08909.png  1130w"
                                sizes="(max-width: 300px) 100vw, 300px" /></div>
                            </a>
                            <div className="elementor-post__badge">Business</div>
                            <div className="elementor-post__text">
                              <h3 className="elementor-post__title">
                                <a
                                  href="/articale2">
                                  NFTs in Reshaping Business Strategies </a>
                              </h3>
                            </div>
                            <div className="elementor-post__meta-data">
                              <span className="elementor-post-date">
                                November 14, 2023 </span>
                            </div>
                          </div>
                        </article>
                        <article
                          className="elementor-post elementor-grid-item post-4989 post type-post status-publish format-standard has-post-thumbnail hentry category-health tag-the-role-of-nutrition-how-to-stay-healthy beehive-post">
                          <div className="elementor-post__card">
                            <a className="elementor-post__thumbnail__link"
                              href="/articale1"
                              tabindex="-1">
                              <div className="elementor-post__thumbnail elementor-fit-height"><img
                                loading="lazy" decoding="async" width="300" height="154"
                                src="https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-300x154.png"
                                className="attachment-medium size-medium wp-image-5000" alt=""
                                srcset="https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-300x154.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-1024x526.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-768x394.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-584x300.png  584w,https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-310x159.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-150x77.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu-600x308.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/11/The-Role-of-Nutrition-in-Preventing-and-Managing-Diseases-bu.png  1130w"
                                sizes="(max-width: 300px) 100vw, 300px" /></div>
                            </a>
                            <div className="elementor-post__badge">Health</div>
                            <div className="elementor-post__text">
                              <h3 className="elementor-post__title">
                                <a
                                  href="/articale1">
                                  The Role of Nutrition: How to Stay Healthy </a>
                              </h3>
                            </div>
                            <div className="elementor-post__meta-data">
                              <span className="elementor-post-date">
                                November 14, 2023 </span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-5e81d39 elementor-section-height-min-height elementor-section-full_width elementor-section-height-default elementor-section-items-middle"
            data-id="5e81d39" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3fc351af"
                data-id="3fc351af" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-278e3f58 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="278e3f58" data-element_type="section"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4ec46bf6"
                        data-id="4ec46bf6" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-3926edc5 elementor-widget elementor-widget-heading"
                            data-id="3926edc5" data-element_type="widget"
                            data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">Explore an
                                online <br />community</h2>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-57fdd486 elementor-widget elementor-widget-heading"
                            data-id="57fdd486" data-element_type="widget"
                            data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">Post ads!
                              </h2>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-4e6ce934 elementor-widget elementor-widget-heading"
                            data-id="4e6ce934" data-element_type="widget"
                            data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">Search for
                                jobs</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-20d71e8a"
                        data-id="20d71e8a" data-element_type="column"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-3a8a7c38 elementor-widget elementor-widget-image"
                            data-id="3a8a7c38" data-element_type="widget"
                            data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="576" height="1024"
                                src="https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-576x1024.jpg"
                                className="attachment-large size-large wp-image-7034" alt=""
                                srcset="https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-576x1024.jpg  576w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-169x300.jpg  169w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-768x1365.jpg  768w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-864x1536.jpg  864w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-1152x2048.jpg  1152w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-174x310.jpg  174w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-59x105.jpg  59w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-600x1067.jpg  600w,https://buzzinguniverse.com/wp-content/uploads/2024/08/robot-h-scaled.jpg  1440w"
                                sizes="(max-width: 576px) 100vw, 576px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-1942e8b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="1942e8b" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-363104fb"
                data-id="363104fb" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-372b2e8f elementor-widget elementor-widget-shortcode"
                    data-id="372b2e8f" data-element_type="widget" data-widget_type="shortcode.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-shortcode">
                        <div className="ditty ditty-ticker" data-id="1391" data-uniqid="ditty-670847f73681a"
                          data-type="ticker" data-display="1391" data-title="none"
                          data-title_position="start" data-title_horizontal_position="start"
                          data-title_vertical_position="start">
                          <div className="ditty__contents ditty-ticker__contents">
                            <div className='virtual-section-div'>
                              <p className='virtual-section-slide'>
                                Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars - Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars -
                                Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars - Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars -
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-4e95c06e elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile_extra elementor-section-height-default elementor-section-height-default"
            data-id="4e95c06e" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5b8ac832"
                data-id="5b8ac832" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-63653170 elementor-widget elementor-widget-image"
                    data-id="63653170" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-1024x683.png"
                        className="attachment-large size-large wp-image-1538" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4af5905"
                data-id="4af5905" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-527015af elementor-widget elementor-widget-image"
                    data-id="527015af" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-1024x683.png"
                        className="attachment-large size-large wp-image-1539" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2c877c7b"
                data-id="2c877c7b" data-element_type="column"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-70bc14a8 elementor-widget elementor-widget-heading"
                    data-id="70bc14a8" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Connect with businesses
                        <br />through a virtual place</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-5f1d2a5a elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile_extra elementor-section-height-default elementor-section-height-default"
            data-id="5f1d2a5a" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3a4c9ef6"
                data-id="3a4c9ef6" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-1fcd6294 elementor-widget elementor-widget-image"
                    data-id="1fcd6294" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-1024x683.png"
                        className="attachment-large size-large wp-image-1584" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-532082d7"
                data-id="532082d7" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-7f348f95 elementor-widget elementor-widget-image"
                    data-id="7f348f95" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-1024x683.png"
                        className="attachment-large size-large wp-image-1541" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4b6a10ed"
                data-id="4b6a10ed" data-element_type="column"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-73ee8f9a elementor-widget elementor-widget-heading"
                    data-id="73ee8f9a" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Create and present your
                        <br />business idea to
                        companies</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-2f55ef33 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-mobile elementor-hidden-widescreen elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="2f55ef33" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-17e812fe"
                data-id="17e812fe" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-2fb67232 elementor-widget elementor-widget-image"
                    data-id="2fb67232" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-1024x683.png"
                        className="attachment-large size-large wp-image-1538" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/1-4.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-73ca4aa2"
                data-id="73ca4aa2" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-5ed635c8 elementor-widget elementor-widget-image"
                    data-id="5ed635c8" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-1024x683.png"
                        className="attachment-large size-large wp-image-1539" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/2-5.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-542c5b06"
                data-id="542c5b06" data-element_type="column"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-5eb7d000 elementor-widget elementor-widget-heading"
                    data-id="5eb7d000" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Connect with
                        businesses<br />through a virtual place</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-34ecd156 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-mobile elementor-hidden-widescreen elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="34ecd156" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2d42905c"
                data-id="2d42905c" data-element_type="column"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-754325df elementor-widget elementor-widget-image"
                    data-id="754325df" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-1024x683.png"
                        className="attachment-large size-large wp-image-1584" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/3-7.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-160e8af7"
                data-id="160e8af7" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-671ce908 elementor-widget elementor-widget-image"
                    data-id="671ce908" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1024" height="683"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-1024x683.png"
                        className="attachment-large size-large wp-image-1541" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-1024x683.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-300x200.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-768x512.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-1536x1025.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-450x300.png  450w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-310x207.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-150x100.png  150w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3-600x400.png  600w,https://buzzinguniverse.com/wp-content/uploads/2023/06/4-3.png  2000w"
                        sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-fe8e09a"
                data-id="fe8e09a" data-element_type="column"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-18d60609 elementor-widget elementor-widget-heading"
                    data-id="18d60609" data-element_type="widget"
                    data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
                    data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Create and present your
                        <br />business idea</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-4eb175c8 elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle"
            data-id="4eb175c8" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-466c5e60"
                data-id="466c5e60" data-element_type="column">
                <div className="elementor-widget-wrap">
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-0a0a6e1 elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle"
            data-id="0a0a6e1" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-262389e"
                data-id="262389e" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-d76520d elementor-widget elementor-widget-heading"
                    data-id="d76520d" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Join us on</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-83ceda6 elementor-widget elementor-widget-heading"
                    data-id="83ceda6" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Buzzing Universe!</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-73ea7367 elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle"
            data-id="73ea7367" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6c29eef8"
                data-id="6c29eef8" data-element_type="column">
                <div className="elementor-widget-wrap">
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-527d6b60 elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="527d6b60" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3b9b5b85"
                data-id="3b9b5b85" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-7b1adec2 elementor-widget elementor-widget-audio"
                    data-id="7b1adec2" data-element_type="widget" data-widget_type="audio.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-soundcloud-wrapper">
                        <iframe loading="lazy" width="1110" height="200" frameborder="no"
                          src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1717217085&amp;show_artwork=false&amp;maxheight=1000&amp;maxwidth=1110&amp;secret_token=s-ZBxBh99sKNi&amp;auto_play=true&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_comments=false&amp;show_playcount=false&amp;show_user=false&amp;color"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-1c360be7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="1c360be7" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-55b63cdc"
                data-id="55b63cdc" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-14683a56 elementor-widget elementor-widget-image"
                    data-id="14683a56" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="300" height="52"
                        src="https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-300x52.png"
                        className="attachment-medium size-medium wp-image-907" alt=""
                        srcset="https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-300x52.png  300w,https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-1024x179.png  1024w,https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-768x134.png  768w,https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-1536x268.png  1536w,https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-2048x357.png  2048w,https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-650x113.png  650w,https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-310x54.png  310w,https://buzzinguniverse.com/wp-content/uploads/2023/06/Logo-4-150x26.png  150w"
                        sizes="(max-width: 300px) 100vw, 300px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-510f869d"
                data-id="510f869d" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-446cbf01 elementor-widget-tablet__width-initial elementor-widget elementor-widget-text-editor"
                    data-id="446cbf01" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p><strong>© 2024</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
