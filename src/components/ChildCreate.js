import ChildCreateForm from "../ui-components/ChildCreateForm";
import UseKidsContext from "../hooks/use-kids-context";

function ChildCreate( {onClose, onSave} ) {
    const { kids, fetchKids } = UseKidsContext();

    const handleOnSuccess = () => {
        onSave();
    };

    const handleOnCancel = () => {
        onClose();
    };

    return (
        <div>            
            <ChildCreateForm onSuccess={handleOnSuccess} onCancel={handleOnCancel} width='40%' />
        </div>
    )
};

export default ChildCreate;