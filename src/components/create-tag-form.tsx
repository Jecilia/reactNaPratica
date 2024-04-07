import { Check, Loader2, X } from 'lucide-react'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import * as Dialog from '@radix-ui/react-dialog'

const createTagSchema = z.object({
  title: z.string().min(3, { message: 'Minimun 3 characters.' }),
})

type CreateTagSchema = z.infer<typeof createTagSchema>

function getSlugFromString(input: string): string {
  if (!input) return ''
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
}
export function CreateTagForm() {
  const { register, handleSubmit, watch, formState } = useForm<CreateTagSchema>(
    {
      resolver: zodResolver(createTagSchema),
    },
  )
  const slug = watch('title') ? getSlugFromString(watch('title')) : ''

  async function createTag({ title }: CreateTagSchema) {
    // delay 2s
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log({ title, slug })
    await fetch('http://localhost:3333/tags', {
      method: 'POST',
      body: JSON.stringify({
        title,
        slug,
        amountOfVideos: 0,
      }),
    })
  }

  return (
    <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium block">
          Tag name
        </label>
        <input
          {...register('title')}
          id="title"
          type="text"
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
        />
        {formState.errors?.title && (
          <p className="text-sm text-red-400">
            {formState.errors.title.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="slug" className="text-sm font-medium block">
          Slug
        </label>
        <input
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

        <Button
          disabled={formState.isSubmitting}
          type="submit"
          className="bg-teal-400 text-teal-900"
        >
          {formState.isSubmitting ? (
            <Loader2 className="size-3 animate-spin" />
          ) : (
            <Check className="size-3" />
          )}
          Save
        </Button>
      </div>
    </form>
  )
}
