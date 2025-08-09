let userInfo = null;
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

function displayUserInfo() {
    const view = `
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
