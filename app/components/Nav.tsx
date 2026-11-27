import Link from "next/link";

//Different nav bars for when the user is signed in and for when they are not signed in
//When the user is not signed in then the page will display --> Main Feed/Home, Login
//When the user is signed in then the page will display --> Main Feed/Home, Profile
//Home --> main feed where user can search posts and see feed of posts

export default function Nav(){
    const userLoggedIn = false;

    return(
        <nav>
            <ul>
                {!userLoggedIn ? (
                    <>
                        <li><Link href = "/">Home</Link></li>
                        <li><Link href = "/Login">Login</Link></li>
                    </>

                ) : (
                        <>
                            <li><Link href = "/">Home</Link></li>
                            <li><Link href = "/Profile">Profile</Link></li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}