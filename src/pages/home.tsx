import Navegationbar from '../components/NavBar';
import HiringSection from '../components/HiringSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="main-container-home">
            
            {/* Navigation bar */}
            <Navegationbar/>
    
            {/* Hiring Section */}
            <HiringSection/>
    
            {/* Footer */}
            <Footer/>
       </div>
    );
  }