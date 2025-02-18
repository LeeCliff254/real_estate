import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
		<>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Section 1: Hero Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">

                {/* Carousel start */}
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  transitionDuration={2500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  className='transition-all ease-in-out duration-1000'
                >
                  <div className='m-2'>
                    <img src="https://i.pinimg.com/564x/57/39/c8/5739c86ffef8069f494933f5175b1013.jpg" alt="Los Angeles" className="d-block w-100"></img>
                  </div>
                  <div className='m-2'>
                    <img src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661455.jpg?ga=GA1.1.448795543.1719663894&semt=ais_user" alt="Chicago" className="d-block w-100"></img>
                  </div>
                  <div className='m-2'>
                    <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799711.jpg?ga=GA1.1.448795543.1719663894&semt=ais_user" alt="New York" className="d-block w-100"></img>
                  </div>
                  <div className='m-2'>
                    <img src="https://i.pinimg.com/474x/35/e0/49/35e049368858fac70676a685a27b0aa8.jpg" alt="New York" className="d-block w-100"></img>
                  </div>
                  <div className='m-2'>
                    <img src="https://i.pinimg.com/474x/e0/65/e4/e065e43e9c4ca0378fd9c85b825a8fc3.jpg" alt="New York" className="d-block w-100"></img>
                  </div>
                </Carousel>;
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item">
                    </div>
                    <div className="carousel-item">
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </button>
                </div>

                {/* Carousel end */}

                <div className="p-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Your Dream Home</h1>
                  <p className="text-lg text-gray-600 mb-8">Discover properties that fit your lifestyle.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Explore Properties
                  </button>
                </div>
              </div>
            </div>

            {/* Section 2: Featured Properties */}
            <div className="">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Featured Properties</h2>
              <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example property cards */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://img.freepik.com/free-photo/chinese-city_1127-4129.jpg?ga=GA1.1.448795543.1719663894&semt=ais_user" alt="Property 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful House</h3>
                    <p className="text-gray-600 mb-2">golfview gardens, Mombasa,</p>
                    <p className="text-gray-700">Ksh 50,000</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?ga=GA1.1.448795543.1719663894&semt=ais_user" alt="Property 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Cozy Apartment</h3>
                    <p className="text-gray-600 mb-2"> Mombasa, ocean view</p>
                    <p className="text-gray-700">Ksh 100,000</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://img.freepik.com/premium-photo/contemporary-saudi-residential-landscape_153608-69311.jpg?ga=GA1.1.448795543.1719663894&semt=ais_user" alt="Property 3" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Villa</h3>
                    <p className="text-gray-600 mb-2">links road, Mombasa, kenya</p>
                    <p className="text-gray-700">Ksh 700,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: About Us */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt feugiat purus, vel eleifend
                  lacus congue ut.
                </p>
                <p className="text-gray-600">
                  Nullam varius, mauris vitae rutrum luctus, ipsum velit tempus libero, eget blandit lorem lorem non
                  arcu.
                </p>
              </div>
            </div>

            {/* Section 4: Contact */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter your message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
  );
};

export default Home;