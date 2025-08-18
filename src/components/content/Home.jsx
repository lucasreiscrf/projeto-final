export default function Home() {
  return (
    <main className="container">
      <section>
        <figure className="image-container">
          <div>
            <img src="iphone16.png" alt="iPhone 16" />
            <div className="text-overlay">
              <h2>iPhone</h2>
              <h4>Conheça a família iPhone 16.</h4>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/iphone/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-iphone">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
              <span>Feito para Apple Intelligence.</span>
              <p>A Apple Inteligence já está disponível em Português do Brasil</p>
            </div>
          </div>
        </figure>

        <figure className="image-container">
          <div>
            <img src="macbookair.png" alt="MacBook Air" />
            <div className="text-overlay2">
              <h2>MacBook Air</h2>
              <p>Tudo Azul.</p>
              <p>Na cor e no desempenho do M4.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/macbook-air/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-mac/macbook-air">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>

        <figure className="image-container">
          <div>
            <img src="ipadpro.png" alt="iPad Pro" />
            <div className="text-overlay3">
              <h2>iPad Pro</h2>
              <p>Inacreditavelmente fino. Incrivelmente poderoso.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/ipad-pro/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-ipad/ipad-pro">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section className="lado-a-lado">
        <figure className="image-container2">
          <div>
            <img src="ipadair.png" alt="iPad Air" />
            <div className="text-overlay4">
              <img src="logoair.png" alt="" />
              <p>Agora com a potência do chip M3.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/ipad-air/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-ipad/ipad-air">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>

        <figure className="image-container2">
          <div>
            <img src="watchseries10.png" alt="Apple Watch Series 10" />
            <div className="text-overlay4">
              <img src="logowatch10.png" alt="" />
              <p>É coisa fina.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/apple-watch-series-10/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-watch/apple-watch">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section className="lado-a-lado">
        <figure className="image-container2">
          <div>
            <img src="airpods2pro.png" alt="AirPods Pro 2" />
            <div className="text-overlay5">
              <h3>AirPods Pro 2</h3>
              <p>Agora com recurso de aparelho auditivo.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/airpods-pro/hearing-health/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-airpods/airpods-pro-2">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>

        <figure className="image-container2">
          <div>
            <img src="airpodss4.png" alt="AirPods 4" />
            <div className="text-overlay5">
              <h3>AirPods 4</h3>
              <p>Icônicos. Supersônicos. Disponíveis com Cancelamento Ativo de Ruído.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/airpods-4/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-airpods/airpods-4">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section className="lado-a-lado">
        <figure className="image-container2">
          <div>
            <img src="watchultra2.png" alt="Watch Ultra 2" />
            <div className="text-overlay6">
              <img src="logowatch.png" alt="" />
              <p>Nova cor. Nunca amarela.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/apple-watch-ultra-2/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-watch/apple-watch-ultra">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>

        <figure className="image-container2">
          <div>
            <img src="macbookpro.png" alt="Macbook Pro" />
            <div className="text-overlay6">
              <h3>Macbook Pro</h3>
              <p>Uma obra-prima da inteligência.</p>
              <div className="bnt-class">
                <a href="https://www.apple.com/br/macbook-pro/">
                  <button className="bnt1">Saiba mais</button>
                </a>
                <a href="https://www.apple.com/br/shop/buy-mac/macbook-pro">
                  <button className="bnt2">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </figure>
      </section>
    </main>
  );
}