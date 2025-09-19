// export { auth as middleware } from "@/auth" // セッションを自動更新する場合はこれだけでOK
import { auth } from "@/auth"
export default auth((req) => {
    // ログインしていなかったら常にログインページにリダイレクトする
    if (!req.auth && req.nextUrl.pathname !== "/api/auth/signin") {
        const newUrl = new URL("/api/auth/signin", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

// middlewareの適用範囲を指定
// api/authを除外しないとsigninでリダイレクトするページにいけなくなる
// _nextやstaticも除外しないと静的ファイルが取得できなくなる
// favicon.icoも除外しないとfaviconが取得できなくなる
export const config = {
    matcher: ['/((?!api/auth|_next|static|favicon.ico).*)'],
}