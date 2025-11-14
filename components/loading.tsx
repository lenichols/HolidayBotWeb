import { Spinner } from "@/components/ui/spinner"

export function Loading({ text }: { text?: string  } = { text: 'Generating...'  }) {

  return (
    <div className="mt-20 flex w-full justify-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner
          className="size-16 text-red-500"
        />
        <h3 className="text-xl font-bold italic text-red-500">{text}</h3>
        <p className="text-red-900">Please wait...</p>
      </div>
    </div>
  )
}
