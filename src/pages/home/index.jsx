// import Navbar from '../../components/Navbar/Navbar'
import Loading from '../../components/Loading/Loading'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.scss'

export default function Home() {
    return(

        <section className="home">
            <Sidebar />
            <article className='home__container'>
                <Loading />
            </article>
        </section>

    )
}