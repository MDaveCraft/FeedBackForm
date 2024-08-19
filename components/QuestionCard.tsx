import { Radio } from "./Radio"
import { Card, CardContent } from "./ui/card"

export function Question( { question }:{ question: string } ) {
  return (
    <Card className="w-[350px]">
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <p className="pt-2">{question}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Radio />
            </div>
          </div>
      </CardContent>
    </Card>
  )
}
