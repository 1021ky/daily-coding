async function main() {
    try {
        const userId = getUserId();
        const userInfo = await fetchUserInfo(userId);
        const view = createView(userInfo);
        displayView(view);
    } catch (error) {
        console.error(`エラーが発生しました: ${error}`);
    }
    // Promiseチェーンを使用した場合
    // fetchUserInfo("js-primer-example")
    //     .then((userInfo) => createView(userInfo))
    //     .then((view) => displayView(view))
    //     .catch(error => {
    //         console.error(`エラーが発生しました: ${error}`);
    //     });
}

/**
 * userIdに入力された値を取得する
 * @returns 入力された値
 */
function getUserId() {
    return document.getElementById("userId").value;
}

/**
 * 指定されたユーザーIDに基づいてGitHubユーザー情報を取得する
 * @param {*} userId
 */
function fetchUserInfo(userId) {
    return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
            if (!response.ok) {
                console.log("fooo");
                return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
            } else {
                return response.json();
            }
        }).catch(error => {
            return Promise.reject(new Error(`ユーザー情報の取得に失敗しました: (id: ${userId}) info`, { cause: error }));
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
 * ビューを作成する
 * @param {*} userInfo
 * @returns 作成されたHTML文字列
 */
function createView(userInfo) {
    return escapeHTML`
                <h4>${userInfo.name} (@${userInfo.login})</h4>
                    <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
                        <dl>
                            <dt>Location</dt>
                            <dd>${userInfo.location}</dd>
                            <dt>Repositories</dt>
                            <dd>${userInfo.public_repos}</dd>
                        </dl>
                        `;
}

/**
 * ユーザー情報を表示する
 */
function displayView(view) {
    const result = document.getElementById("result");
    result.innerHTML = view;
}