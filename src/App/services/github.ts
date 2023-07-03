import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { GitHubRepoResponse } from '@/App/types/github'
import { queryClient } from '@/App/utils/queryUtils'

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
  return useQuery(['githubUser', username], {
    queryFn: () => getGithubUser(username),
    refetchOnWindowFocus: false,
  })
}

// Example with RR loader

const gitHubUserLoader = (username: string) => {
  return queryClient.fetchQuery(['githubUser', username], {
    queryFn: () => getGithubUser(username),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours, this is optional.
  })
}

export { useGithubUser, getGithubUser, gitHubUserLoader }
