import React, { useState,useEffect } from 'react';

export default function CommentInput(props) {

    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    // 发布按钮将调用父组件传过来的onSubmit方法处理输入框的内容
    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit({
                username: username,
                content: content,
            });
        }
    };

    let textareaRef;
    useEffect(()=>{
        textareaRef.focus();
    });

    return (
        <div className='comment-input'>
            {/* 用户名及其输入框 */}
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'><input value={username} onChange={handleUsernameChange} /></div>
            </div>

            {/* 评论内容及其输入框 */}
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'><textarea value={content} onChange={handleContentChange} ref={(textareaDOM)=>{textareaRef=textareaDOM}} /></div>
            </div>

            {/* 发布按钮 */}
            <div className='comment-field-button'>
                <button onClick={handleSubmit}>发布</button>
            </div>
        </div>
    );
}