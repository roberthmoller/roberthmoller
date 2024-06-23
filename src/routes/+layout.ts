export const prerender = true;
import profile from "$lib/users.roberthmoller.json";
import readme from "$lib/users.roberthmoller.readme.json";
import repositories from "$lib/users.roberthmoller.repos.json";

import {Octokit} from "octokit";

const headers = {
    'X-GitHub-Api-Version': '2022-11-28'
};

export async function load({params}) {
    let content = `
# Hi 👋 My name is Robert

### Full Stack Software Engineer / Digital Forensic Analyst

* 🌍 based in Europe
* 🧠 learning how to build DAPPs
* 📚 studying Digital Security
* 👨‍💻 interested in real-estate and stocks
    `;
    return {profile, readme: {content: content}, repositories};
}

// export async function load({params}) {
//     const octokit = new Octokit();
//     const username = 'roberthmoller';
//
//     return {
//         user: await octokit.request('GET /users/{username}', {
//             username: username,
//             headers: headers
//         }),
//         readme: await octokit.request('GET /repos/{username}/{repo}/contents/{path}', {
//             path: 'README.md',
//             repo: username,
//             username,
//             headers
//         }),
//         repositories: await octokit.request('GET /users/{username}/repos', {
//             username,
//             headers
//         }),
//     };
// }