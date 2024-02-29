import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
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

export const gitHubInfo = async () => {
    const res = await fetch("https://api.github.com/users/padakitanmay");
    return res.json();
};
