import { cn } from "@/lib/utils"
import { Combobox } from "./ComboBox"
import {frameworks} from "@/data/index"
export const SidebarNav = ({classNames}: {classNames?: string}) => {
  return (
    <nav className={
      cn("flex flex-col lg:flex-col lg:space-x-0 lg:space-y-1 ml-4",classNames)}>
        <Combobox items={frameworks} defaultValue="Select Framework from the list"/>
        <Combobox items={frameworks} defaultValue="Select Framework from the list"/>
    </nav>
  )
}
