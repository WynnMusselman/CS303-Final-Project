import Link from "next/link";

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link href = "/">Home</Link></li>
                <li><Link href = "/Login">Login</Link></li>
                <li><Link href = "/Profile">Page</Link></li>
            </ul>
        </nav>
    )
}