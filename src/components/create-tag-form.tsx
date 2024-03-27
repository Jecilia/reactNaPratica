import { Check, X } from 'lucide-react'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import * as Dialog from '@radix-ui/react-dialog'

const createTagSchema = z.object({
  name: z.string().min(3, { message: 'Minimun 3 characters.' }),
  slug: z.string(),
})

type CreateTagSchema = z.infer<typeof createTagSchema>
export function CreateTagForm() {
  const { register, handleSubmit, watch } = useForm<CreateTagSchema>({
    resolver: zodResolver(createTagSchema),
  })
  function createTag(data: CreateTagSchema) {
    console.log(data)
  }
  const slug = watch('name')

  return (
    <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium block">
          Tag name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="slug" className="text-sm font-medium block">
          Slug
        </label>
        <input
          {...register('slug')}
          id="slug"
          type="text"
          readOnly
          value={slug}
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <Dialog.Close asChild>
          <Button>
            <X className="size-3" />
            Cancel
          </Button>
        </Dialog.Close>

        <Button type="submit" className="bg-teal-400 text-teal-900">
          <Check className="size-3" />
          Save
        </Button>
      </div>
    </form>
  )
}
