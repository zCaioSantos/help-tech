import Sidebar from '../../components/Sidebar/Sidebar'
import './Single.scss'

export default function Single({table}) {
    return(

        <section className="single">
            <Sidebar />
            <article className='single__container'>
                {table}
            </article>
        </section>

    )
}