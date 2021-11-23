const index = () => {
    return (
        <>
            <div className="ui-block-title">
                <h6 className="title">Friend Suggestions</h6>
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg></a>
            </div>
            {/* W-Action */}
            <ul className="widget w-friend-pages-added notification-list friend-requests">
                <li className="inline-items">
                    <div className="author-thumb">
                        <img src="img/avatar38-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Francine Smith</a>
                        <span className="chat-message-item">8 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                        <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                                <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                            </span>
                        </a>
                    </span>
                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img src="img/avatar39-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Hugh Wilson</a>
                        <span className="chat-message-item">6 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                        <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                                <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                            </span>
                        </a>
                    </span>
                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img src="img/avatar40-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Karen Masters</a>
                        <span className="chat-message-item">6 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                        <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                                <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" /></svg>
                            </span>
                        </a>
                    </span>
                </li>
            </ul>
        </>
    )
}

export default index