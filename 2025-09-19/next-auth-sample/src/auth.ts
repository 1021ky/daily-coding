import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

// specific initialization function and then export the route handler(s), signin and signout methods, and more
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
    callbacks: {
        authorized: async ({ auth }) => {
            // 今回はauthオブジェクトが存在すればログインしているとみなす。
            // 独自ロジックを追加することも可能。
            return !!auth
        },
    },
})