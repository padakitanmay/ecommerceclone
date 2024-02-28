import React, { useState, useEffect } from "react";

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/padakitanmay")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
            {data ? (
                <>
                    <p>Github Followers: {data.followers}</p>
                    <img src={data.avatar_url} alt="Avatar" />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Github;
