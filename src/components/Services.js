import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <Card
                        title={<><br />Web Service Solutions</>}
                        img="card1.png"
                        text="Web services design, development and maintenance. "/>
                </div>
                <div className="col-md-4 mb-2">
                  <Card title="Data Privacy Consulting" img="card2.png"
                        text="Personal data privacy, secure storage & transfer."/>
                </div>
                <div className="col-md-4 mb-2">
                  <Card 
                        title={<><br />Privacy Computing Solutions</>}
                        img="card3.png"
                        text="Confidential computing, secure database, key management service."/>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Services;
