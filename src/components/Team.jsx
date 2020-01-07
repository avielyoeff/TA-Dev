import React, { Component } from 'react'

export default class Team extends Component {
    render() {
        return (
            <section id="team">
      <div className="container">
        <div className="section-header">
          <h3>הצוות</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div className="row justify-content-center">
{/* 
          <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="member">
              <img src="img/team-1.jpg" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href="#test"><i className="fa fa-twitter"></i></a>
                    <a href="#test"><i className="fa fa-facebook"></i></a>
                    <a href="#test"><i className="fa fa-google-plus"></i></a>
                    <a href="#test"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="member">
              <img src="img/team-2.jpg" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                    <a href="#test"><i className="fa fa-twitter"></i></a>
                    <a href="#test"><i className="fa fa-facebook"></i></a>
                    <a href="#test"><i className="fa fa-google-plus"></i></a>
                    <a href="#test"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="member">
                    <div className="card-flip">
                      <div className="card-front">
                        <img src="img/profile_tzahi.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="card-back text-white">
                        <div className="pt-4 px-3">
                            <h4>Tzahi Ben-Hemo</h4>
                            <span>CTO</span>
                            <div>
                            מנכ"ל החברה בעל ניסיון מעל 10 שנים בפיתוח בניהם רכיבים רבים באתרי אל-על, מגדל- חברת ביטוח,עיריית תל אביב וקופת חולים כללית. מומחה בתחומו יודע לבנות מערכות שלמות מאפס.
                            </div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="member">
              <img src="img/team-4.jpg" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href="#test"><i className="fa fa-twitter"></i></a>
                    <a href="#test"><i className="fa fa-facebook"></i></a>
                    <a href="#test"><i className="fa fa-google-plus"></i></a>
                    <a href="#test"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        )
    }
}
