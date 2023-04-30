import "./styles/CommentsSection.css";

const CommentsSection = () => {
  return (
    <div className="comment-section-container">
      <h3 className="comment-section-title">
        Lee los comentarios de nuestros atletas
      </h3>
      <div className="comment-card">
        <h5 className="comment-author">Nacho</h5>
        <p className="comment-comment">
          Con Solid Program logré aumentar mi RM de Back Squat y Deadlift.
        </p>
      </div>
    </div>
  );
};

export default CommentsSection;
