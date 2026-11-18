import { PostProps } from "../types/PostProps";

export default function PostPreview({ post }: { post: PostProps }) {
    return (
        <>
            <h3>{post.title}</h3>
            <p>{post.username}</p>
            <p>{post.content}</p>
            <p>{post.likes}</p>
            <p>{post.dislikes}</p>
            {
                post.tags.map((tag: string) => (
                    <span key = {tag}>{tag} </span>
                ))
            }
        </>
    )
}