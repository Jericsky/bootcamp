# 240902 - B460: Academic Reading List

### **Topics**
- React.js - Introduction
Link: https://react.dev/learn
Link: https://www.w3schools.com/react/default.asp

### **Purpose**
- Get to know React.js.

### **Activity 1**
1. For this activity, let us have an introductory activity for your upcoming session - React.js.
2. Create a new React application using Create React App:    
3. In your terminal input:
    - npx create-react-app ecommerce-frontend 
4. Navigate into your project directory:
	- cd ecommerce-frontend

### **Activity 2**
1. Before diving into coding, it's important to sketch out the layout and design of your homepage. 
2. Consider elements like a product carousel, featured products, categories, and a footer with links to important pages.
3. Create appropriate folder structures to follow the separation of concerns.
4. Follow proper naming convention.
5. Input and Install proper dependencies (ex. Bootstrap) and modules.
	- npm install bootstrap

### **Activity 3**
1. Define the components you created in the previous step. For simplicity, I'll provide a basic structure for each component:
2. For Header page:

	- import React from 'react';

	const Header = () => {
	  return (
	    <header>
	      <h1>Our E-commerce Store</h1>
	      {/* Add navigation links if needed */}
	    </header>
	  );
	};

	export default Header;

### **Activity 4**
1. For featured products:

	- import React from 'react';

	const FeaturedProducts = () => {
	  return (
	    <div className="featured-products">
	      {/* Implement a section to display featured products */}
	    </div>
	  );
	};

	export default FeaturedProducts;

### **Activity 5**
1. For Product Carousel:

	- import React from 'react';

	const ProductCarousel = () => {
	  return (
	    <div className="product-carousel">
	      {/* Implement a carousel component here */}
	    </div>
	  );
	};

	export default ProductCarousel;


### **Activity 6**
1. For Footer:

	- import React from 'react';

	const Footer = () => {
	  return (
	    <footer>
	      <p>&copy; 2024 Our E-commerce Store</p>
	      {/* Add additional links or information */}
	    </footer>
	  );
	};

	export default Footer;


### **Activity 7**
1. Then add your components in you app.js file.

	- import React from 'react';
	import Header from './components/Header';
	import Footer from './components/Footer';
	import ProductCarousel from './components/ProductCarousel';
	import FeaturedProducts from './components/FeaturedProducts';
	

	function App() {
	  return (
	    <div className="App">
	      <Header />
	      <main>
	        <ProductCarousel />
	        <FeaturedProducts />
	      </main>
	      <Footer />
	    </div>
	  );
	}

	export default App;
	
2. Run your application.
	- npm start
3. Screenshot your application and save it in your file.



