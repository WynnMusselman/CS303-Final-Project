import {PostProps} from "@/app/types/PostProps";

export type ProfileProps = {
    username: string;
    password: string;
    picture: string; //url of profile picture
    posts: PostProps[];
    tags: string[];
};