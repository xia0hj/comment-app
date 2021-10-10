export default function Comment(props){
    return (
        <div className='comment'>
            {/* 评论的用户名 */}
            <div className='comment-username'>
                <span>{props.comment.username} </span>：
            </div>

            {/* 评论的内容 */}
            <p>{props.comment.content}</p>
        </div>
    );
}