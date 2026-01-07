"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    // ログイン状態によってサインイン・サインアウトのボタンを表示
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    // 複数のプロバイダーに対応する場合は、signIn()の引数にプロバイダーIDを指定し、コンポーネントもhttps://github.com/nextauthjs/next-auth-example/blob/main/components/auth-components.tsxのように定義しておくと良さそう
    return (
        <>
            まだログインしていないよ <br />

            <button
                onClick={async () => {
                    await signIn('github', { redirect: true }) // プロバイダーを指定
                }}
            >
                Sign in
            </button>
        </>
    )
}