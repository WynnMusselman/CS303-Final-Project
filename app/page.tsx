import PostPreview from "@/app/components/PostPreview";

export default function Home(){
    return (
        <>
            <PostPreview post={{
                id: 12345,
                username: "testuser",
                title: "first post",
                content: "content of post",
                tags: ["Switch", "Playstation", "XBox"],
                likes: 10,
                dislikes: 5,
            }}
            />
        </>
    );
}