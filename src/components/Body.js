import { useEffect, useState } from 'react';
// import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
// import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.4362628&lng=77.7232172&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();

      // Ensure the path to restaurants data exists
      const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } 
    catch (error) {
      console.error('Error fetching restaurant data:', error);
      setListOfRestaurants([]); 
    }
  };

  // Ensure listOfRestaurants is always an array before accessing length
  return (listOfRestaurants?.length ?? 0) === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        {/* Search Input */}
        <div className="search m-4 p-4 mx-8">
          <input
            type="text"
            placeholder="Search Restaurants"
            className="searchBox border border-solid rounded-full p-2 mx-5 w-[25rem]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            // className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            className="bg-gradient-to-l from-teal-700 to-teal-400 w-[6rem] hover:text-red-600 text-white font-bold px-4 py-2 m-2 rounded-3xl"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <div className="search m-4 p-4 flex items-center mx-100">
          <button
            // className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            className="bg-gradient-to-l from-teal-700 to-teal-400 w-[16rem] hover:text-black text-white font-bold p-2 rounded-3xl"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => parseFloat(res?.info?.avgRating) > 4.3
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="flex flex-wrap mx-12 shadow-lg justify-evenly">
        {filteredRestaurant.map((restaurant) => (
          <Link
            style={{ textDecoration: 'none', color: '#000' }}
            key={restaurant?.info?.id}
            to={'/restaurants/' + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;



