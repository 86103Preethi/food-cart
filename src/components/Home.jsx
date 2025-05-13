import React, { useState, useEffect,useContext,useRef} from 'react';
import image1 from '../assets/food folder/food1.jpeg';
import image2 from '../assets/food folder/Food3.avif';
import image3 from '../assets/food folder/Food4.avif';
import image4 from '../assets/food folder/Blueberry-icecream.jpg';
import image5 from '../assets/food folder/ChocolateBar.webp';
import image6 from '../assets/food folder/chicken65.jpg';
import image7 from '../assets/food folder/frenchfries.webp';
import image8 from '../assets/food folder/mango-juice.jpg';
import image9 from '../assets/food folder/mojito.jpg';
import image10 from '../assets/food folder/pepsi.jpg';
import image11 from '../assets/food folder/biscuits.jpg';
import image12 from '../assets/food folder/brownie.avif';
import image13 from '../assets/food folder/Burger.jpg';
import image14 from '../assets/food folder/cake.jpg';
import image15 from '../assets/food folder/chapathi.avif';
import image16 from '../assets/food folder/Chicken Briyani.avif';
import image17 from '../assets/food folder/Chicken Fried Rice.jpg';
import image18 from '../assets/food folder/chips.jpg';
import image19 from '../assets/food folder/coffee.png';
import image20 from '../assets/food folder/Dosa.jpg';
import image21 from '../assets/food folder/egg masala.jpg';
import image22 from '../assets/food folder/falooda.webp';
import image23 from '../assets/food folder/gulab jamun with rabri.jpg';
import image24 from '../assets/food folder/Idli.jpg';
import image25 from '../assets/food folder/maggi.jpg';
import image26 from '../assets/food folder/Meals.avif';
import image27 from '../assets/food folder/milkshake.jpg';
import image28 from '../assets/food folder/pancake.jpg';
import image29 from '../assets/food folder/Pongal.jpeg';
import image30 from '../assets/food folder/poori.jpg';
import image31 from '../assets/food folder/popcorn.jpeg';
import image32 from '../assets/food folder/purple cake.jpg';
import image33 from '../assets/food folder/Samosa.jpg';
import image34 from '../assets/food folder/shawarma.jpg';
import image35 from '../assets/food folder/tea.jpg';
import image36 from '../assets/food folder/coffee.png';
import image37 from '../assets/food folder/wings.jpg';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cartContext } from './shoppingcart';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartAction';
import Video from './Video';




const Home = ({filter,setFilter,setSidebarVisible,isSidebarVisible,setIsVideo,isVideo}) => {

  const [foodmenu, setFoodmenu] = useState([
    { id: 1, name: 'Veg Salad', time: '2mins', img: image1, description: 'Made fresh', price: '$99.00', latest: 'No' },
    { id: 2, name: 'Strawberry Cake', time: '5mins', img: image2, description: 'Made fresh', price: '$12.00', latest: 'Yes' },
    { id: 3, name: 'Pizza', time: '10mins', img: image3, description: 'Made fresh', price: '$100.00', latest: 'No' },
    { id: 4, name: 'BlueBerry IceCream', time: '1mins', img: image4, description: 'Made fresh', price: '$90.00', latest: 'Yes' },
    { id: 5, name: 'Chocolate', time: '1mins', img: image5, description: 'Made fresh', price: '$70.00', latest: 'No' },
    { id: 6, name: 'Chicken 65', time: '15mins', img: image6, description: 'Made fresh', price: '$90.00', latest: 'Yes' },
    { id: 7, name: 'French Fries', time: '5mins', img: image7, description: 'Made fresh', price: '$80.00', latest: 'Yes' },
    { id: 8, name: 'Mosambi', time: '1mins', img: image8, description: 'Made fresh', price: '$10.00', latest: 'Yes' },
    { id: 9, name: 'Mojito', time: '3mins', img: image9, description: 'Made fresh', price: '$20.00', latest: 'Yes' },
    { id: 10, name: 'Pepsi', time: '30secs', img: image10, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 11, name: 'Biscuits', time: '30secs', img: image11, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 12, name: 'Browine', time: '30secs', img: image12, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 13, name: 'Burger', time: '30secs', img: image13, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 14, name: 'Cake', time: '30secs', img: image14, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 15, name: 'Chapathi', time: '30secs', img: image15, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 16, name: 'Chicken Briyani', time: '30secs', img: image16, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 17, name: 'Chicken Fried Rice', time: '30secs', img: image17, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 18, name: 'Chips', time: '30secs', img: image18, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 19, name: 'Coffee', time: '30secs', img: image19, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 20, name: 'Dosa', time: '30secs', img: image20, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 21, name: 'Egg Masala', time: '30secs', img: image21, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 22, name: 'Falooda', time: '30secs', img: image22, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 23, name: 'Gulab Jamun with Rabri', time: '30secs', img: image23, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 24, name: 'Idli', time: '30secs', img: image24, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 25, name: 'Maggi', time: '30secs', img: image25, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 26, name: 'Meals', time: '30secs', img: image26, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 27, name: 'MilkShake', time: '30secs', img: image27, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 28, name: 'Pancake', time: '30secs', img: image28, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 29, name: 'Pongal', time: '30secs', img: image29, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 30, name: 'Poori', time: '30secs', img: image30, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 31, name: 'Popcorn', time: '30secs', img: image31, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 32, name: 'Blueberry cake', time: '30secs', img: image32, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 33, name: 'Samosa', time: '30secs', img: image33, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 34, name: 'Shawarma', time: '30secs', img: image34, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 35, name: 'Tea', time: '30secs', img: image35, description: 'Made fresh', price: '$15.00', latest: 'No' },
    { id: 36, name: 'Coffee', time: '30secs', img: image36, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
    { id: 37, name: 'Chicken Wings Fry', time: '30secs', img: image37, description: 'Made fresh', price: '$15.00', latest: 'Yes' },
  ]);
  const [filteredMenu, setFilteredMenu] = useState(foodmenu);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [text,setText] = useState('');
  const [visibleData, setVisibleData] = useState(10); 
  const observer = useRef(null); 
  
  useEffect(() => {
    if(filter === 'all'){
      setFilteredMenu(foodmenu);
    }else if(filter === 'latest'){
      setFilteredMenu(foodmenu.filter((item) => item.latest === 'Yes'));
    }else{
      setFilteredMenu(foodmenu.filter((item) => item.latest === 'No'));
    }
  }, [filter,foodmenu]);

  useEffect(() => {
    if (observer.current) {
      const options = {
        root: null, // Observe from the viewport
        rootMargin: '20px', // Margin before the item is considered in view
        threshold: 1.0, // Trigger when the last item is fully in view
      };

      const observerInstance = new IntersectionObserver(handleLoadMore, options);
      observerInstance.observe(observer.current); // Observe the last item in the list

      return () => observerInstance.disconnect(); // Cleanup observer when the component unmounts
    }
  }, [visibleData, filteredMenu]);
  

  const foodApi = async () => {
    const url = 'https://fatsecret4.p.rapidapi.com/rest/server.api?recipe_id=91&format=json&method=recipe.get.v2'; // Replace with actual API endpoint
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '39a5097e83msh7174af1e8f8e4b8p1c95a2jsn99c374e6e0dc', // Replace with your actual API key 
        'X-RapidAPI-Host': 'fatsecret4.p.rapidapi.com' // Replace with the actual host, e.g., 'fatsecret4.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log("response",result);
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  // const addCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find(item => item.id === product.id);
      
  //     if (existingProduct) {
  //       // If product already exists, increment the quantity
  //       return prevCart.map(item =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     } else {
  //       // If it's a new product, add it with quantity 1
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  const searchData = () => {
    const filter = foodmenu.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMenu(filter);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchData();
    }
  };

  const handleSearch = (e) => {
    setText(e.target.value);
    searchData();  
    if(e.target.value === ''){
      setFilteredMenu(foodmenu);
    }
  };

  // const handleLoadMore = () => {
  //   setVisibleData((prevVisibleData) => prevVisibleData + 18);
  // };

    // Lazy load: Trigger loading of more data when the last item is visible
    const handleLoadMore = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && visibleData < filteredMenu.length) {
        setVisibleData((prevVisibleData) => prevVisibleData + 10); // Increase the number of visible items
      }
    };


  return (
    <>
      <div className={`home-container ${isSidebarVisible ? 'with-sidebar' : ''} ${isVideo ? 'with-video' : ''}`} style={{ paddingTop: '4rem' }}>
        
        {isSidebarVisible && (
        <Sidebar isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible} setFilter={setFilter} />
        )}

        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <h2 style={{ color: '#4A5568', fontSize: '1.5rem', fontWeight: '600', textDecoration: 'underline', margin: '0.5rem' }}>
            Latest Recipes
          </h2>
          <p style={{ fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', margin: '1rem' }}>
            Exclusively For customers
          </p>
        </div>

        <div className='flex justify-center gap-2 my-6'>
            <input  type='text' placeholder='Search your favorite food' className='border rounded-full p-3 w-80' value={text} onChange={handleSearch} onKeyDown={handleKeyDown}/>
            <button type='button' className='border bg-darkPink bg-white rounded-full p-2.5' onClick={searchData}>
                <SearchIcon className=''/>
            </button>
        </div>

        {filteredMenu.length === 0 ? 
        (<div className='text-black text-center font-bold m-5'>No Result Found...</div> ) : (
          <div>
          <div className="grid grid-cols-7 gap-3">
            {/* {filteredMenu.map((product)=> (                       */}
            {filteredMenu.slice(0, visibleData).map((product) => (
                <Card key={product.id} sx={{ maxWidth:400,margin:3}}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={product.img}
                    title="Food Menu"
                  />
                  <CardContent className='m-0'>
                    <Typography variant="h7" component="div" sx={{m:0,fontWeight:'bold'}}>
                    {product.name.length > 20 ? product.name.substring(0,20)+'...' : product.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', m:0}}>
                    {product.description}
                    </Typography>
                    <h1>Price: {product.price}</h1>
                  </CardContent>

                  <CardActions className=''>
                    <Button type='button' size="small" style={{color:'#f1356d',background:'antiquewhite',m:0}} onClick={() => addProductToCart(product)}>Add to cart</Button>
                  </CardActions>

                   

                </Card>
            ))}
          </div>
         
          {/* {visibleData < filteredMenu.length && (
          <div> 
            <h4 className="font-bold mt-12 p-2 border-gray-200 text-center">For More Popular Recipes</h4>
            <div className="flex justify-center mb-5">
              <div onClick={handleLoadMore} className="boxColor rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-200">
                Load More
              </div>
            </div>
          </div>
          )} */}

         
          {isVideo && (
            <Video
              images={foodmenu.map((item) => item.img)}
              title={foodmenu.map((item) => item.name)}
              isOpen={isVideo}
              toggleSidebar={() => setIsVideo(!isVideo)}
              className = 'p-3'
            />
          )}



         
         {/* Lazy Loading */}
         <div ref={observer} style={{ height: '20px', margin: '20px 0' }} />

          </div>
        )}
  
      </div>
    </>
  );
};

export default Home;
