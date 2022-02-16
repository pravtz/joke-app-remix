import invariant from "tiny-invariant";
const URLBASE_API_GITHUB = 'https://api.github.com'

const githubApiService = async (username: string) => {
    invariant(username, "ERROR: provide username as a string")
    invariant(process.env.GITHUB_TOKEN, 'Environment GITHUB_TOKEN null')
    const data = await fetch(`${URLBASE_API_GITHUB}/${username}`, {
        headers: {
            "Authorization": process.env.GITHUB_TOKEN,
            "accept": "application/vnd.github.v3+json"
        }
    })
    return data.json()
}
export default githubApiService