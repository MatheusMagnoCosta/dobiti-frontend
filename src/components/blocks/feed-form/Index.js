import React, { useState } from 'react'
import axios from 'axios';

const Index = () => {

    const [titulo, setTitulo] = useState("Titulo")
    const [pergunta, setPergunta] = useState("")
    const [autor] = useState("#")
    const [profile] = useState(1)

    const postPergunta = () => {
        axios.post('http://127.0.0.1:8000/posts/ask/', {
            title: titulo,
            ask: pergunta,
            author: autor,
            profile: profile
        })
        .then((response) => {
              document.getElementById('feedform-text-area').value = ''
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
      }

      const handleSubmit = e => {
        e.preventDefault();
      };
    return (
        <>
            {/* News Feed Form  */}
            < div className="news-feed-form" >
                {/* Nav tabs */}
                < ul className="nav nav-tabs" role="tablist" >
                    <li className="nav-item">
                        <a className="nav-link active inline-items" data-toggle="tab" href="#home-1" role="tab" aria-expanded="true">
                            <svg className="olymp-status-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-status-icon" /></svg>
                            <span>Escrever dúvida</span>
                        </a>
                    </li>
                </ul >
                {/* Tab panes */}
                < div className="tab-content" >
                    <div className="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="author-thumb">
                                <img src="img/author-page.jpg" alt="author" />
                            </div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Compartilhe com a comunidade a sua dúvida</label>
                                <textarea id="feedform-text-area" required type="reset" className="form-control" placeholder onChange={(e) => setPergunta(e.target.value)} />
                            </div>
                            <div className="add-options-message">
                                <button className="btn btn-primary btn-md-2" onClick={postPergunta}>Postar dúvida</button>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane" id="profile-1" role="tabpanel" aria-expanded="true">
                        <form>
                            <div className="author-thumb">
                                <img src="img/author-page.jpg" alt="author" />
                            </div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Share what you are thinking here...</label>
                                <textarea className="form-control" placeholder defaultValue={""} />
                            </div>
                            <div className="add-options-message">
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                                    <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                    <svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                                    <svg className="olymp-small-pin-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon" /></svg>
                                </a>
                                <button className="btn btn-primary btn-md-2">Post Status</button>
                                <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane" id="blog" role="tabpanel" aria-expanded="true">
                        <form>
                            <div className="author-thumb">
                                <img src="img/author-page.jpg" alt="author" />
                            </div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Share what you are thinking here...</label>
                                <textarea className="form-control" placeholder defaultValue={""} />
                            </div>
                            <div className="add-options-message">
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                                    <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                    <svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                                    <svg className="olymp-small-pin-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon" /></svg>
                                </a>
                                <button className="btn btn-primary btn-md-2">Post Status</button>
                                <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
            {/* ... end News Feed Form  */}
        </>
    )
}

export default Index