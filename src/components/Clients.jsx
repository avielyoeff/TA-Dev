import React, { Component } from 'react'

export default class Clients extends Component {
    render() {
        return (
            <section id="clients" className="section-bg">

                <div className="container">

                    <div className="section-header">
                        <h3>Our CLients</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.</p>
                    </div>

                    <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-1.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-2.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-3.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-4.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-5.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-6.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-7.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo">
                                <img src="img/clients/client-8.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        )
    }
}
