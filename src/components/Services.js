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
                        img="card1b.png"
                        text="Web services design, development, test, deployment and maintenance. "/>
                </div>
                <div className="col-md-4 mb-2">
                  <Card title="Data Privacy Consulting" img="card2b.png"
                        text="Personal data privacy consulting, secure data storage & transfer service."/>
                </div>
                <div className="col-md-4 mb-2">
                  <Card 
                        title={<><br />Privacy Computing Solutions</>}
                        img="card3b.png"
                        text="Privacy-preserving technologies, secure database, key management service."/>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Services;
