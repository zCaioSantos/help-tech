import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss'

export default function Layout({ children }) {
    return (

        <main className="layout">
            <Sidebar />
            <article className="layout__container">
                {children}
            </article>
        </main>

    );
}