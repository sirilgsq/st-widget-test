import { useEffect, useRef, useState } from "react";
import FloatingButton from "../comp/floating-button";

export default function IframeWidget() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("any"); 

  const iframeRef = useRef(null);
  const API_KEY = "4cfb9744c5b5a7c67711";
  const INVEST_KEY = "3fe06bae5616af5ca6a0";
  const TYPE = "";
  const BASE_URL = "http://localhost:5174";
//   const BASE_URL = "https://develop.d38xffcv058jap.amplifyapp.com";
    const LANG = "en";
    // ?api_key=&invest_key=&lang=de

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.iframeHeight && iframeRef.current) {
        iframeRef.current.style.height = event.data.iframeHeight;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Sample featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Apartment with Ocean View",
      address: "123 Coastal Drive, Beachside, CA",
      price: "$450,000",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "/placeholder.svg?height=300&width=400",
      type: "apartment",
    },
    {
      id: 2,
      title: "Spacious Family Home",
      address: "456 Maple Avenue, Suburbia, NY",
      price: "$750,000",
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: "/placeholder.svg?height=300&width=400",
      type: "house",
    },
    {
      id: 3,
      title: "Downtown Luxury Condo",
      address: "789 Urban Street, Metropolis, IL",
      price: "$650,000",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/placeholder.svg?height=300&width=400",
      type: "condo",
    },
    {
      id: 4,
      title: "Countryside Villa with Pool",
      address: "101 Rural Road, Greenville, TX",
      price: "$950,000",
      beds: 5,
      baths: 4,
      sqft: 3200,
      image: "/placeholder.svg?height=300&width=400",
      type: "villa",
    },
    {
      id: 5,
      title: "Cozy Studio in Arts District",
      address: "202 Creative Blvd, Artstown, CA",
      price: "$320,000",
      beds: 1,
      baths: 1,
      sqft: 750,
      image: "/placeholder.svg?height=300&width=400",
      type: "studio",
    },
    {
      id: 6,
      title: "Renovated Historic Townhouse",
      address: "303 Heritage Lane, Oldtown, MA",
      price: "$850,000",
      beds: 3,
      baths: 2.5,
      sqft: 2200,
      image: "/placeholder.svg?height=300&width=400",
      type: "townhouse",
    },
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      content:
        "Working with DreamHome Realty was the best decision we made. They helped us find our perfect home within our budget.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      content:
        "I've worked with many real estate agencies, but none compare to the professionalism and market knowledge of DreamHome.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Seller",
      content:
        "Selling my first home was daunting, but the team made it stress-free and got me above asking price!",
      rating: 4,
    },
  ];

  return (
      <div className="min-h-screen bg-white">
          {/* <FloatingButton/> */}
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Home icon */}
                <svg
                  className="h-8 w-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  DreamHome
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#"
                  className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Properties
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Agents
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  /* X icon */
                  <svg
                    className="block h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  /* Menu icon */
                  <svg
                    className="block h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Properties
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Agents
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </a>
              <div className="mt-4 pl-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/placeholder.svg?height=600&width=1600"
            alt="Real estate background"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Home
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover the perfect property that fits your lifestyle and budget.
            We have thousands of listings updated daily.
          </p>

          {/* Search Form */}
          <div className="mt-10 max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor="search"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {/* Map Pin icon */}
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md py-3"
                      placeholder="City, neighborhood, or address"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="property-type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Property Type
                  </label>
                  <select
                    id="property-type"
                    name="property-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="mt-1 block w-full py-3 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="all">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="villa">Villa</option>
                    <option value="studio">Studio</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="price-range"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price Range
                  </label>
                  <select
                    id="price-range"
                    name="price-range"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="mt-1 block w-full py-3 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="any">Any Price</option>
                    <option value="100k-300k">$100k - $300k</option>
                    <option value="300k-500k">$300k - $500k</option>
                    <option value="500k-750k">$500k - $750k</option>
                    <option value="750k-1m">$750k - $1M</option>
                    <option value="1m+">$1M+</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {/* Search icon */}
                  <svg
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center items-center h-full bg-red-300 mx-auto relative overflow-hidden">
        <iframe
          ref={iframeRef}
          id="st_invest_widget"
          //   http://localhost:5174?api_key=4cfb9744c5b5a7c67711&invest_key=f0c2b883c58ebabf94ca&lang=de
          src={`${BASE_URL}?api_key=${API_KEY}&invest_key=${INVEST_KEY}&lang=${LANG}`}
          allow="camera;microphone;clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className="w-full"
        >
          {" "}
        </iframe>
      </div>

      {/* Featured Properties */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Handpicked properties that you might love
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                  />
                  <div className="absolute top-0 right-0 m-4 px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    {/* Map Pin icon */}
                    <svg
                      className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>{property.address}</p>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="flex items-center">
                      <span className="text-gray-900 font-medium">
                        {property.beds}
                      </span>
                      <span className="ml-1 text-gray-500">Beds</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-900 font-medium">
                        {property.baths}
                      </span>
                      <span className="ml-1 text-gray-500">Baths</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-900 font-medium">
                        {property.sqft}
                      </span>
                      <span className="ml-1 text-gray-500">Sq.ft</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* code */}

          <div className="bg-gray-100 rounded-md text-black p-4 mt-10">
            <pre className="text-sm">
              <code>{`            <iframe
            id="st_invest_widget"
            src="XXXXXXXXXXXXXXXXX?api_key=XXXXXXXXXXXXXXXXXXXXX&invest_key=XXXXXXXXXXXXXXXXXXXXXXXX&lang=de"
            allow="camera; microphone;clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          >
          </iframe>    `}</code>
            </pre>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
              View All Properties
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              We provide comprehensive real estate services to meet all your
              needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-md bg-blue-600 flex items-center justify-center">
                {/* Home icon */}
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Buying</h3>
              <p className="mt-2 text-base text-gray-500">
                Find your dream home with our expert guidance. We'll help you
                navigate the buying process from start to finish.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-md bg-blue-600 flex items-center justify-center">
                {/* Building icon */}
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="6" x2="12" y2="6"></line>
                  <line x1="12" y1="10" x2="12" y2="10"></line>
                  <line x1="12" y1="14" x2="12" y2="14"></line>
                  <line x1="12" y1="18" x2="12" y2="18"></line>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Selling
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Get the best value for your property. Our marketing strategies
                and network ensure maximum exposure to potential buyers.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-md bg-blue-600 flex items-center justify-center">
                {/* Map Pin icon */}
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Property Management
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Let us handle the day-to-day operations of your investment
                properties, from tenant screening to maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Don't just take our word for it — hear from our satisfied clients
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow"
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-600 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your dream home?</span>
            <span className="block text-blue-200">
              Get in touch with our experts today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Us
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Browse Properties
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center">
                {/* Home icon */}
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="ml-2 text-xl font-bold text-white">
                  DreamHome
                </span>
              </div>
              <p className="mt-4 text-base text-gray-300">
                Making your real estate dreams come true since 2005. Trusted by
                thousands of satisfied clients.
              </p>
              <div className="mt-6 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; 2023 DreamHome Realty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// USER#2334c842-8081-7027-3c8d-b693593a2541
