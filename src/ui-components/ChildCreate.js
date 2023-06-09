import { useState } from "react";
import ChildCreateForm from "./ChildCreateForm";

function ChildCreate() {
    const [showForm, setShowForm] = useState(false);

    const handleNewChildClick = () => {
        setShowForm(true);
    };

    const handleOnSuccess = () => {
        setShowForm(false);
        console.debug("handleOnCancel");
    };

    const handleOnCancel = () => {
        setShowForm(false);
        console.debug("handleOnCancel");
    };

    return (
        <div>
            <button class="Button" onClick={handleNewChildClick}>New Child</button>
            {showForm && <ChildCreateForm onSuccess={handleOnSuccess} onCancel={handleOnCancel} width='40%' /> }
        </div>
    )
};

export default ChildCreate;