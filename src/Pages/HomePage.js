import Header from "../components/Header";
import '../index.css';
import Special from "../components/Special";
import Testimonial from '../components/Testimonial';
import About from "../components/About";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Special />
            <Testimonial />
            <About />
        </div>
    )
}

export default HomePage;