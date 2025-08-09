let userInfo = null;
/**
 * 指定されたユーザーIDに基づいてGitHubユーザー情報を取得する
 * @param {*} userId
 */
function fetchUserInfo(userId) {
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
            // エラーレスポンスが返されたことを検知する
            if (!response.ok) {
                console.error("エラーレスポンス", response);
            } else {
                return response.json().then(data => {
                    userInfo = {
                        name: data.name,
                        login: data.login,
                        avatar_url: data.avatar_url,
                        location: data.location,
                        public_repos: data.public_repos
                    };
                    displayUserInfo();

                });
            }
        }).catch(error => {
            console.error(error);
        });
}

/**
 * エスケープ文字列を生成する
 *
 * XSS防止に使用する。
 *
 * @param {*} str
 * @returns エスケープされた文字列
 */
function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * 指定された文字列と値をHTMLエスケープして結合する
 *
 * タグ付きテンプレート関数として使用する。
 *
 * @param {*} strings ${}で区切られた文字列の配列
 * @param  {...any} values ${}の評価値の配列
 * @returns HTMLエスケープされた文字列
 */
function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i - 1]; // タグ付きテンプレートでは、必ず区切られた文字列の数は評価値の数より1つ多いため、i-1で取得する
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str;
        }
    });
}

/**
 * ユーザー情報を表示する
 */
function displayUserInfo() {
    const view = escapeHTML`
            <h4>${userInfo.name} (@${userInfo.login})</h4>
            <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
            <dl>
                <dt>Location</dt>
                <dd>${userInfo.location}</dd>
                <dt>Repositories</dt>
                <dd>${userInfo.public_repos}</dd>
            </dl>
        `;

    const result = document.getElementById("result");
    result.innerHTML = view;
}
