import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section id="services" className="section-bg">
      <div className="container">

        <header className="section-header">
          <h3>שירותים</h3>
          <p>שירות היא לא מילה גסה! יצירת קשר רציף גם בסוף התהליך יכול לגרום לך לישון בראש שקט, ולדעת שיש מי שדואג לך!</p>
        </header>

        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-pulse" style={{color: '#ff689b'}}></i></div>
              <h4 className="title"><a href="#test">בניית אתרי תדמית</a></h4>
              <p className="description">
              הדבר החשוב ביותר באתר תדמית הוא אתר שבאמת יקדם את העסק וייתן תמורה להשקעה הרבה מבחינה כספית ומחשבה, לכן תכנון מדויק שמלווה באיפיון, הכרת המוצר ועולם התוכן, וביצוע ניתוחי שיווק יביא לכם היתרון גדול על המתחרים!                                    
                </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-cog-outline" style={{color: '#e9bf06'}}></i></div>
              <h4 className="title"><a href="#test">תחזוקה שוטפת</a></h4>
              <p className="description">
              כחלק משירותנו אנחנו נותנים גם תחזוקה שוטפת לכל אתר שקיים, אם יש לכם אתר שקניתם ואתם רוצים רכיבים נוספים או לעדכן ולבצע שינויים נוכל לסייע וללוות אותכם ואף לשפר באופן ניכר ובמסירות רבה!
                </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}}></i></div>
              <h4 className="title"><a href="#test">בניית דפי נחיתה</a></h4>
              <p className="description">
              הצוות המיומן שלנו יבנו לך דף נחיתה מתקדם בו תוכלו להרחיב את רשימת הדיוור, להגדיל את התנועה לאתר, לקדם שירותים ומוצרים, ולהביא ליותר פעילות מצד הלקוחות ועוד!
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-speedometer-outline" style={{color: '#41cf2e'}}></i></div>
              <h4 className="title"><a href="#test">קידום אתרים</a></h4>
              <p className="description">
              רוצים אתר עם תנועה גדולה של לקוחות? הגעתם למקום הנכון, באמצעות ניתוח ואיפיון מילות מפתח ובנייה נכונה נאפשר לאתר שלכם לקבל דירוג גבוהה בגוגל ולהופיע בדפים הראשונים ולקבל חשיפה גדולה יותר.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-world-outline" style={{color: '#d6ff22'}}></i></div>
              <h4 className="title"><a href="#test">פרסום גלובלי ובמספר שפות</a></h4>
              <p className="description">
              אחד היתרונות הגדולים שלנו הוא היכולת לעבוד במספר שפות ומספר מגזרים, אנחנו יודעים להתאים את הפרסום שלנו בצורה ממומקדת לשפה של הלקוח שלכם, כך למשל אם חשבתם לפרסם בשפה הרוסית ושפות נוספות, אנחנו כאן!
                </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-compose-outline" style={{color: '#4680ff'}}></i></div>
              <h4 className="title"><a href="#test">ממשק לניהול תוכן</a></h4>
              <p className="description">
              אחד מהשירותים המובילים שלנו הוא בניית אתרי אינטרנט חכמים שיודעים להפוך מבקרים ללקוחות. אנו מפתחים במגוון טכנולוגיות וכמובן שכל האתרים שלנו מותאמים לסלולר ולמכשירים ניידים ככלל.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
        )
    }
}
