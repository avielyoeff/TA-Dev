import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
    {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",        
        image: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png",
        // image: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
        user: "Luan Gjokaj",
        userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg",
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: "https://cdn.pixabay.com/photo/2015/03/01/11/29/mockup-654585_960_720.jpg",
        // image: "https://i.imgur.com/DvmN8Hx.jpg",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
];

export default class Intro extends Component {
    render() {
        return (
            // autoplay={4000}
            <Slider  className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posted by <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        )
    }
}
