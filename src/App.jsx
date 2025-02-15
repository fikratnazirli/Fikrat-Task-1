import { Tabs, HStack } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
const App = () => {
  return (
    <HStack>
        <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Name
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Surname
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
         Age
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="members">Fikrat</Tabs.Content>
      <Tabs.Content value="projects">Nazirli</Tabs.Content>
      <Tabs.Content value="tasks">
       11
      </Tabs.Content>
    </Tabs.Root>
    </HStack>
  )
}
export default App
