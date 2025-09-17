import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
/**
 * App Routerでの認証設定
 *
 * 全てのAPIルートで認証情報を利用できるようにする
 * 参考: https://next-auth.js.org/configuration/initialization#route-handlers-app
 */
export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        })
    ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

