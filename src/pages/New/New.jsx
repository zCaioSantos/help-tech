import Form from '../../components/Form/Form'
import Sidebar from '../../components/Sidebar/Sidebar'
import './New.scss'

export default function New({title, type}) {

    let inputs;
    switch (type) {
        case 'users':
            inputs = [
                {
                    name: "nome",
                    label: "Nome",
                    type: "text",
                    placeholder: "Digite seu nome",
                }
            ]
            break;
        case 'products':
            inputs=[{
                name: "nome",
                label: "Nome",
                type: "text",
                placeholder: "Digite seu nome"
            }]
            break;
        default:
            break;
    }

    return(
        <section className="new">
            <Sidebar />
            <article className='new__container'>
                <Form title={title} inputs={inputs}/>
            </article>
        </section>

    )
}