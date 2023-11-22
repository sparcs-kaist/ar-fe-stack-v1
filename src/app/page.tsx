"use client"
import ExampleComponent from "@/common/components/ExampleComponent"
import { UseClientProvider } from "@/common/providers/UseClientProvider"

export default function Home() {
  return (
    <main>
      <UseClientProvider>
        <ExampleComponent>test</ExampleComponent>
      </UseClientProvider>
    </main>
  )
}
