import './App.css';
import { Routes, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/homePage/home.page.component';
import Footer from '../src/components/footerSection/footer.component';
import AboutPage from './pages/aboutPage/aboutPage.component';
import ServicesPage from './pages/servicesPage/servicesPage.component';
import BlogsPage from './pages/blogsPage/blogs.page';
import BlogPage from './pages/blogPage/blog.page';
import PortfolioPage from './pages/portfolioPage/portfolio.page';
import ContactPage from './pages/contactPage/contact.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <HomePage/> } />
        <Route exact path='/about' element={ <AboutPage/> } />
        <Route exact path='/services' element={ <ServicesPage/> } />
        <Route exact path='/blogs' element={ <BlogsPage/> } />
        <Route exact path='/blogs/:id' element={ <BlogPage /> } />
        <Route exact path='/portfolio' element={ <PortfolioPage /> } />
        <Route exact path='/contact' element={ <ContactPage /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;