import Header from '../../component/header'
import Hero from '../../component/hero'
import LocalLink_work from '../../component/How_localLink_work'
import Service from '../../component/service'
import About from '../../component/About'
import Footer from '../../component/footer'


function Home() {
    return (
      <div>
        <Hero />
        <LocalLink_work />
        <Service />
        <About/>
       
       
        
      </div>
    )
  }
  
  export default Home;