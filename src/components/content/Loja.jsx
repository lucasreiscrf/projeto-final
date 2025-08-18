import Card from './CardLoja'

export default function Loja() {
  return (
    <>
      <main className="container p-4">        
        <div className="flex1"> 
          <h1>Loja.</h1> 
          <h1 className="text-cinza">O melhor jeito de comprar o que você ama.</h1>
        </div>
      
        <div> 
          <div className="flex2"> 
            <h4>As novidades.</h4>                  
            <h4 className="text-cinza">Veja o que acabou de chegar.</h4>
          </div>
          
          <div className="container-card">
            <Card  
              img="cardiphone16pro.jpg" 
              item="iPhone 16 Pro" 
              descricao="Apple Intelligence." 
              valor="A partir de R$ 3.999"
            /> 
            <Card 
              img="cardmacbookair.jpg" 
              item="Macbook Air" 
              descricao="Tudo azul." 
              valor="A partir de R$ 2.499" 
            />
            <Card 
              img="cardipadair.jpg" 
              item="iPad Air" 
              descricao="Voa alto." 
              valor="A partir de R$ 1.499" 
            />
            <Card 
              img="cardwatchseries.jpg" 
              item="Apple Watch Series 10" 
              descricao="É coisa fina." 
              valor="A partir de R$ 799" 
            />
          </div>

          <div className="container-card">
            <Card 
              img="cardiphone16e.jpg" 
              item="iPhone 16e" 
              descricao="Apple Intelligence." 
              valor="A partir de R$ 3.199" 
            />
            <Card 
              img="cardiphone16.jpg"  
              item="iPhone 16" 
              descricao="Apple Intelligence." 
              valor="A partir de R$ 3.499" 
            />
            <Card 
              img="cardipad.jpg" 
              item="iPad" 
              descricao="Inspira. Desenha. Diverte." 
              valor="A partir de R$ 1.499" 
            />
            <Card 
              img="cardwatchultra2.jpg" 
              item="Apple Watch Ultra 2" 
              descricao="Nova cor. Nunca amarela." 
              valor="A partir de R$ 899" 
            />
          </div>
        </div> 
      </main>
    </>
  );
}