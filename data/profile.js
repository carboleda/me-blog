import fetch from 'isomorphic-unfetch';

export async function getProfile() {
    const API = `${process.env.API}/me`;
    const profile = await fetch(API)
        .then(res => res.json());
    return profile;
};