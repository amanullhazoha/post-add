const Like = ({ like, id, handleLike }) => {
    const className = like ? "bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up";

    return (
        <button onClick={() => handleLike(id)}>
            <i className={`bi ${className}`} />
        </button>
    );
};

export default Like;