import './Toolbar.css'
import { Link } from 'react-router-dom';

function Toolbar() {
    // const tabs = ['INICIO', 'PROYECTOS', 'SOBRE MÍ', 'BLOG']
    return (
        <div className="toolbar">
            <div className="logo">Juanma Perez</div>
            <Link to='/' className="tab">INICIO</Link>
            <Link to='/projects' className="tab">PROYECTOS</Link>
            <Link to='/about' className="tab">SOBRE MI</Link>
            <Link to='/blog' className="tab">BLOG</Link>
            {/* {tabs.map((tab) => <Link to='/' className="tab" key={tab}>{tab}</Link>)} */}

        </div>
    );
}

export default Toolbar;