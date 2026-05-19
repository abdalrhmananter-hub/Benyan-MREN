import { Outlet } from "react-router-dom";
import FormDashboard from "../components/UI/CardStatus/FormDashboard/FormDashboard";
import TableDashboard from "../components/UI/TableDashboard/TableDashboard";

function Users({setDraft}) {

    return (
        <>
            <section className="py-4">
                <Outlet context={{setDraft}}/>
            </section>
        </>
    )
}

export default Users;