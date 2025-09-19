
import { signIn, signOut, auth } from "@/auth"

export default async function SignIn() {
    const session = await auth(); // サーバーコンポーネントでは、auth()でセッションを取得できる
    if (session) {
        return (
            <>
                <p>Signed in as {session.user?.name}</p>
                <form
                    action={async () => {
                        "use server"
                        await signOut()
                    }}
                >
                    <button type="submit">Sign out</button>
                </form>
            </>
        )
    }
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
                // await signIn("github", { redirectTo: "/dashboard" }) // redirectToオプションでサインイン後のリダイレクト先を指定できる
            }}
        >
            <button type="submit">Signin with GitHub</button>
        </form>
    )
}