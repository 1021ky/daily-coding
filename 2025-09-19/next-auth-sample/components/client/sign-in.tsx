
"use client"

import { signIn, useSession } from "next-auth/react"

export default function SignIn() {
    const { data: session } = useSession(); // clientではuseSession経由でセッション情報を取得
    if (session) {
        return <p>Signed in as {session.user?.name}</p>
    }
    return <button onClick={() => signIn("github")}></button>
}
