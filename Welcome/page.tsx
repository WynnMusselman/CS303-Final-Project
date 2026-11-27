//Welcome page that the user sees when they pull up the application

import Link from "next/link";

export default function WelcomePage() {
    return(
        <>
            <h1>Welcome to Game Finder!</h1>
            <h3>A space for all your favorite games!</h3>
            <h4>Post</h4>
            <h4>Share</h4>
            <h4>Connect</h4>

            <Link href="/Home">Click Here To See What Games People Are Playing!</Link>
        </>
    )
}