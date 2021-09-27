import Body from '../../components/body'
function App() {
  return (
    <>
    <Body classComp="landing-page" />
      <div>
        <div className="header-spacer--standard" />
        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="landing-content">
                <h1>Bem vindo ao maior forum do mundo</h1>
                <p>Somos a melhor e maior rede social com 5 bilhões de usuários ativos
                  em todo o mundo. Compartilhe suas idéias, escreva postagens em blogs,
                  mostre suas músicas favoritas via Stopify, ganhe emblemas e muito mais!
                </p>
                <a href="#" className="btn btn-md btn-border c-white">Registre-se Agora!</a>
              </div>
            </div>
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              {/* Login-Registration Form  */}
              <div className="registration-login-form">
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home" role="tab">
                      <svg className="olymp-login-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-login-icon" /></svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile" role="tab">
                      <svg className="olymp-register-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-register-icon" /></svg>
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div className="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
                    <div className="title h6">Registre-se no Dobiti</div>
                    <form className="content">
                      <div className="row">
                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Primeiro Nome</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Sobrenome</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Seu Email</label>
                            <input className="form-control" type="email" />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">Sua Senha</label>
                            <input className="form-control" type="password" />
                          </div>
                          <div className="form-group date-time-picker label-floating">
                            <label className="control-label">Data de Nascimento</label>
                            <input name="datetimepicker" defaultValue="10/24/1984" />
                            <span className="input-group-addon">
                              <svg className="olymp-calendar-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" /></svg>
                            </span>
                          </div>
                          <div className="form-group label-floating is-select">
                            <label className="control-label">Seu Gênero</label>
                            <select className="selectpicker form-control">
                              <option value="MA">Masculino</option>
                              <option value="FE">Femino</option>
                              <option value="OT">Prefiro não dizer</option>
                            </select>
                          </div>
                          <div className="remember">
                            <div className="checkbox">
                              <label>
                                <input name="optionsCheckboxes" type="checkbox" />
                                Eu aceito todos os <a href="#">Termos e condições</a> deste site
                              </label>
                            </div>
                          </div>
                          <a href="#" className="btn btn-purple btn-lg full-width">Finalizar o registro</a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
                    <div className="title h6">Login na sua conta</div>
                    <form className="content">
                      <div className="row">
                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Seu Email</label>
                            <input className="form-control" type="email" />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">Sua Senha</label>
                            <input className="form-control" type="password" />
                          </div>
                          <div className="remember">
                            <div className="checkbox">
                              <label>
                                <input name="optionsCheckboxes" type="checkbox" />
                                Lembrar senha
                              </label>
                            </div>
                            <a href="#" className="forgot" data-toggle="modal" data-target="#restore-password">Esqueci a senha</a>
                          </div>
                          <a href="#" className="btn btn-lg btn-primary full-width">Login</a>
                          <div className="or" />
                          <a href="#" className="btn btn-lg bg-facebook full-width btn-icon-left"><i className="fab fa-facebook-f" aria-hidden="" />Login com o Facebook</a>
                          <a href="#" className="btn btn-lg bg-twitter full-width btn-icon-left"><i className="fab fa-twitter" aria-hidden="" />Login com o Twitter</a>
                          <p>Você não tem uma conta? <a href="#">Registre-se agora</a> é muito simples e você pode começar a desfrutar de todos os benefícios!</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* ... end Login-Registration Form  */}		</div>
          </div>
        </div>
        {/* Window-popup Restore Password */}
        <div className="modal fade" id="restore-password" tabIndex={-1} role="dialog" aria-labelledby="restore-password" aria-hidden="">
          <div className="modal-dialog window-popup restore-password-popup" role="document">
            <div className="modal-content">
              <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" /></svg>
              </a>
              <div className="modal-header">
                <h6 className="title">Recupere sua senha</h6>
              </div>
              <div className="modal-body">
                <form method="get">
                  <p>Digite seu e-mail e clique no botão enviar código.
                    Você receberá um código em seu e-mail.
                    Use o código abaixo para trocar a senha antiga por uma nova.
                  </p>
                  <div className="form-group label-floating">
                    <label className="control-label">Seu Email</label>
                    <input className="form-control" type="email" defaultValue="email@seumail.com" />
                  </div>
                  <button className="btn btn-purple btn-lg full-width">Me envie o código</button>
                  <div className="form-group label-floating">
                    <label className="control-label">Insira o código</label>
                    <input className="form-control" type="text" defaultValue />
                  </div>
                  <div className="form-group label-floating">
                    <label className="control-label">Sua nova senha</label>
                    <input className="form-control" type="password" defaultValue="olympus" />
                  </div>
                  <button className="btn btn-primary btn-lg full-width">Mudar senha</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ... end Window-popup Restore Password */}
        {/* Window Popup Main Search */}
        <div className="modal fade" id="main-popup-search" tabIndex={-1} role="dialog" aria-labelledby="main-popup-search" aria-hidden="">
          <div className="modal-dialog modal-dialog-centered window-popup main-popup-search" role="document">
            <div className="modal-content">
              <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
