import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
const aboutUs = () => {
  return (
    <>

<nav >
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo"><a href="/">MCard</a></label>
        <ul>
            <li class="b1"><NavLink to="/" class="active">Home</NavLink></li>
            <li class="b1"><a href="#menus">Menu</a></li>
            <li class="b1"><NavLink to="/aboutUs" className='navli'>About</NavLink></li>
            <li class="b1"><a href="https://wa.link/1h8jb7" id="pbtn">Help</a></li>
        </ul>
    </nav>



<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">About us page</h1>
        <p className="lead text-muted mb-0">Welcome to a culinary adventure like no other, where deliciousness knows no bounds and your cravings are just a click away. [Your Meal Selling Website Name] is your go-to destination for discovering, ordering, and savoring the finest flavors from the best restaurants in town. We're here to make dining an experience, not just a meal.

Your Culinary Journey Starts Here:

Endless Culinary Exploration: With [Your Meal Selling Website Name], your palate becomes the compass. Explore a vast and diverse culinary landscape, from your neighborhood's hidden gems to renowned establishments. Discover menus that cater to every craving and cuisine, all in one place.

Effortless Ordering: We've streamlined the ordering process to make it as easy as pie (or any other dish you fancy). Browse menus, read reviews, and place your order with a few simple clicks. Whether you're dining solo, sharing with friends, or hosting a feast, we've got you covered.

Personalized Recommendations: Our AI-driven recommendation engine understands your tastes better than anyone else. Expect personalized suggestions that will tantalize your taste buds, making your dining decisions a breeze.

Real-Time Updates: Track your order in real-time, from kitchen to doorstep. No more wondering when your meal will arrive; you'll know exactly when to set the table.

Reviews and Ratings: We believe in transparency and the power of community feedback. Read honest reviews from fellow diners, share your experiences, and help others discover culinary gems.

Exclusive Offers: Enjoy access to exclusive deals, discounts, and promotions from your favorite restaurants. We're committed to making your dining experience not only delightful but also affordable.</p>
        <p className="lead text-muted"><a href="/" className="text-muted"> 
                    <u>Order Now</u></a>
        </p>
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"></img></div>
    </div>
  </div>
</div>

<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Founder of this Company</h2>
        <p className="font-italic text-muted mb-4">Welcome to Zyka Meal, a culinary haven where the genius of Prasad Wandekar comes to life on your plate. Founded by Prasad, a visionary in the world of food, Zyka Meal is a celebration of taste, culture, and innovation. Prepare to embark on a culinary journey that promises to redefine your dining experiences.

Meet the Maestro - Prasad Wandekar:

Prasad Wandekar, the driving force behind Zyka Meal, is a culinary virtuoso with an unparalleled passion for the art of cooking. With a background steeped in culinary excellence, Prasad's journey has taken him from mastering the traditional flavors of India to pushing the boundaries of creativity in the culinary world.

Prasad's mission is clear: to create a dining experience that resonates with every palate. His commitment to sourcing the finest ingredients, experimenting with flavors, and preserving culinary traditions while infusing modern techniques has made him a trailblazer in the food industry.</p>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://media.licdn.com/dms/image/D4D03AQHIc6X0Fz--Hg/profile-displayphoto-shrink_100_100/0/1677439010417?e=1699488000&v=beta&t=1I_5sKifXHoMUmVoMobucl-8jibVzIymj1wGoOR0E_k" height="400px"></img></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://media.licdn.com/dms/image/D4D35AQG-Cc6VBiVu0g/profile-framedphoto-shrink_400_400/0/1690708797372?e=1694430000&v=beta&t=rSBUreChDIuYH5LnhaN6R63WAU58rAl3yHgAa7PaK6c" height="200px" alt="" className="img-fluid mb-4 mb-lg-0" ></img></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Co-founder of this Company</h2>
        <p className="font-italic text-muted mb-4">About Me:
I am Balaji, one of the proud co-founders of Zyka Meal, a dynamic food delivery website that brings culinary delights to doorsteps. With a deep passion for food and a vision for revolutionizing the dining experience, I embarked on this exciting journey to make delicious meals accessible to everyone.</p>
      </div>
    </div>
  </div>
</div>

{/* <div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our team</h2>
        <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
          <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
          <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
          <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
          <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div> */}

    {/* </div>
  </div>
</div> */}


<footer className="bg-light pb-5">
  <div className="container text-center">
    <p className="font-italic text-muted mb-0">&copy; Copyrights zyka.com All rights reserved.</p>
  </div>
</footer>
    </>
  )
}

export default aboutUs
