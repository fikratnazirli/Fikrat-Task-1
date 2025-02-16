import { Tabs, HStack } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
}
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
      <AccordionRoot collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
    </HStack>
  )
}
export default App
