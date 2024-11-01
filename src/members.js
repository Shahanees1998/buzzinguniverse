import React from 'react';
// import "https://buzzinguniverse.iqspark.org/css_file/members.css"
import { Helmet } from 'react-helmet';
const Members = () => {

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://buzzinguniverse.iqspark.org/css_file/members.css"
                />
            </Helmet>
            <div id="beehive-page" class="site">
                <header id="sochead" class="site-header social-header user-nav-active">
                    <nav class="navbar beehive-navbar social fixed-top">
                        <div class="container">
                            <button class="beehive-toggler panel-toggler js-hiraku-offcanvas-btn" type="button" data-toggle-offcanvas="#js-hiraku-offcanvas-0" aria-expanded="false" aria-label="Menu" aria-controls="js-hiraku-offcanvas-0" id="hiraku-offcanvas-btn-0">
                                <span class="icon-bar bar1"></span>
                                <span class="icon-bar bar2"></span>
                                <span class="icon-bar bar3"></span>
                            </button>

                            <ul id="navbar-user" class="navbar-nav navbar-user">
                                <li class="mini-cart nav-item">
                                    <a href="/cart/" class="cart-contents nav-link" title="View Cart">
                                        <i class="uil-cart"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="/" class="nav-link login" data-toggle="modal" data-target="#login-modal">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/register" class="nav-link register">Register</a>
                                </li>
                            </ul>

                            <div id="beehive-ajax-search" class="beehive-ajax-search">
                                <form role="search" method="get" id="ajax-search-form" class="ajax-search-form form-inline" action="https://buzzinguniverse.com/">
                                    <div class="search-field">
                                        <i class="icon ion-android-search"></i>
                                        <input id="ajax-search-textfield" type="text" name="s" placeholder="search..." value="" autocomplete="off" required="" />
                                        <span class="beehive-loading-ring"></span>
                                    </div>
                                    <div class="search-button">
                                        <button type="submit" class="search-submit">
                                            <i class="icon ion-android-search"></i>
                                        </button>
                                    </div>
                                </form>
                                <div id="ajax-search-result"></div>
                            </div>
                            <div main-logo-header="">
                                <a class="navbar-brand" href="/">
                                    <img src="https://buzzinguniverse.com/wp-content/uploads/2023/06/809890-1.png" title="BuzzingUniverse- Login or Signup" alt="BuzzingUniverse- Login or Signup" class="default-logo" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>

                <div id="content" style={{
                        width: "80%",
                        margin: "0 auto",
                        marginTop: "100px"
                }} class="site-content">
                    <div id="primary" class="content-area">
                        <div class="layout social">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-8 col-main">
                                        <main id="main" class="main-content">
                                            <div class="beehive-title-bar social">
                                                <div class="title-bar-wrapper">
                                                    <div class="title-wrapper screen-reader-text">
                                                        <h1 class="title h3">Members</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <article id="post-0" class="post-0 page type-page status-publish hentry beehive-post">
                                                <div class="entry-content clearfix">
                                                    <div id="buddypress" class="buddypress-wrap beehive bp-dir-hori-nav alignwide">
                                                        <nav class="members-type-navs main-navs bp-navs dir-navs " role="navigation" aria-label="Directory menu">
                                                            <ul class="component-navigation members-nav">
                                                                <li id="members-all" class="selected" data-bp-scope="all" data-bp-object="members">
                                                                    <a href="/members/">Active Members&nbsp; <span class="count">20</span>
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                        </nav>

                                                        <div class="screen-content">
                                                            <div class="subnav-filters filters no-ajax" id="subnav-filters">
                                                                <div class="subnav-search clearfix">
                                                                    <div class="dir-search members-search bp-search" data-bp-search="members">
                                                                        <form action="" method="get" class="bp-dir-search-form" id="dir-members-search-form" role="search">
                                                                            <label for="dir-members-search" class="bp-screen-reader-text">Search Members...</label>
                                                                            <input id="dir-members-search" name="members_search" type="search" placeholder="Search Members..." />
                                                                            <button type="submit" id="dir-members-search-submit" class="nouveau-search-submit" name="dir_members_search_submit">
                                                                                <span class="dashicons dashicons-search" aria-hidden="true"></span>
                                                                                <span id="button-text" class="bp-screen-reader-text">Search</span>
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div id="dir-filters" class="component-filters clearfix">
                                                                    <div id="members-order-select" class="last filter">
                                                                        <label class="bp-screen-reader-text" for="members-order-by">
                                                                            <span>Order By:</span>
                                                                        </label>
                                                                        <div class="select-wrap">
                                                                            <select id="members-order-by" data-bp-filter="members">
                                                                                <option value="active">Last Active</option>
                                                                                <option value="newest">Newest Registered</option>
                                                                                <option value="alphabetical">Alphabetical</option>
                                                                            </select>
                                                                            <span class="select-arrow" aria-hidden="true"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="members-dir-list" class="members dir-list" data-bp-list="members" >
                                                                <ul id="members-list" class="item-list members-list bp-list grid two">
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="1395" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/faizankhan7/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-1395-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Faizan" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/faizankhan7/">Faizan</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 2 hours, 3 minutes ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/faizankhan7/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="16" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/bejan/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-16-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Bejan C." />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/bejan/">Bejan C.</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 5 hours, 52 minutes ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update">&nbsp;</p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/bejan/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="1398" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/shazzy/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-1398-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Shazzy" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/shazzy/">Shazzy</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 7 hours, 13 minutes ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/shazzy/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="11" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/solojobs/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-11-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Solojobs Giana" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/solojobs/">Solojobs Giana</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 2 days, 16 hours ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/solojobs/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="1" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/b2023-_/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatars/1/1700074345-bpfull.png" class="avatar user-1-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of B2023-_" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/b2023-_/">B2023-_</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 3 days, 6 hours ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/b2023-_/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="1462" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/mancubus0voift/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-1462-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Mancubus0voift" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/mancubus0voift/">Mancubus0voift</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 4 days, 10 hours ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/mancubus0voift/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="2" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/codermehedi/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatars/2/1698423853-bpfull.jpg" class="avatar user-2-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Coder Mehedi" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/codermehedi/">Coder Mehedi</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 5 days, 15 hours ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">3</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update">&nbsp;</p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/codermehedi/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="1413" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/abrarahmed111/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-1413-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Abrar" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/abrarahmed111/">Abrar</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 week, 3 days ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/abrarahmed111/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="1326" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/chamitha/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatars/1326/1723189094-bpfull.png" class="avatar user-1326-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Chamitha Thathsaranath" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/chamitha/">Chamitha Thathsaranath</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 week, 4 days ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update">&nbsp;</p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/chamitha/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="124" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/margartkraker1/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-124-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Margart Kraker" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/margartkraker1/">Margart Kraker</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 week, 4 days ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">118</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/margartkraker1/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="1387" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/aryusuf/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-1387-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Yusuf" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/aryusuf/">Yusuf</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 week, 5 days ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/aryusuf/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="1386" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/gershompolanco/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/gravatar/6/c/6c2ef69174a73a82e8ad4fa9806edf638e471900e8a21464a1afbaa03d22f259-200.png" class="avatar user-1386-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Gershom Polanco" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/gershompolanco/">Gershom Polanco</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 week, 5 days ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/gershompolanco/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="1363" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/sumon/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/gravatar/7/6/766afb7153d331bccdfdc6a7430b9e14f65778c668f2e86f6f6e1d889a453de0-200.png" class="avatar user-1363-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Sumon" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/sumon/">Sumon</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 week, 6 days ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/sumon/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="1366" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/mudassar79/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatars/1366/1723273706-bpfull.jpg" class="avatar user-1366-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Mike" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/mudassar79/">Mike</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 week, 6 days ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/mudassar79/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="534" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/maksimjah/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-534-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Maksim Jah" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/maksimjah/">Maksim Jah</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 1 month, 3 weeks ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/maksimjah/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="22" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/shantifernandez/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatars/22/1699320693-bpfull.jpg" class="avatar user-22-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Shanti" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/shantifernandez/">Shanti</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 3 months, 1 week ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/shantifernandez/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="105" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/matildakrebs46/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-105-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Matilda Krebs" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/matildakrebs46/">Matilda Krebs</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 4 months, 1 week ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/matildakrebs46/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="108" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/sittarahm/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-108-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Sittar Ahmed" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/sittarahm/">Sittar Ahmed</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 4 months, 1 week ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/sittarahm/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp odd" data-bp-item-id="101" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/isaacmalm08463/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-101-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Isaac Malm" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/isaacmalm08463/">Isaac Malm</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 4 months, 2 weeks ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/isaacmalm08463/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                    <li class="item-entry animate-item slideInUp even" data-bp-item-id="106" data-bp-item-component="members" style={{ visibility: "visible" }}>
                                                                        <div class="list-wrap">
                                                                            <div class="item-avatar">
                                                                                <a href="/members/emmamaccullagh/">
                                                                                    <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" class="avatar user-106-avatar avatar-200 photo" width="200" height="200" alt="Profile picture of Emma MacCullagh" />
                                                                                </a>
                                                                                <div class="circle-color offline-red"></div>
                                                                            </div>
                                                                            <div class="item">
                                                                                <div class="item-block">
                                                                                    <h4 class="list-title member-name">
                                                                                        <a href="/members/emmamaccullagh/">Emma MacCullagh</a>
                                                                                    </h4>
                                                                                    <p class="item-meta last-activity mute"> Active 4 months, 3 weeks ago </p>

                                                                                    <ul class="connections">
                                                                                        <li>
                                                                                            <span class="count">0</span>
                                                                                            <p class="mute">Friends</p>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span class="count">1</span>
                                                                                            <p class="mute">Groups</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <p class="latest-update"></p>
                                                                                    <ul class=" members-meta action">
                                                                                        <li class="generic-button">
                                                                                            <a href="/members/emmamaccullagh/">View Profile</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <div class="bp-pagination bottom" data-bp-pagination="upage">
                                                                    <div class="pag-count bottom">
                                                                        <p class="pag-data"> Viewing 1 - 20 of 32 active members </p>
                                                                    </div>
                                                                    <div class="bp-pagination-links bottom">
                                                                        <p class="pag-data">
                                                                            <span aria-current="page" class="page-numbers current">1</span>
                                                                            <a class="page-numbers" href="/members/?upage=2">2</a>
                                                                            <a class="next page-numbers" href="/members/?upage=2">→</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </article>

                                        </main>

                                    </div>

                                    <div class="col-lg-4 col-aside">
                                        <aside id="members" class="widget-area sidebar-widget-area sticky-sidebar">
                                            <div id="bp_core_members_widget-2" class="widget clearfix widget_bp_core_members_widget buddypress widget">
                                                <h3 class="widgettitle">Members</h3>
                                                <div class="item-options" id="members-list-options">
                                                    <a href="/members/" id="newest-members">Newest</a>
                                                    <span class="bp-separator" role="separator">|</span>
                                                    <a href="/members/" id="recently-active-members" class="selected">Active</a>
                                                    <span class="bp-separator" role="separator">|</span>
                                                    <a href="/members/" id="popular-members">Popular</a>
                                                </div>
                                                <ul id="members-list" class="item-list" aria-live="polite" aria-relevant="all" aria-atomic="true">
                                                    <li class="vcard">
                                                        <div class="item-avatar">
                                                            <a href="/members/faizankhan7/" class="bp-tooltip" data-bp-tooltip="Faizan">
                                                                <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-50.png" class="avatar user-1395-avatar avatar-50 photo" width="50" height="50" alt="Profile picture of Faizan" />
                                                            </a>
                                                        </div>
                                                        <div class="item">
                                                            <div class="item-title fn">
                                                                <a href="/members/faizankhan7/">Faizan</a>
                                                            </div>
                                                            <div class="item-meta">
                                                                <span class="activity">2 hours ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="vcard">
                                                        <div class="item-avatar">
                                                            <a href="/members/bejan/" class="bp-tooltip" data-bp-tooltip="Bejan C.">
                                                                <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-50.png" class="avatar user-16-avatar avatar-50 photo" width="50" height="50" alt="Profile picture of Bejan C." />
                                                            </a>
                                                        </div>
                                                        <div class="item">
                                                            <div class="item-title fn">
                                                                <a href="/members/bejan/">Bejan C.</a>
                                                            </div>
                                                            <div class="item-meta">
                                                                <span class="activity">6 hours ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="vcard">
                                                        <div class="item-avatar">
                                                            <a href="/members/shazzy/" class="bp-tooltip" data-bp-tooltip="Shazzy">
                                                                <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-50.png" class="avatar user-1398-avatar avatar-50 photo" width="50" height="50" alt="Profile picture of Shazzy" />
                                                            </a>
                                                        </div>
                                                        <div class="item">
                                                            <div class="item-title fn">
                                                                <a href="/members/shazzy/">Shazzy</a>
                                                            </div>
                                                            <div class="item-meta">
                                                                <span class="activity">7 hours ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="vcard">
                                                        <div class="item-avatar">
                                                            <a href="/members/solojobs/" class="bp-tooltip" data-bp-tooltip="Solojobs Giana">
                                                                <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-50.png" class="avatar user-11-avatar avatar-50 photo" width="50" height="50" alt="Profile picture of Solojobs Giana" />
                                                            </a>
                                                        </div>
                                                        <div class="item">
                                                            <div class="item-title fn">
                                                                <a href="/members/solojobs/">Solojobs Giana</a>
                                                            </div>
                                                            <div class="item-meta">
                                                                <span class="activity">3 days ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="vcard">
                                                        <div class="item-avatar">
                                                            <a href="/members/b2023-_/" class="bp-tooltip" data-bp-tooltip="B2023-_">
                                                                <img loading="lazy" src="https://buzzinguniverse.com/wp-content/uploads/avatars/1/1700074345-bpthumb.png" class="avatar user-1-avatar avatar-50 photo" width="50" height="50" alt="Profile picture of B2023-_" />
                                                            </a>
                                                        </div>
                                                        <div class="item">
                                                            <div class="item-title fn">
                                                                <a href="/members/b2023-_/">B2023-_</a>
                                                            </div>
                                                            <div class="item-meta">
                                                                <span class="activity">3 days ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <input type="hidden" id="_wpnonce-members" name="_wpnonce-members" value="001b6c483f" />
                                                <input type="hidden" name="members_widget_max" id="members_widget_max" value="5" />
                                            </div>
                                            <nav class="sidebar-nav-menu">
                                                <ul id="menu-sidebar-menu" class="aside-navbar">
                                                    <li id="menu-item-473" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-473">
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li id="menu-item-114" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-114">
                                                        <a href="/about-us/">About Us</a>
                                                    </li>
                                                    <li id="menu-item-113" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
                                                        <a href="/faqs/">FAQs</a>
                                                    </li>
                                                    <li id="menu-item-116" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-116">
                                                        <a href="/article/">Blog</a>
                                                    </li>
                                                    <li id="menu-item-112" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112">
                                                        <a href="/contact/">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </aside>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Members;
