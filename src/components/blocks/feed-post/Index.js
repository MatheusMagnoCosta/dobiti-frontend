import React, { useState } from 'react'
import Hashtags from 'react-highlight-hashtags';
import axios from 'axios';




const Index = (props) => {

    const [resposta, setResposta] = useState("")
    const [askid, setAskId] = useState(props.adressId)
    const [profile] = useState(1)

    const postResposta = () => {
        axios.post('http://127.0.0.1:8000/posts/answer/', {
            answer: resposta,
            ask: askid,
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
            <div className="ui-block">
                <article className="hentry post has-post-thumbnail">
                    <div className="post__author author vcard inline-items">
                        <img src="img/author-page.jpg" alt="author" />
                        <div className="author-date">
                            <a className="h6 post__author-name fn" href="#">Cirilo</a>
                            <div className="post__date">
                                <time className="published" dateTime="2004-07-24T18:18">
                                    26 de outubro as 15:17
                                </time>
                            </div>
                        </div>
                        <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
                            <ul className="more-dropdown">
                                <li>
                                    <a href="#">Editar Post</a>
                                </li>
                                <li>
                                    <a href="#">Deletar Post</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p><Hashtags>{props.conteudo}</Hashtags></p>
                    <div className="post-additional-info inline-items">
                        <a href="#" className="post-add-icon inline-items">
                            <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" /></svg>
                            <span>0 Likes</span>
                        </a>
                        <div className="comments-shared">
                            <a href="#" className="post-add-icon inline-items">
                                <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon" /></svg>
                                <span>0 Comentarios</span>
                            </a>
                            <a href="#" className="post-add-icon inline-items">
                                <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" /></svg>
                                <span>2 Compartilhamentos</span>
                            </a>
                        </div>
                    </div>
                </article>
                {/* Comments */}
                <ul className="comments-list">
                    <li className="comment-item">
                        <div className="post__author author vcard inline-items">
                            <img src="img/avatar1-sm.jpg" alt="author" />
                            <div className="author-date">
                                <a className="h6 post__author-name fn" href="#">Mathilda Brinker</a>
                                <div className="post__date">
                                    <time className="published" dateTime="2004-07-24T18:18">
                                        1 hour ago
                                    </time>
                                </div>
                            </div>
                            <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg></a>
                        </div>
                        <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                            quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                        </p>
                        <a href="#" className="post-add-icon inline-items">
                            <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" /></svg>
                            <span>8</span>
                        </a>
                        <a href="#" className="reply">Responder</a>
                    </li>
                </ul>
                {/* ... end Comments */}

                {/* Comment Form  */}
                <form className="comment-form inline-items" onSubmit={(e) => handleSubmit(e)}>
                    <div className="post__author author vcard inline-items">
                        <img src="img/author-page.jpg" alt="author" />
                        <div className="form-group with-icon-right ">
                            <textarea id="feedform-text-area"className="form-control" onChange={(e) => setResposta(e.target.value)} />

                        </div>
                    </div>
                    <button className="btn btn-md-2 btn-primary" onClick={postResposta}>Postar Comentario</button>
                    <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancelar</button>
                </form>
                {/* ... end Comment Form  */}
            </div>

        </>
    )
}

export default Index