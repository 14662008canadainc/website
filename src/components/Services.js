import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <Card   title={<><div>Web Development Solutions</div><div style={{margin: '10px 0'}}></div>Web services design, development and maintenance.</>}
 img="card1.png"
                        text="Web services design, development and maintenance. "/>
                </div>
                <div className="col-md-4 mb-2">
                  <Card title="Data Privacy Consulting" img="card2.png"
                        text="Personal data security, large data secure transfer."/>
                </div>
                <div className="col-md-4 mb-2">
                  <Card title="Privacy Computing Solutions" img="card3.png"
                        text="Key management service, federated learning, secure multi-party computing."/>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Services;
