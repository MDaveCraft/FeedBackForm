import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { levels } from "@/data"

export function Radio() {
  return (
    <RadioGroup defaultValue={levels[0].level}>
      {
        levels.map((level,index) => (
          <div className="flex items-center space-x-2" key={level.level}>
            <RadioGroupItem value={level.value.toString()} className={"r"+index} />
            <Label htmlFor={level.level}>{level.level}</Label>
          </div>
        ))
      }
    </RadioGroup>
  )
}
