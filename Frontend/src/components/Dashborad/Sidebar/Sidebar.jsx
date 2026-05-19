import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
const links=[
    {icon:"fa-chart-bar" , title:"status", path:"/"},
    {icon:"fa-users", title:"Users Mangment",path:"/users"},
    {icon:"fa-building",title:"Project Mangement",path:"/projects"},
    {icon:"fa-building",title:"Devloper Mangement",path: "/developers"},
    {icon:"fa-users",title:"Cms"},
    {icon:"fa-message",title:"Live Chat"},
    
]
function Sidebar({ draft }) {
    return (

        <aside className={`${styles.sidebar} min-vh-100 py-4 `}>
            <div className='fw-semibold px-4 mb-4 fs-4'>DashBoard</div>
            <nav className=''>
                {links.map((item,index)=>(
                   <NavLink 
                    to={item.path}
                   className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4 `} key={index}>
                        <i className={`fa-solid ${item.icon} fs-5`}></i>
                        <span className='fs-5'> {item.title}</span>
                        {item.path === "/users" && draft && <span className={` ${styles.draft} d-flex align-items-center justify-content-center bold bg-warning `}>Draft</span> }
                   </NavLink> 
                ))}
            </nav>
        </aside>

    );
}

export default Sidebar;