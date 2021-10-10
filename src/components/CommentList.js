import Comment from './Comment.js';

export default function CommentList(props) {

    return (
        <div>
            {
                props.comments.map((comment, idx)=>{
                    return (
                        <div key={idx}><Comment comment={comment} /></div>
                    );
                })
            }
        </div>
    );
}