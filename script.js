const fact = $("#fact");

const fetchFact = async () => {
    try {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/random/"
        );
        const jsonResp = await response.json();

        return jsonResp.value;
    } catch (error) {
        console.log(error);
    }
    return;
};

const getFact = () => {
    fetchFact().then((str) => {
        fact.text(str);
    });
};

getFact();

$(".btn").click(() => {
    fact.empty();
    getFact();
});
