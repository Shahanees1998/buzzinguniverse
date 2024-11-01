import React from 'react';
// import "https://buzzinguniverse.iqspark.org/css_file/group.css";
import { Helmet } from 'react-helmet';
const GroupPage = () => {
    const style = {
        visibility: 'visible',
        animationName: 'slideInUp'
    };

    const style1 = {
        visibility: 'hidden',
        animationName: 'none'
    };
    return (
        <>
         <Helmet>
        <link
          rel="stylesheet"
          href="https://buzzinguniverse.iqspark.org/css_file/group.css"
        />
      </Helmet>
            <article style={{
                width: "50%",
                margin: "0 auto",
                marginTop: "5%"
            }} id="post-0" className="post-0 page type-page status-publish hentry beehive-post">
                <div className="entry-content clearfix">
                    <div id="buddypress" className="buddypress-wrap beehive bp-dir-hori-nav alignwide">
                        <input type="hidden" id="rtmedia_activity_privacy_nonce" name="rtmedia_activity_privacy_nonce" value="b9075b3537" />
                        <input type="hidden" name="_wp_http_referer" value="/groups/" />
                        <nav className="groups-type-navs main-navs bp-navs dir-navs " role="navigation" aria-label="Directory menu">
                            <ul className="component-navigation groups-nav">
                                <li id="groups-all" className="selected" data-bp-scope="all" data-bp-object="groups">
                                    <a href="/groups/"> All Groups <span className="count">145</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="screen-content">
                            <div className="subnav-filters filters no-ajax" id="subnav-filters">
                                <div className="subnav-search clearfix">
                                    <div className="dir-search groups-search bp-search" data-bp-search="groups">
                                        <form action="" method="get" className="bp-dir-search-form" id="dir-groups-search-form" role="search">
                                            <label for="dir-groups-search" className="bp-screen-reader-text">Search Groups...</label>
                                            <input id="dir-groups-search" name="groups_search" type="search" placeholder="Search Groups..." />
                                            <button type="submit" id="dir-groups-search-submit" className="nouveau-search-submit" name="dir_groups_search_submit">
                                                <span className="dashicons dashicons-search" aria-hidden="true"></span>
                                                <span id="button-text" className="bp-screen-reader-text">Search</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div id="comp-filters" className="component-filters clearfix">
                                    <div id="groups-order-select" className="last filter">
                                        <label for="groups-order-by" className="bp-screen-reader-text">
                                            <span>Order By:</span>
                                        </label>
                                        <div className="select-wrap">
                                            <select id="groups-order-by" data-bp-filter="groups">
                                                <option value="active">Last Active</option>
                                                <option value="popular">Most Members</option>
                                                <option value="newest">Newly Created</option>
                                                <option value="alphabetical">Alphabetical</option>
                                            </select>
                                            <span className="select-arrow" aria-hidden="true"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="groups-dir-list" className="groups dir-list" data-bp-list="groups">
                                <ul id="groups-list" className="item-list groups-list bp-list grid two">
                                    <li className="item-entry animate-item slideInUp odd public group-has-avatar" data-bp-item-id="158" data-bp-item-component="groups" style={style} >
                                        <div className="list-wrap">
                                            <div className="item-cover"></div>
                                            <div className="item-avatar">
                                                <a href="/groups/tease-and-please-premium-collection-by-we-vibe-and-womanizer/">
                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/plugins/buddypress/bp-core/images/mystery-group.png" className="avatar group-158-avatar avatar-200 photo" width="200" height="200" alt="Group logo of tease-and-please-premium-collection-by-we-vibe-and-womanizer" />
                                                </a>
                                            </div>
                                            <div className="item">
                                                <div className="item-block">
                                                    <h5 className="list-title groups-title">
                                                        <a href="/groups/tease-and-please-premium-collection-by-we-vibe-and-womanizer/" className="bp-group-home-link tease-and-please-premium-collection-by-we-vibe-and-womanizer-home-link">tease-and-please-premium-collection-by-we-vibe-and-womanizer</a>
                                                    </h5>
                                                    <p className="last-activity item-meta mute"> Active <span>15 days ago</span>
                                                    </p>
                                                    <ul className="inline-members">
                                                        <li>
                                                            <a href="/members/margartkraker1/" title="Margart Kraker" target="_blank">
                                                                <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-35.png" className="avatar user-124-avatar avatar-35 photo" width="35" height="35" alt="Profile picture of Margart Kraker" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <p className="item-meta group-details">Public Group / 1 member</p>
                                                    <ul className=" groups-meta action">
                                                        <li className="generic-button">
                                                            <a href="/groups/tease-and-please-premium-collection-by-we-vibe-and-womanizer/">View Group</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default GroupPage;
