
import './App.css'
import {Hero,CustomerReviews,Footer,PopularProducts,Services,Specialoffer,Subscribe,SuperQuality} from "./sections/index"
import Nav from "./components/Nav"
function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
        </section>
      <section className='padding-x padding-y-10'>
        <Services/>
      </section>
      <section className='padding'>
        <Specialoffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black text-white padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
