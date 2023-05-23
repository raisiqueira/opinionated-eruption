import { Anchor, Flex } from '@mantine/core'

import { useGithubUser } from '@/App/services/github'

export default function Repositories() {
  const { data, isLoading, error } = useGithubUser('eruptionjs')
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error to return the Repositories</div>
  return (
    <div>
      <h1>Repositories</h1>
      <Flex direction="column">
        {data?.map((repo) => (
          <Anchor key={repo.id} href={repo.html_url} target="_blank">
            {repo.full_name}
          </Anchor>
        ))}
      </Flex>
    </div>
  )
}
