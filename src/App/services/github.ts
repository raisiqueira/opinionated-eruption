import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { GitHubRepoResponse } from '@/App/types/github'

/**
 * Get the github user data.
 * @param username the username of the github user.
 * @returns the github user data.
 */
const getGithubUser = async (username: string) => {
  const response = await axios.get<GitHubRepoResponse[]>(
    `https://api.github.com/users/${username}/repos`,
  )
  return response.data
}

const useGithubUser = (username: string) => {
  return useQuery(['githubUser', username], () => getGithubUser(username))
}

export { useGithubUser, getGithubUser }
