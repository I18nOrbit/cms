import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



export function QueryClientProviderWrapper({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
