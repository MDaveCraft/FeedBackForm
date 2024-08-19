import { Question } from "./QuestionCard";
import { SidebarNav } from "./SidebarNav";

export function Form() {
  return (
    <form className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <SidebarNav/>
      </aside>
      <aside className="-mx-4 lg:w-1/5">
        <Question question="How was the faculty's teaching?" />
      </aside>
    </form>
  )
}
