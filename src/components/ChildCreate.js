import { useState } from "react";
import ChildCreateForm from "../ui-components/ChildCreateForm";
import UseKidsContext from "../hooks/use-kids-context";

function ChildCreate() {
    const [showForm, setShowForm] = useState(false);
    const { fetchKids } = UseKidsContext();

    const handleNewChildClick = () => {
        setShowForm(true);
    };

    const handleOnSuccess = () => {
        setShowForm(false);
        fetchKids();
    };

    const handleOnCancel = () => {
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={handleNewChildClick}>New Child</button>
            {showForm && <ChildCreateForm onSuccess={handleOnSuccess} onCancel={handleOnCancel} width='40%' /> }
        </div>
    )
};

export default ChildCreate;