import { useState } from "react";
import NewChild from "./NewChild";

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
            <button onClick={handleNewChildClick}>New Child</button>
            {showForm && <NewChild onSuccess={handleOnSuccess} onCancel={handleOnCancel} width='40%' /> }
        </div>
    )
};

export default ChildCreate;