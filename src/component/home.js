import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
const home = () => {
  return (
    <>
      <nav >
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo"><a href="/">MCard</a></label>
        <ul>
            <li className="b1"><NavLink to="/" className="navli">Home</NavLink></li>
            <li className="b1"><a href="#menus">Menu</a></li>
            <li className="b1"><NavLink to="/aboutUs" className="navli">About</NavLink></li>
            <li className="b1"><a href="https://wa.link/1h8jb7" id="pbtn">Help</a></li>
        </ul>
    </nav>

     <div className='container'>
     <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="p1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="p2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="p3.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
     </div>
        <section id="menus">
        <div className="items1"> 
            <h2>Inspiration for your first order</h2>
        </div>
        <div className="items" >
                <div className="item">
                    <a href="#burgers"><img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg" alt="burgers"></img><br></br><h3>Burgers</h3></a>
                </div>
                <div className="item">
                    <a href="#burgers"><img src="https://media.istockphoto.com/id/1309126468/photo/cassava-broth-creamy-broth-made-with-cassava-sausage-bacon-and-meat-accompanied-by-toast.webp?b=1&s=612x612&w=0&k=20&c=WY_URUj5_6d9HancrEv4-_thX344tSePS5qgxgmJ7Ak=" alt="soups"></img><br></br><h3>Soups</h3></a>
                </div>
                <div className="item">
                    <a href="#noddles"><img src="https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="noddles"></img><br></br><h3>Noddles</h3></a>
                </div>
                <div className="item">
                    <a href="#rices"><img src="https://images.pexels.com/photos/3926133/pexels-photo-3926133.jpeg?auto=compress&cs=tinysrgb&w=800" alt="rices"></img><br></br><h3>Rices</h3></a>
                </div>
                <div className="item">
                    <a href="#starters"><img src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg" alt="starters"></img><br></br><h3>Starters</h3></a>
                </div>
                <div className="item">
                    <a href="#beverages"><img src="https://c8.alamy.com/comp/M50RBJ/bottles-and-cans-of-assorted-global-soft-drinks-M50RBJ.jpg" alt="beverages"></img><br></br><h3>fastfoods</h3></a>
                </div>
        </div>
    </section>

    <section className="sec2" id="burgers">
         <h1>Burger's<br></br>And Soups</h1>
        <div className="box">
            <div className="box1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMlJCI8NF8-bawQb4JcCD_ZljVIq_CA4--JsVjeHJ3Q&s" alt="burger" className="img1"></img>
                <h2>Aloo Tikki Burger</h2>
                <p className="p1" >aloo tikki burger, featuring a golden brown potato patty filled <br></br><h4>49 Rs</h4></p>
                <br></br>
                <a href="https://view.forms.app/balajikagne/pizza-order-form" className="aorder"><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">
       
                <img src="https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_2014376390.jpg" alt="burger" className="img1"></img>
                <h2>Veg Tandoori</h2>
                <p className="p1">sweet potatoes, black beans, oats and amazing tandoori flavors<br></br><h4>59 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
               
                <img src="https://girlheartfood.com/wp-content/uploads/2020/06/Crispy-Chicken-Burger-10.jpg" alt="burger" className="img1"></img>
                <h2>Chicken crispy</h2>
                <p className="p1">This burger consists of a super crispy & flakey chicken patty<br></br><h4>65 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
              
                <img src="https://static.toiimg.com/photo/53352482.cms" alt="burger" className="img1"></img>
                <h2>Chicken tandoori</h2>
                <p className="p1">These tandoori chicken burgers are full of flavor, with a spicy <br></br><h4>75 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">
                
                <img src="https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg" alt="burger" className="img1"></img>
                <h2>French fries</h2>
                <p className="p1">Potato slices fried until golden and crispy,best in test just try it. <br></br><h4>59 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">
                
                <img src="https://www.sprinklesandsprouts.com/wp-content/uploads/2021/05/Peri-Peri-Fries-SQ.jpg" alt="burger" className="img1"></img>
                <h2>Peri peri fries</h2>
                <p className="p1">Potato fries tossed in peri peri seasoning ,best in test just try it.<br></br><h4>79 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
                
                <img src="https://www.secondrecipe.com/wp-content/uploads/2020/06/veg-manchow-soup.jpg" alt="burger" className="img1"></img>
                <h2>Veg Manchow</h2>
                <p className="p1">Mixed vegetables and spices sautéed for base,best in test just try it.<br></br><h4>69 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
                <img src="https://greenbowl2soul.com/wp-content/uploads/2020/02/veg-manchow-soup.jpg" alt="burger" className="img1"></img>
                <h2>Veg schwezwan</h2>
                <p className="p1">Stir-fried vegetables and Szechuan sauce create ,best in test just try it.<br></br><h4>69 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">
                
                <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2019/06/lemon-coriander-soup-recipe.jpg" alt="burger" className="img1"></img>
                <h2>Lemon Coriander</h2>
                <p className="p1">Simmered vegetable broth infused with lemon and coriander,best in test just try it.<br></br><h4>69 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">
                
                <img src="https://www.chiselandfork.com/wp-content/uploads/2023/01/chicken-manchow-soup-2.jpg" alt="burger" className="img1"></img>
                <h2>Chicken manchow</h2>
                <p className="p1">chicken, assorted vegetables, garlic, ginger,best in test just try it.<br></br><h4>79 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
                
                <img src="https://recipesofhome.com/wp-content/uploads/2020/03/manchow-soup-recipe.jpg" alt="burger" className="img1"></img>
                <h2>Chicken schezwan</h2>
                <p className="p1">chicken vibrant vegetables and schezwan sauce in a spicy,best in test just try it.<br></br><h4>79 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
                
                <img src="https://cdn.tarladalal.com/members/9306/procstepimgs/lemon-and-coriander-soup--19-185655.jpg" alt="burger" className="img1"></img>
                <h2>Chicken coriander</h2>
                <p className="p1">Chicken, lemon juice, fresh coriander, garlic, ginger,best in test just try it.<br></br><h4>79 Rs</h4></p>
                <br></br>
                <a href="https://neartail.com/sm/m6STpToJR"><button className="order">Order </button></a>
            </div>
            </div>
        </div>
       </section>

       <section className="sec3" id="noddles">
         <h1>Noddles</h1>
        <div className="box">
            <div className="box1">
                <img src="https://img-global.cpcdn.com/recipes/442b8d49c7bc2f01/1200x630cq70/photo.jpg" alt="Noddles" className="img1"></img>
                <h2>Chicken angara </h2>
                <p className="p1">marinated grilled chicken chunks, smoky spices, yogurt,best in test just try it.<br></br><h4>79/119 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">
                <img src="https://img-global.cpcdn.com/recipes/424401d7881a6195/1200x630cq70/photo.jpg" alt="Noddles" className="img1"></img>
                <h2>Chicken hakka </h2>
                <p className="p1">stir-fried chicken, mixed vegetables, and egg ,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
                <img src="https://www.honestfoodtalks.com/wp-content/uploads/2022/12/Chungs-Teriyaki-stir-fry-Hong-Kong-noodles-with-chopsticks-on-the-side.jpg" alt="Noddles" className="img1"></img>
                <h2>Chicken hong kong</h2>
                <p className="p1">fried chicken pieces, served in a sweet and ,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
                <img src="https://sinfullyspicy.com/wp-content/uploads/2022/04/1200-by-1200-images-2.jpg" alt="Noddles" className="img1"></img>
                <h2>Chicken manchurian</h2>
                <p className="p1">chicken pieces , garlic, ginger, soy sauce, vinegar,best in test just try it. <br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">
                <img src="https://i0.wp.com/www.tastesofmalabar.com/wp-content/uploads/2016/11/995975_164617437058185_1355551832_n.jpg?resize=845%2C435&ssl=1" alt="Noddles" className="img1"></img>
                <h2>Checken schezwan</h2>
                <p className="p1">stir-fried chicken with vibrant vegetables, blended,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">
                <img src="https://cdn.tarladalal.com/members/9306/big/big_triple_schezuan_rice_(_mumbai_roadside_recipes_)-14115.jpg" alt="Noddles" className="img1"></img>
                <h2>Checken triple</h2>
                <p className="p1">mix of stir-fried chicken, assorted vegetables,best in test just try it.<br></br><h4>109/159 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
                <img src="https://ranveerbrar.com/wp-content/uploads/2021/03/chilli-garlic-noodles-scaled.jpg" alt="Noddles" className="img1"></img>
                <h2>Veg angara</h2>
                <p className="p1">stir-fried mixed vegetables and noodles cooked,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
                <img src="https://img.taste.com.au/Q5eKYh7h/taste/2016/11/chilli-chicken-noodles-with-peanuts-7201-1.jpeg" alt="Noddles" className="img1"></img>
                <h2>Checken chilly garlic</h2>
                <p className="p1">stir-fried chicken, garlic-infused noodles ,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box2">
            <div className="box1">
                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg" alt="Noddles" className="img1"></img>
                <h2>Veg hakka</h2>
                <p className="p1">stir-fried mixed vegetables and  seasoned with soy sauce,best in test just try it.<br></br><h4>79/119 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
         </div>
            <div className="box2">
                <div className="box1">
                <img src="https://www.sailusfood.com/wp-content/uploads/2010/05/vegetable-hong-kong-noodles.jpg" alt="Noddles" className="img1"></img>
                <h2>Veg hong kong</h2>
                <p className="p1">Also called as "pan-fried noodles", the Hong Kong,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
                <img src="https://sinfullyspicy.com/wp-content/uploads/2022/04/1200-by-1200-images-2.jpg" alt="Noddles" className="img1"></img>
                <h2>Veg manchurian</h2>
                <p className="p1">Saucy indo chinese style noodles in a savory, spicy ,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
                <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/schezwan-noodles-recipe-1.jpg" alt="Noddles" className="img1"></img>
                <h2>Veg schezwan</h2>
                <p className="p1">Vegetarian Schezwan Noodles made with vegetables ,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
                </div>
            </div>
            <div className="box4">
                <div className="box1">
                <img src="https://img-global.cpcdn.com/recipes/fdf74c1a19bc76f1/680x482cq70/triple-schezwan-noodles-recipe-main-photo.jpg" alt="Noddles" className="img1"></img>
                <h2>Veg triple</h2>
                <p className="p1">triple noddle is complete meal with combination of triple,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
       </section>

       <section className="sec3" id="rices">
         <h1>Rices</h1>
        <div className="box">
            <div className="box1">

                <img src="https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg" alt="rice" className="img1"></img>
                <h2>veg frie rice</h2>
                <p className="p1">Veg fried rice recipe is one of the most popular quickest,best in test just try it.<br></br><h4>79/120 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">

                <img src="https://img-global.cpcdn.com/recipes/d2c64b6ff57241af/680x482cq70/restaurant-style-veg-schezwan-rice-recipe-main-photo.jpg" alt="rice" className="img1"></img>
                <h2>veg schezwan rice</h2>
                <p className="p1">Restaurant Style veg schezwan rice Recipe,best in test,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiXXovKVfPYxkEqNo3JHDlf799cpWq9khoAIDlbyk&s" alt="rice" className="img1"></img>
                <h2>veg chilli garlic rice</h2>
                <p className="p1">super flavorful Chilli Garlic Fried Rice recipe,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4l_wjhLlr2qYzYdC2EHG008szKqXUrc2tSQ&usqp=CAU" alt="rice" className="img1"></img>
                <h2>veg angara rice</h2>
                <p className="p1">Paneer, cauliflower, charcoal, peas, garam masala,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlTmpvboWA4pHZPwfeMUkdoFas4NecJwg9fV2Tz-3YQ&s" alt="rice" className="img1"></img>
                <h2>veg hong kong rice</h2>
                <p className="p1">Vegetable Hong Kong with rice offers a complete,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a74970QeATLZXBR1C0ERuuYKOn4zF4gL8wPPYUVV&s" alt="rice" className="img1"></img>
                <h2>veg manchur Rice</h2>
                <p className="p1">Premium Photo | Veg manchurian fried rice,best in test just try it.<br></br><h4>89/129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">

                <img src="https://media.istockphoto.com/id/1292617686/photo/healthy-and-tasty-paneer-fried-rice-made-of-rice-mixed-veggies-and-paneer-served-in-bowl-over.jpg?s=612x612&w=0&k=20&c=frc5aSMeFo4zjjP8fo497lhKJBr6VWxyByFAHqPjpj4=" alt="rice" className="img1"></img>
                <h2>veg paneer Rice</h2>
                <p className="p1">paneer fried rice recipe,best in test just try it,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://ranveerbrar.com/wp-content/uploads/2021/02/Triple-Schezwan-Rice-scaled.jpg" alt="rice" className="img1"></img>
                <h2>veg triple rice</h2>
                <p className="p1">Hakka noodles, schezwan sauce, basmati rice, cabbage,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">

                <img src="https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg" alt="rice" className="img1"></img>
                <h2>Chicken fried rice</h2>
                <p className="p1">Bell peppers, hot sauce, cooked rice, spring onions,best in test just try it.<br></br><h4>89/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">

                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/Oyakodon-0595-II.jpg" alt="rice" className="img1"></img>
                <h2>chicken egg rice</h2>
                <p className="p1">Skinless chicken thighs, soy sauce, short grain rice,best in test just try it.<br></br><h4>89/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">

                <img src="https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg" alt="rice" className="img1"></img>
                <h2>chick-schezwan-rice</h2>
                <p className="p1">Schezwan sauce, basmati rice,chicken,best in test just,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://www.hwcmagazine.com/wp-content/uploads/2013/05/Pantry-Fried-Rice-1200-x-1200-2884-500x375.jpg" alt="rice" className="img1"></img>
                <h2>chicken hong rice</h2>
                <p className="p1">Soy sauce, french beans, chilli sauce, cashew nuts,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
                </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://lh3.googleusercontent.com/pFO71RoaVecuPbQK_odjSnVyioOzXukFuk-yAF6qrPr2yjgkTN4BaNP8P_fgQiJ_QFxfmY4ZuzpB9Uicoagjlt2oLdsx-cGmlp9KuNg=w512-rw" alt="rice" className="img1"></img>
                <h2>chicken triple rice</h2>
                <p className="p1">Fried noodles, schezwan sauce, boneless chicken pieces,best in test just try it.<br></br><h4>109/160 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
                </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://dryfruitmart.in/wp-content/uploads/2022/01/ANGARA-RICE-4.jpg" alt="rice" className="img1"></img>
                <h2>chicken angara rice</h2>
                <p className="p1">Crispy fried onions, charcoal, fresh tomatoes, garam masala,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
                </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://images-gmi-pmc.edge-generalmills.com/75a7343a-1520-4e95-a13f-e61b5fc5b741.jpg" alt="rice" className="img1"></img>
                <h2>chicken garlic rice</h2>
                <p className="p1">Soy sauce, boneless chicken, cooked rice, olive oil, vinegar,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
                </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://i.ytimg.com/vi/7Bfj1mEp6dA/maxresdefault.jpg" alt="rice" className="img1"></img>
                <h2>chick-manchur rice</h2>
                <p className="p1">Chicken breast, soy sauce, brown sugar, corn, spring onion,best in test just try it.<br></br><h4>99/139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
       </section>

       <section className="sec3" id="beverages">
         <h1>Beverages & instant food</h1>
        <div className="box">
            <div className="box1">
                <img src="https://ikneadtoeat.com/wp-content/uploads/2019/01/Masala-Chai-Recipe-1-500x500.jpg" alt="beverages and instant food" className="img1"></img>
                <h2>Chai</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>20 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">
                <img src="https://img.freepik.com/premium-photo/white-coffee-cup-coffee-beans_120795-569.jpg?w=360" alt="beverages and instant food" className="img1"></img>
                <h2>Hot coffee</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>30 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
                
                <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2022/09/poha-recipe-2.jpg" alt="beverages and instant food" className="img1"></img>
                <h2>Poha</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>30 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
                
                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/01/egg-bhurji-recipe.jpg.webp" alt="beverages and instant food" className="img1"></img>
                <h2>Anda bhurji</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>59 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">
                
                <img src="https://img77.uenicdn.com/image/upload/v1631475473/business/dae279e1-e7a6-448c-b65b-ea775b4756bb.jpg" alt="beverages and instant food" className="img1"></img>
                <h2>Plane maggie</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>45 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">
                
                <img src="https://stepintothekitchen.com/wp-content/uploads/2017/10/MasalaMaggiRecipe.jpg" alt="beverages and instant food" className="img1"></img>
                <h2>Masala maggie</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>55 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">
                
                <img src="https://qph.cf2.quoracdn.net/main-qimg-f0f707a7387f066074cfa4834593ff30-lq" alt="beverages and instant food" className="img1"></img>
                <h2>Anda maggie</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>69 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">
                
                <img src="https://img-global.cpcdn.com/recipes/da7121f00c4a6a2f/1200x630cq70/photo.jpg" alt="beverages and instant food" className="img1"></img>
                <h2>Omlet maggie</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>49 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
       </section>


       <section className="sec3" id="starters">
         <h1>Starters</h1>
        <div className="box">
            <div className="box1">
                
                <img src="https://vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg" alt="stater" className="img1"></img>
                <h2>veg manchurian</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>120 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">

                <img src="https://i.ytimg.com/vi/gcqZteUmQko/maxresdefault.jpg" alt="stater" className="img1"></img>
                <h2>veg paneer. 65</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">

                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/chilli-paneer-recipe.jpg" alt="stater" className="img1"></img>
                <h2>veg paneer chilli</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>129 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://i0.wp.com/zheelicious.com/wp-content/uploads/2020/06/9dad4c_355c672657f54aa6aa7c94965090b9e3mv2.jpg?resize=720%2C598&ssl=1" alt="stater" className="img1"></img>
                <h2>chinese bhel</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>89 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGdP-yGB6K2E-uJPexLmwNK6fzyZrIaEoeIFHlCSiCZDZlST5WTCbKyusqRQ5NLHILpI&usqp=CAU" alt="stater" className="img1"></img>
                <h2>chicken chilli dry</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">

                <img src="https://cdn.pixabay.com/photo/2021/05/25/03/02/thai-6281135_1280.jpg" alt="stater" className="img1"></img>
                <h2>chicken chilli gravy </h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">

                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg" alt="stater" className="img1"></img>
                <h2>chicken 65</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box4">
                <div className="box1">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJl-AjubXgkOLEJuBw8BEYRTq6tG2GDE3AAg&usqp=CAU" alt="stater" className="img1"></img>
                <h3>chicken lollipop oil fry </h3>
                <p className="p1">best in the test, try it and then realize the difference <h4>139 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
        <div className="box">
            <div className="box1">

                <img src="https://mydukaan-prod-new.s3.amazonaws.com/50926/4a729d0a-88ff-4837-88d6-464b159f2880.png" alt="stater" className="img1"></img>
                <h3>chicken lollipop masala</h3>
                <p className="p1">best in the test, try it and then realize the difference <h4>149 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            <div className="box2">
                <div className="box1">

                <img src="https://1.bp.blogspot.com/-ESqg52zt2IM/XjChYbssYGI/AAAAAAAANsU/3NgdqeXhDoMpzzH0X2M84RTriezwTB0egCLcBGAsYHQ/s1600/rps20200129_023159.jpg" alt="stater" className="img1"></img>
                <h3>chicken lollipop gravy</h3>
                <p className="p1">best in the test, try it and then realize the difference <h4>149 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
            <div className="box3">
                <div className="box1">

                <img src="https://i.ytimg.com/vi/DjTBhnXMHVU/maxresdefault.jpg" alt="stater" className="img1"></img>
                <h2>chicken chinese bhel</h2>
                <p className="p1">best in the test, try it and then realize the difference <h4>109 Rs</h4></p>
                <br></br>
                <a href=""><button className="order">Order </button></a>
            </div>
            </div>
        </div>
       </section>

       <footer>
        <div className='finfo'>
            <li><a href="https://www.instagram.com/balaji_kagne_1082/" title="instgram"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/balaji-kagne-777a40222/" title="linkdin"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/balajikagne" title="github"><i className="fa-brands fa-github"></i></a></li>
            <p>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p>
            <li><a href="" title="privacy policy">Privacy Polic</a> | </li>
            <li><a href="" title="term of use">Term Of Use</a></li>
        </div>
         <div id="chatbox">
            <a href="https://wa.link/1h8jb7" title="Our Support"><i className="fa-brands fa-whatsapp"></i></a>
         </div>
       </footer>
    </>
  )
}

export default home;
