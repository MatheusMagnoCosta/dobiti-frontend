import Body from '../../scripts/body'
import Weather from '../../components/widgets/weather'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import FriendsPagesAdded from '../../components/widgets/friends-pages-added'
import BirthdayAlert from '../../components/widgets/birthday-alert'
import FriendSuggest from '../../components/widgets/friend-suggest'
import ActivityFeed from '../../components/widgets/activity-feed'

import FeedForm from '../../components/blocks/feed-form/Index'
import FeedPost from '../../components/blocks/feed-post/Index'

import axios from 'axios';
import React, { useState, useEffect } from 'react'


const Index = () => {

    const [perguntaData, setPerguntaData] = useState([])
    const [buttonIsClicked, setButtonIsClicked] = useState(true)


    useEffect(() => {
        const getPerguntas = () => {
            axios.get('http://127.0.0.1:8000/posts/ask/')
                .then((response) => {
                    setPerguntaData(response.data.reverse())
                    setButtonIsClicked(!buttonIsClicked)
                    console.log(perguntaData)
                })
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                })
        }
        getPerguntas()
    }, [buttonIsClicked])

    return (
        <>
            <div>
                <Body classComp="page-has-left-panels" />
                <Body classComp="page-has-right-panels" />
                <div className="fixed-sidebar">
                    <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
                        <a className="logo">
                            <div className="img-wrap">
                                {/*<img src="img/logo.png" alt="Olympus" />*/}
                                <span>Dobiti</span>
                            </div>
                        </a>
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <ul className="left-menu">
                                <li>
                                    <a className="js-sidebar-open">
                                        <svg className="olymp-menu-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="OPEN MENU"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="03-Newsfeed.html">
                                        <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="16-FavPagesFeed.html">
                                        <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="17-FriendGroups.html">
                                        <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="18-MusicAndPlaylists.html">
                                        <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="19-WeatherWidget.html">
                                        <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                                        <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="24-CommunityBadges.html">
                                        <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="25-FriendsBirthday.html">
                                        <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="26-Statistics.html">
                                        <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="27-ManageWidgets.html">
                                        <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
                        <a href="02-ProfilePage.html" className="logo">
                            <div className="img-wrap">
                                <img src="img/logo.png" alt="Olympus" />
                            </div>
                            <div className="title-block">
                                <h6 className="logo-title">olympus</h6>
                            </div>
                        </a>
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <ul className="left-menu">
                                <li>
                                    <a className="js-sidebar-open">
                                        <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" /></svg>
                                        <span className="left-menu-title">Collapse Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="03-Newsfeed.html">
                                        <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon" /></svg>
                                        <span className="left-menu-title">Newsfeed</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="16-FavPagesFeed.html">
                                        <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" /></svg>
                                        <span className="left-menu-title">Fav Pages Feed</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="17-FriendGroups.html">
                                        <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon" /></svg>
                                        <span className="left-menu-title">Friend Groups</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="18-MusicAndPlaylists.html">
                                        <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon" /></svg>
                                        <span className="left-menu-title">Music &amp; Playlists</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="19-WeatherWidget.html">
                                        <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon" /></svg>
                                        <span className="left-menu-title">Weather App</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                                        <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" /></svg>
                                        <span className="left-menu-title">Calendar and Events</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="24-CommunityBadges.html">
                                        <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon" /></svg>
                                        <span className="left-menu-title">Community Badges</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="25-FriendsBirthday.html">
                                        <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon" /></svg>
                                        <span className="left-menu-title">Friends Birthdays</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="26-Statistics.html">
                                        <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon" /></svg>
                                        <span className="left-menu-title">Account Stats</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="27-ManageWidgets.html">
                                        <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon" /></svg>
                                        <span className="left-menu-title">Manage Widgets</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="profile-completion">
                                <div className="skills-item">
                                    <div className="skills-item-info">
                                        <span className="skills-item-title">Profile Completion</span>
                                        <span className="skills-item-count"><span className="count-animate" data-speed={1000} data-refresh-interval={50} data-to={76} data-from={0} /><span className="units">76%</span></span>
                                    </div>
                                    <div className="skills-item-meter">
                                        <span className="skills-item-meter-active bg-primary" style={{ width: '76%' }} />
                                    </div>
                                </div>
                                <span>Complete <a >your profile</a> so people can know more about you!</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ... end Fixed Sidebar Left */}
                {/* Fixed Sidebar Left */}
                <div className="fixed-sidebar fixed-sidebar-responsive">
                    <div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
                        <a className="logo js-sidebar-open">
                            <img src="img/logo.png" alt="Olympus" />
                        </a>
                    </div>
                    <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
                        <a className="logo">
                            <div className="img-wrap">
                                <img src="img/logo.png" alt="Olympus" />
                            </div>
                            <div className="title-block">
                                <h6 className="logo-title">olympus</h6>
                            </div>
                        </a>
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <div className="control-block">
                                <div className="author-page author vcard inline-items">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/author-page.jpg" className="avatar" />
                                        <span className="icon-status online" />
                                    </div>
                                    <a href="02-ProfilePage.html" className="author-name fn">
                                        <div className="author-title">
                                            James Spiegel <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon" /></svg>
                                        </div>
                                        <span className="author-subtitle">SPACE COWBOY</span>
                                    </a>
                                </div>
                            </div>
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">MAIN SECTIONS</h6>
                            </div>
                            <ul className="left-menu">
                                <li>
                                    <a className="js-sidebar-open">
                                        <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" /></svg>
                                        <span className="left-menu-title">Collapse Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mobile-index.html">
                                        <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon" /></svg>
                                        <span className="left-menu-title">Newsfeed</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Mobile-28-YourAccount-PersonalInformation.html">
                                        <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" /></svg>
                                        <span className="left-menu-title">Fav Pages Feed</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mobile-29-YourAccount-AccountSettings.html">
                                        <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon" /></svg>
                                        <span className="left-menu-title">Friend Groups</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Mobile-30-YourAccount-ChangePassword.html">
                                        <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon" /></svg>
                                        <span className="left-menu-title">Music &amp; Playlists</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
                                        <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon" /></svg>
                                        <span className="left-menu-title">Weather App</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Mobile-32-YourAccount-EducationAndEmployement.html">
                                        <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" /></svg>
                                        <span className="left-menu-title">Calendar and Events</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Mobile-33-YourAccount-Notifications.html">
                                        <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon" /></svg>
                                        <span className="left-menu-title">Community Badges</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Mobile-34-YourAccount-ChatMessages.html">
                                        <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon" /></svg>
                                        <span className="left-menu-title">Friends Birthdays</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Mobile-35-YourAccount-FriendsRequests.html">
                                        <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon" /></svg>
                                        <span className="left-menu-title">Account Stats</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon" /></svg>
                                        <span className="left-menu-title">Manage Widgets</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">YOUR ACCOUNT</h6>
                            </div>
                            <ul className="account-settings">
                                <li>
                                    <a >
                                        <svg className="olymp-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon" /></svg>
                                        <span>Profile Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon" /></svg>
                                        <span>Create Fav Page</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <svg className="olymp-logout-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon" /></svg>
                                        <span>Log Out</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">About Olympus</h6>
                            </div>
                            <ul className="about-olympus">
                                <li>
                                    <a >
                                        <span>Terms and Conditions</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <span>FAQs</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <span>Careers</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ... end Fixed Sidebar Left */}
                {/* Fixed Sidebar Right-Responsive */}
                <div className="fixed-sidebar right fixed-sidebar-responsive" id="sidebar-right-responsive">
                    <div className="fixed-sidebar-right sidebar--small">
                        <a className="js-sidebar-open">
                            <svg className="olymp-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon" /></svg>
                            <svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" /></svg>
                        </a>
                    </div>
                    <div className="fixed-sidebar-right sidebar--large">
                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                            <div className="ui-block-title ui-block-title-small">
                                <a className="title">Close Friends</a>
                                <a >Settings</a>
                            </div>
                            <ul className="chat-users">
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar67-sm.jpg" className="avatar" />
                                        <span className="icon-status online" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Carol Summers</a>
                                        <span className="status">ONLINE</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar62-sm.jpg" className="avatar" />
                                        <span className="icon-status online" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Mathilda Brinker</a>
                                        <span className="status">AT WORK!</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar68-sm.jpg" className="avatar" />
                                        <span className="icon-status online" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Carol Summers</a>
                                        <span className="status">ONLINE</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar69-sm.jpg" className="avatar" />
                                        <span className="icon-status away" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Michael Maximoff</a>
                                        <span className="status">AWAY</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar70-sm.jpg" className="avatar" />
                                        <span className="icon-status disconected" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Rachel Howlett</a>
                                        <span className="status">OFFLINE</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="ui-block-title ui-block-title-small">
                                <a className="title">MY FAMILY</a>
                                <a >Settings</a>
                            </div>
                            <ul className="chat-users">
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar64-sm.jpg" className="avatar" />
                                        <span className="icon-status online" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Sarah Hetfield</a>
                                        <span className="status">ONLINE</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="ui-block-title ui-block-title-small">
                                <a className="title">UNCATEGORIZED</a>
                                <a >Settings</a>
                            </div>
                            <ul className="chat-users">
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar71-sm.jpg" className="avatar" />
                                        <span className="icon-status online" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Bruce Peterson</a>
                                        <span className="status">ONLINE</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar72-sm.jpg" className="avatar" />
                                        <span className="icon-status away" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Chris Greyson</a>
                                        <span className="status">AWAY</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar63-sm.jpg" className="avatar" />
                                        <span className="icon-status status-invisible" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Nicholas Grisom</a>
                                        <span className="status">INVISIBLE</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar72-sm.jpg" className="avatar" />
                                        <span className="icon-status away" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Chris Greyson</a>
                                        <span className="status">AWAY</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline-items js-chat-open">
                                    <div className="author-thumb">
                                        <img alt="author" src="img/avatar71-sm.jpg" className="avatar" />
                                        <span className="icon-status online" />
                                    </div>
                                    <div className="author-status">
                                        <a className="h6 author-name">Bruce Peterson</a>
                                        <span className="status">ONLINE</span>
                                    </div>
                                    <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        <ul className="more-icons">
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon" /></svg>
                                            </li>
                                            <li>
                                                <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon" /></svg>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="search-friend inline-items">
                            <form className="form-group">
                                <input className="form-control" placeholder="Search Friends..." defaultValue type="text" />
                            </form>
                            <a href="29-YourAccount-AccountSettings.html" className="settings">
                                <svg className="olymp-settings-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-settings-icon" /></svg>
                            </a>
                            <a className="js-sidebar-open">
                                <svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" /></svg>
                            </a>
                        </div>
                        <a className="olympus-chat inline-items js-chat-open">
                            <h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
                            <svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" /></svg>
                        </a>
                    </div>
                </div>
                {/* ... end Fixed Sidebar Right-Responsive */}
                {/* Header-BP */}
                <header className="header" id="site-header">
                    <div className="page-title">
                        <h6>Feed de Dúvidas</h6>
                    </div>
                    <div className="header-content-wrapper">
                        <form className="search-bar w-search notification-list friend-requests">
                            <div className="form-group with-button">
                                <input className="form-control" placeholder="Procurar por perguntas, assuntos e temas" type="text" />
                                <button>
                                    <svg className="olymp-magnifying-glass-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" /></svg>
                                </button>
                            </div>
                        </form>
                        <div className="control-block">
                            <div className="author-page author vcard inline-items more">
                                <div className="author-thumb">
                                    <img alt="author" src="img/author-page.jpg" className="avatar" />
                                    <span className="icon-status online" />
                                    <div className="more-dropdown more-with-triangle">
                                        <div className="mCustomScrollbar" data-mcs-theme="dark">
                                            <div className="ui-block-title ui-block-title-small">
                                                <h6 className="title">Sua Conta</h6>
                                            </div>
                                            <ul className="account-settings">
                                                <li>
                                                    <a href="">
                                                        <svg className="olymp-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon" /></svg>
                                                        <span>Configuração do Perfil</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <svg className="olymp-logout-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon" /></svg>
                                                        <span>Sair</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <a href="" className="author-name fn">
                                    <div className="author-title">
                                        Cirilo <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon" /></svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ... end Header-BP */}
                {/* Responsive Header-BP */}
                <header className="header header-responsive" id="site-header-responsive">
                    <div className="header-content-wrapper">
                        <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#request" role="tab">
                                    <div className="control-icon has-items">
                                        <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                        <div className="label-avatar bg-blue">6</div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#chat" role="tab">
                                    <div className="control-icon has-items">
                                        <svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" /></svg>
                                        <div className="label-avatar bg-purple">2</div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#notification" role="tab">
                                    <div className="control-icon has-items">
                                        <svg className="olymp-thunder-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-thunder-icon" /></svg>
                                        <div className="label-avatar bg-primary">8</div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#search" role="tab">
                                    <svg className="olymp-magnifying-glass-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" /></svg>
                                    <svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Tab panes */}
                    <div className="tab-content tab-content-responsive">
                        <div className="tab-pane " id="request" role="tabpanel">
                            <div className="mCustomScrollbar" data-mcs-theme="dark">
                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">FRIEND REQUESTS</h6>
                                    <a >Find Friends</a>
                                    <a >Settings</a>
                                </div>
                                <ul className="notification-list friend-requests">
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar55-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <a className="h6 notification-friend">Tamara Romanoff</a>
                                            <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                                        </div>
                                        <span className="notification-icon">
                                            <a className="accept-request">
                                                <span className="icon-add without-text">
                                                    <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                                </span>
                                            </a>
                                            <a className="accept-request request-del">
                                                <span className="icon-minus">
                                                    <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                                </span>
                                            </a>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar56-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <a className="h6 notification-friend">Tony Stevens</a>
                                            <span className="chat-message-item">4 Friends in Common</span>
                                        </div>
                                        <span className="notification-icon">
                                            <a className="accept-request">
                                                <span className="icon-add without-text">
                                                    <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                                </span>
                                            </a>
                                            <a className="accept-request request-del">
                                                <span className="icon-minus">
                                                    <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                                </span>
                                            </a>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        </div>
                                    </li>
                                    <li className="accepted">
                                        <div className="author-thumb">
                                            <img src="img/avatar57-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            You and <a className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a className="notification-link">her wall</a>.
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                            <svg className="olymp-little-delete"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" /></svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar58-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <a className="h6 notification-friend">Stagg Clothing</a>
                                            <span className="chat-message-item">9 Friends in Common</span>
                                        </div>
                                        <span className="notification-icon">
                                            <a className="accept-request">
                                                <span className="icon-add without-text">
                                                    <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                                </span>
                                            </a>
                                            <a className="accept-request request-del">
                                                <span className="icon-minus">
                                                    <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                                </span>
                                            </a>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        </div>
                                    </li>
                                </ul>
                                <a className="view-all bg-blue">Check all your Events</a>
                            </div>
                        </div>
                        <div className="tab-pane " id="chat" role="tabpanel">
                            <div className="mCustomScrollbar" data-mcs-theme="dark">
                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">Chat / Messages</h6>
                                    <a >Mark all as read</a>
                                    <a >Settings</a>
                                </div>
                                <ul className="notification-list chat-message">
                                    <li className="message-unread">
                                        <div className="author-thumb">
                                            <img src="img/avatar59-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <a className="h6 notification-friend">Diana Jameson</a>
                                            <span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar60-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <a className="h6 notification-friend">Jake Parker</a>
                                            <span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar61-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <a className="h6 notification-friend">Elaine Dreyfuss</a>
                                            <span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        </div>
                                    </li>
                                    <li className="chat-group">
                                        <div className="author-thumb">
                                            <img src="img/avatar11-sm.jpg" alt="author" />
                                            <img src="img/avatar12-sm.jpg" alt="author" />
                                            <img src="img/avatar13-sm.jpg" alt="author" />
                                            <img src="img/avatar10-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <a className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
                                            <span className="last-message-author">Ed:</span>
                                            <span className="chat-message-item">Yeah! Seems fine by me!</span>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                        </div>
                                    </li>
                                </ul>
                                <a className="view-all bg-purple">View All Messages</a>
                            </div>
                        </div>
                        <div className="tab-pane " id="notification" role="tabpanel">
                            <div className="mCustomScrollbar" data-mcs-theme="dark">
                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title">Notifications</h6>
                                    <a >Mark all as read</a>
                                    <a >Settings</a>
                                </div>
                                <ul className="notification-list">
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar62-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <div><a className="h6 notification-friend">Mathilda Brinker</a> commented on your new <a className="notification-link">profile status</a>.</div>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                            <svg className="olymp-little-delete"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" /></svg>
                                        </div>
                                    </li>
                                    <li className="un-read">
                                        <div className="author-thumb">
                                            <img src="img/avatar63-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <div>You and <a className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a className="notification-link">his wall</a>.</div>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                            <svg className="olymp-little-delete"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" /></svg>
                                        </div>
                                    </li>
                                    <li className="with-comment-photo">
                                        <div className="author-thumb">
                                            <img src="img/avatar64-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <div><a className="h6 notification-friend">Sarah Hetfield</a> commented on your <a className="notification-link">photo</a>.</div>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" /></svg>
                                        </span>
                                        <div className="comment-photo">
                                            <img src="img/comment-photo1.jpg" alt="photo" />
                                            <span>“She looks incredible in that outfit! We should see each...”</span>
                                        </div>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                            <svg className="olymp-little-delete"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" /></svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar65-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <div><a className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a className="notification-link">Gotham Bar</a>.</div>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                            <svg className="olymp-little-delete"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" /></svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="author-thumb">
                                            <img src="img/avatar66-sm.jpg" alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <div><a className="h6 notification-friend">James Summers</a> commented on your new <a className="notification-link">profile status</a>.</div>
                                            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                                        </div>
                                        <span className="notification-icon">
                                            <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" /></svg>
                                        </span>
                                        <div className="more">
                                            <svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                                            <svg className="olymp-little-delete"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete" /></svg>
                                        </div>
                                    </li>
                                </ul>
                                <a className="view-all bg-primary">View All Notifications</a>
                            </div>
                        </div>
                        <div className="tab-pane " id="search" role="tabpanel">
                            <form className="search-bar w-search notification-list friend-requests">
                                <div className="form-group with-button">
                                    <input className="form-control js-user-search" placeholder="Search here people or pages..." type="text" />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ... end  Tab panes */}
                </header>
                {/* ... end Responsive Header-BP */}
                <div className="header-spacer" />
                <div className="container">
                    <div className="row">
                        {/* Main Content */}
                        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">
                                <FeedForm />
                            </div>
                            <div id="newsfeed-items-grid">
                                {
                                    perguntaData.slice(0).map(pergunta =>
                                        <FeedPost key={pergunta.id} adressId={pergunta.id} conteudo={pergunta.ask} />
                                    )
                                }
                            </div>
                            <a id="load-more-button" className="btn btn-control btn-more" data-load-link="" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg></a>
                        </main>
                        {/* ... end Main Content */}
                        {/* Left Sidebar */}
                        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                            {/* <div className="ui-block">
                                <Weather />
                            </div> */}
                            <div className="ui-block">
                                <Calendar />
                            </div>
                            <div className="ui-block">
                                {/*
                                   <FriendsPagesAdded />
                               */}
                            </div>
                        </aside>
                        {/* ... end Left Sidebar */}
                        {/* Right Sidebar */}
                        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="ui-block">
                                {/*
                                <BirthdayAlert />
                                */}
                            </div>
                            <div className="ui-block">
                                {/*
                                <FriendSuggest />
                            */}
                            </div>
                            <div className="ui-block">

                                <ActivityFeed />

                            </div>
                        </aside>
                        {/* ... end Right Sidebar */}
                    </div>
                </div>
                <a className="back-to-top" >
                    <img src="svg-icons/back-to-top.svg" alt="arrow" className="back-icon" />
                </a>
            </div>
        </>
    )
}

export default Index