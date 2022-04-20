import Sidebar from '../../components/Sidebar/Sidebar'
import './List.scss'

export default function List({table}) {
    return(

        <section className="list">
            <Sidebar />
            <article className='list__container'>
                {table}
            </article>
        </section>

    )
}