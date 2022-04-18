// import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'
import './home.scss'

export default function Home() {
    return(

        <section className="home">
            <Sidebar />
            <article className='home__container'>
                {/* <Navbar/> */}
                <Table />
            </article>
        </section>

    )
}