import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">

                    <header className="section-header">
                        <h3>מי אנחנו</h3>
                        <p>
                        עיצוב בהתאמה אישית יבדיל אותך ממתחריך ממשק משתמש מעולה יוביל ליותר פניות מהאתר ליווי מקצועי יוביל את העסק שלך לתוצאות הראשונות בגוגל! בניית אתר תדמיתי​ לחברה​,​ בניית אתר מסחר​,​ בניית אתר לעסקים​,​ אינטגרציה למערכות​,​ UX\ UI​,​ עיצוב וממשקי משתמש​,​ בניית פורטל. ועם מינימום צוות שנצרך בשביל ביצוע, אז למה לך להיות השוקי של עולם בניית האתרים?
                            </p>
                    </header>

                    <div className="row about-container">

                        <div className="col-lg-6 content order-lg-1 order-2">
                            <p>
                                אז כיצד מתחילים? אנחנו ננתח את הדרישות שלך באמצעות 
                                איפיון ממוקד, חווית המשתמש - לאילו קהל יעד מופנה האתר, עיצוב וצבעים בהתאם לסוג הלקוחות,
                                פיתוח מהיר ומותאם למובייל וכמובן קידום האתר בגוגל על מנת להזניק אותכם קדימה!
                            </p>

                            <div className="icon-box wow fadeInUp">
                                <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                                <h4 className="title"><a href="#test">תיק עסקי</a></h4>
                                <p className="description">
                                   אנחנו נבנה לך תיק עסקי ונתמוך בך מהתחלה עד סוף התהליך ונשמור איתך על קשר ונתמוך בכל התקלות.
                                </p>
                            </div>

                            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon"><i className="fa fa-shield"></i></div>
                                <h4 className="title"><a href="#test">אבטחה והבטחה</a></h4>
                                <p className="description">
                                    אנחנו נדאג לאבטח את האתר שלך על מנת שאף מתחרה עסקי או גורם עוין לא יפגע 
                                    בעסק שלך או בלקוחות שלך.
                                </p>
                            </div>

                            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon"><i className="fa fa-bar-chart"></i></div>
                                <h4 className="title"><a href="#test">ניתוח ובקרה</a></h4>
                                <p className="description">
                                    אנחנו נדאג לנתח ולבקר את האתר/מערכת ולבצע שיפורים על מנת להביא אותך ליעד !
                                   </p>
                            </div>

                        </div>

                        <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                            <img src="img/about-img.svg" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="row about-extra">
                        <div className="col-lg-6 wow fadeInUp">
                            <img src="img/about-extra-1.svg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                            <p>
                                Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
            </p>
                            <p>
                                Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
            </p>
                        </div>
                    </div>

                    <div className="row about-extra">
                        <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                            <img src="img/about-extra-2.svg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
                            <p>
                                Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.
            </p>
                            <p>
                                Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
            </p>
                            <p>
                                Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
            </p>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
