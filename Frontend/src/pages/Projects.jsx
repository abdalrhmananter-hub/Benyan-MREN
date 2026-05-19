import { Outlet } from "react-router-dom";


function Projects({ setDraft }) {

    return (
        <section className="py-4">
            <Outlet context={setDraft} />
        </section>
    )
}

export default Projects;