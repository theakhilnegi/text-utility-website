import { Link } from "react-router-dom";
export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <Link className="navbar-brand" to="/">
                Text Utils
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item active'>
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                </ul>

                <div className="d-flex">
                    <div className="bg-warning rounded mx-2 border border-light" cursor='pointer' onClick={() => (props.toggleMode('warning'))} style={{ height: '30px', width: '30px' }}></div>
                    <div className="bg-secondary rounded mx-2 border border-light" cursor='pointer' onClick={() => (props.toggleMode('secondary'))} style={{ height: '30px', width: '30px' }}></div>
                    <div className="bg-info rounded mx-2 border border-light" cursor='pointer' onClick={() => (props.toggleMode('info'))} style={{ height: '30px', width: '30px' }}></div>
                    <div className="bg-light rounded mx-2 border border-dark" cursor='pointer' onClick={() => (props.toggleMode('light'))} style={{ height: '30px', width: '30px' }}></div>
                    <div className="bg-dark rounded mx-2 border border-light" cursor='pointer' onClick={() => (props.toggleMode('dark'))} style={{ height: '30px', width: '30px' }}></div>
                </div>

                {/* toggle for dark and light mode only */}
                {/* <form className="form-inline my-2 my-lg-0">
                    <div className="form-check form-switch">
                        <label className="switch">
                            <input type="checkbox" onClick={() => (props.toggleMode(null))} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className={`my-2 my-sm-0 text-${props.mode === 'light' ? 'dark' : 'light'} toggle-lable`}>
                        {props.mode === 'light' ? 'DarkMode' : 'LightMode'}
                    </div>
                </form> */}


            </div>
        </nav>
    );
}