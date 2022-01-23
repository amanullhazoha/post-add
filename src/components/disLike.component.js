const DisLike = ({ disLike, id, handleDisLike }) => {
    const className = disLike ? "bi-hand-thumbs-down-fill" : "bi-hand-thumbs-down";

    return (
        <button onClick={() => handleDisLike(id)}>
            <i className={`bi ${className}`} />
        </button>
    );
};

export default DisLike;