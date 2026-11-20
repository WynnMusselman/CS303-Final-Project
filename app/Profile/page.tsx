import {ProfileProps} from "@/app/types/ProfileProps";
import {PostProps} from "@/app/types/PostProps";

export default function Page({ user }: { user: ProfileProps }){
    return(
        <main>
            <img src = {user.picture} alt = "`${user.username}`'s profile picture"/>
            <h2>{user.username}</h2>
            <div>
                {
                    user.tags.map((tag: string) => (
                        <span key = {tag}>{tag} </span>
                    ))
                }
            </div>

            <div>
                {
                    user.posts.map((post: PostProps) => (
                        <div key = {post.id}></div>
                    ))
                }
            </div>
        </main>
    )
}