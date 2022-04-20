import Form from '../../components/Form/Form'
import Sidebar from '../../components/Sidebar/Sidebar'
import './New.scss'

export default function New({title, type}) {
    return(
        <section className="new">
            <Sidebar />
            <article className='new__container'>
                <Form title={title}/>
            </article>
        </section>

    )
}