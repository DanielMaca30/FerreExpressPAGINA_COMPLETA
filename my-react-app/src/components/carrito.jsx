<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />
  <link rel="stylesheet" href="./global.css" />
  <link rel="stylesheet" href="./carrito.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto Flex:wght@500;600&display=swap"
  />
  <div className="carrito">
    <main className="navbar-parent">
      <header className="navbar">
        <div className="navbar-child" />
        <div className="nav-bar-container">
          <div className="nav-bar-left">
            <h2 className="ferre-express">
              <p className="ferre">Ferre</p>
              <p className="express">Express</p>
            </h2>
            <img
              className="logo-ferreexpres-largo-mesa-de"
              loading="lazy"
              alt=""
              src="./public/logo-ferreexpres-largo-mesa-de-trabajo-1-1@2x.png"
            />
          </div>
          <input
            className="search-container"
            placeholder="Buscar productos,marcas y más..."
            type="text"
          />
        </div>
        <div className="content">
          <div className="categories-container-parent">
            <div className="categories-container">
              <div className="categorias-parent">
                <a className="categorias">Categorias</a>
                <img
                  className="news-feed-icon"
                  loading="lazy"
                  alt=""
                  src="./public/news-feed@2x.png"
                />
              </div>
            </div>
            <div className="info-links">
              <a className="ofertas">Ofertas</a>
            </div>
            <div className="info-links1">
              <a className="acerca-de-nosotros">Acerca de nosotros</a>
            </div>
            <a className="puntos-fisicos">Puntos fisicos</a>
          </div>
          <div className="user-actions">
            <a className="mis-pedidos">MIs pedidos</a>
            <a className="crea-tu-cuenta">Crea tu cuenta</a>
            <div className="login-container">
              <a className="ingresa">Ingresa</a>
            </div>
            <div className="cart-icon-container">
              <img
                className="shopping-cart-icon"
                loading="lazy"
                alt=""
                src="./public/shopping-cart.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="frame-wrapper">
        <div className="carrito-parent">
          <h1 className="carrito1">Carrito</h1>
          <form className="cart-items">
            <div className="cart-item-container">
              <div className="cart-item-container-child" />
              <div className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-details-child" />
                  <div className="item-content">
                    <div className="item-info">
                      <textarea
                        className="item-image"
                        rows="{11}"
                        cols="{14}"
                        defaultValue={"                        "}
                      />
                      <div className="item-description">
                        <div className="item-title-container">
                          <div className="producto">Producto</div>
                          <div className="item-name-container">
                            <div className="consola-microsoft-xbox">
                              Consola Microsoft Xbox Series X Standard 1tb Color
                              Negro
                            </div>
                          </div>
                        </div>
                        <div className="item-actions">
                          <div className="eliminar">Eliminar</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-quantity">
                    <div className="item-quantity-child" />
                    <div className="cantidad-1">Cantidad: 1</div>
                    <div className="quantity-input">
                      <img
                        className="quantity-stepper-icon"
                        alt=""
                        src="./public/quantity-stepper.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="cart">
                <div className="pagar">Pagar</div>
              </button>
            </div>
            <div className="separators">
              <div className="rectangle-parent">
                <div className="frame-child" />
                <div className="frame-item" />
              </div>
              <div className="rectangle-group">
                <div className="frame-inner" />
                <input className="rectangle-input" type="text" />
              </div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <div className="frame-child1" />
              </div>
              <div className="frame-div">
                <div className="frame-child2" />
                <div className="frame-child3" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
    <footer className="group-footer">
      <div className="frame-child4" />
      <div className="footer-links">
        <div className="condiciones-de-uso">Condiciones de uso</div>
        <div className="avisos-de-privacidad">Avisos de privacidad</div>
      </div>
      <div className="ferreexpress">2024 FerreExpress</div>
    </footer>
  </div>
</>
