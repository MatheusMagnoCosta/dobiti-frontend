const index = () => {
    return (
        <>
            <div className="ui-block-title">
                <h6 className="title">Feed de atividades</h6>
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg></a>
            </div>
            {/* W-Activity-Feed */}
            <ul className="widget w-activity-feed notification-list">
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar49-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Marina Polson</a> Postou uma nova pergunta em <a href="#" className="notification-link">Direiro</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">2 mins</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar9-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Jake Parker </a> Postou uma nova pergunta em <a href="#" className="notification-link">Administração</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">5 mins</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar50-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Mary Jane Stark </a> Postou uma nova pergunta em <a href="#" className="notification-link">Administração</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">12 mins</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar51-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Nicholas Grissom </a> Postou uma nova pergunta em <a href="#" className="notification-link">Medicina</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">1 hora</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar48-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Marina Valentine </a> Postou uma nova pergunta em <a href="#" className="notification-link">Eng. Software</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">1 hora</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar52-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Green Goo Rock </a> Postou uma nova pergunta em <a href="#" className="notification-link">Eng. Software</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">1 hora</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar10-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Elaine Dreyfuss</a> Postou uma nova pergunta em <a href="#" className="notification-link">Eng. Software</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">2 horas</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar10-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Elaine Dreyfuss</a> Postou uma nova pergunta em <a href="#" className="notification-link">Eng. Software</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">2 horas</time></span>
                    </div>
                </li>
                <li>
                    <div className="author-thumb">
                        <img src="img/avatar53-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Bruce Peterson </a> Postou uma nova pergunta em <a href="#" className="notification-link">Eng. Software</a>.
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">15 horas</time></span>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default index