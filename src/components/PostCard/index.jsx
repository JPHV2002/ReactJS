import './styles.css';

export const PostCard = ({title, cover, id, body}) => {
    return(
        <div className = "post-card">
            <img src={cover} alt={title} className="post-img"/>
            <div className="post-content">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}