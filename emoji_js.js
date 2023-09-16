function fetchAllEmojis() {
    const apiUrl = "https://emojihub.yurace.pro/api/all";
    return fetch(apiUrl)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Failed to fetch emojis");
            }
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error);
        });
}

function displayEmojis(emojis) {
    const emojiDisplay = document.getElementById("emoji-display");
    emojiDisplay.innerHTML = "";

    var searchTerm = document.getElementById("demo").value.trim().toLowerCase();

    emojis.forEach((emoji) => {
        if (emoji.name.toLowerCase().startsWith(searchTerm) || emoji.category.toLowerCase().startsWith(searchTerm)) {
            const card = `
                <div class="col-md-3 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <p class="card-text" style="font-size:100px;">${emoji.htmlCode[0]}</p>
                            <h5 class="card-title">${emoji.name}</h5>
                        </div>
                    </div>
                </div>
            `;
            emojiDisplay.innerHTML += card;
        }
    });

    if (emojiDisplay.innerHTML === "") {
        emojiDisplay.innerHTML = "<p class='text-center'>No matching emojis found</p>";
    }
}



document.getElementById("fetch-emojis").addEventListener("click", () => {
fetchAllEmojis()
    .then((emojis) => {
        displayEmojis(emojis);
    });
});