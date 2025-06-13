import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import partnerunderline from "../../Assets/images/programunderline.svg";

import "./index.css";

const testimonials = [
  {
    name: "Emily Carter",
    text: "I barely had a budget to rent a place but HIS-OC helped me connect with homeowners who were willing to rent a room at a very low cost. Their help literally saved my life.",
  },
  {
    name: "Jason Rivera",
    text: "This is a great place to reconnect with yourself. I volunteered for the transitional housing plan, and honestly, it felt great to help people find suitable places to live.",
  },
  {
    name: "Samantha Brooks",
    text: "I’ve been donating to HIS-OC for a year now, and they work to provide shelter and homes for the homeless.",
  },
  {
    name: "Brian Lopez",
    text: "HISOC’s transitional housing program helped me a lot in my days of homelessness. While I took shelter with them, they helped with guidance, and I was able to find a home for myself within a couple of months.",
  },
  {
    name: "Laura Kim",
    text: "I like the transparency HISOC offers to its donors; they never let me feel a single doubt about any donation I make. With proof of their services, I’m satisfied with them.",
  },
  {
    name: "Daniel White",
    text: "The company is doing a great job of helping those in need. I always recommend HISOC to my friends who want to donate money to the needy to go for HISOC.",
  },
  {
    name: "Angela Moore",
    text: "I lost all hope of ever finding a place to live. After being homeless for around 5 months, a kind soul referred HISOC to me. I lived in their shelter for 3 months until they helped me get back on my feet and find a place to live.",
  },
  {
    name: "Rachel Singh",
    text: "As a single mother with two children, I was terrified when we became homeless. But HIS-OC offered us support in those days. We had a comfortable place to temporarily live with great facilities for my children.",
  },
  {
    name: "Kevin Patel",
    text: "My volunteering experience at HIS-OC was a big eye-opener for me! The stories of the homeless shattered me into pieces, but also inspired me more to help them.",
  },
  {
    name: "Olivia Smith",
    text: "HIS-OC helped me in my tough days. they not only provided a safe space for shelter but also supported me with housing, education, and counselling. Highly recommend!",
  },
  {
    name: "Tyler Jackson",
    text: "Life wasn’t easy on me after I lost my full-time job and house with it, the one place that stood with me was HIS-OC. They offered me support with a place to live until I was stable again.",
  },
  {
    name: "Monica Daniels",
    text: "I used to foster a child at my home. He was a sweet kid, but did not have access to education or learning that could build his future. Introducing him to HIS-OC was the best decision; their transitional aged youth program helped with proper education and housing counselling for him till he was able to make independent decisions.",
  },
  {
    name: "Alex Nguyen",
    text: "I donate to HIS-OC biannually, and I’m so happy with my decision. They spend my money to provide shelter for the homeless and offer support for the future, too.",
  },
  {
    name: "Jennifer Gomez",
    text: "I have been a volunteer at HISOC for several years. There’s no doubt that the work they are doing for the homeless community is remarkable.",
  },
  {
    name: "William Hughes",
    text: "This is a wonderful place where homeless people are actually treated with respect and are supported through shelter, therapy, and education to help them become self-sufficient.",
  },
  {
    name: "Nina Evans",
    text: "A few years ago, my husband and I were going through a hard time. We had no money to pay the rent and ended up on the streets. I will be forever thankful to HISOC for helping us and our kids during our most vulnerable moment by giving us a roof over our heads.",
  },
  {
    name: "Michael Torres",
    text: "I had no place to go after aging out of foster care. HISOC helped me stand on my feet with therapy and education. Whatever I am today is greatly due to the help I got from the community. Highly recommended!",
  },
  {
    name: "Sara Lindstrom",
    text: "I love the community building there. The brothers and sisters really help people in need. It’s been a while since I last went there, but I would love to visit again soon.",
  },
  {
    name: "George Salazar",
    text: "This place was a blessing during one of the darkest times in my life. I had extreme alcohol addiction, but their support and strength helped me move forward and believe in myself again. Today, thanks to them, I'm 3 years clean.",
  },
  {
    name: "Kayla Thompson",
    text: "I have seen HISOC help thousands of people. In them, hundreds have become self-sufficient through programs like education, job training, and therapy. Nothing but praise for the people at HISOC.",
  },
  {
    name: "Dylan Reyes",
    text: "The community took me in with open arms when I had nothing. Today, I’m helping HISOC with donations to grow and help more people who are in need, as I once was.",
  },
  {
    name: "Amanda Holmes",
    text: "I volunteered there last Thanksgiving. The place is clean and filled with compassionate people. It’s a shame they get fewer volunteers. Highly recommended.",
  },
  {
    name: "Marcus Allen",
    text: "Once, I had a part-time job that paid very little, and I had no place to stay. HISOC, with its home-sharing program, provided me with shelter and food. I ended up staying there till my graduation.",
  },
  {
    name: "Natalie Rivera",
    text: "It was a great opportunity to be with an organization that is actually helping people in need. Not only did they provide me with training, but they also helped me find a job. Truly grateful to them.",
  },
  {
    name: "Ethan Scott",
    text: "From giving me food and shelter when I was a runaway kid to helping me stay when I was thrown out of the system. I’m very grateful for HOCIS, which has become a place to rely on for me and many others.",
  },
  {
    name: "Isabella Jenkins",
    text: "When time isn’t on your side, all you need is a little support. And HISOC provides a community built to nurture, help, and support individuals from any background. Forever thankful to them for helping me during my difficult time.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "12px",
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="testimonial">
      <div className="container">
        <div class="row">
          <div class="col-md-12">
            <div className="testimonial-head">
              {/* <h6
                className="testimonialhead1 text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                What People Are Saying About Us
              </h6> */}
              <h3
                className="title text-center text-dark"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                What{" "}
                <span className="position-relative">
                  People
                  <img
                    src={partnerunderline}
                    className="underline"
                    alt="Underline"
                  />
                </span>{" "}
                Are Saying About Us
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="testimonial-cards mb-4">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="testimonial-card-head">
                      {/* <div className="testimonial-img">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div> */}
                      <div className="testimonial-card-head-text">
                        <p className="name">{testimonial.name}</p>
                        {/* <p className="business ">{testimonial.title}</p> */}
                      </div>
                    </div>
                    <p className="testimonial-card-body">{testimonial.text}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
