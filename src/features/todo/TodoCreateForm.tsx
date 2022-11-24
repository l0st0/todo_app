import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCreateTodo } from '@/api'
import {
  Button,
  DatePicker,
  FormControl,
  FormErrorMessage,
  FormLabel,
  TextArea,
  TextInput,
} from '@/components'
import { useRouterQuery } from '@/hooks'
import { tDynamicString } from '@/utils'
import ErrorMessage from '../common/ErrorMessage'

const scheme = z.object({
  title: z.string().min(1, { message: 'errors.isRequired' }),
  description: z.string().optional(),
  deadline: z.date().optional(),
})

type Form = z.infer<typeof scheme>

const TodoCreateForm = () => {
  const { t } = useTranslation()

  const listId = useRouterQuery('id')

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: { title: '', description: '' },
    resolver: zodResolver(scheme),
  })

  const { mutate, isLoading, isError } = useCreateTodo(listId)

  const onSubmit = (values: Form) =>
    mutate(values, { onSuccess: () => reset() })

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="items-top flex w-full flex-col"
      >
        <div className="flex gap-2">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <FormControl>
                <FormLabel htmlFor={field.name} required>
                  {t('labels.title')}
                </FormLabel>
                <TextInput {...field} id={field.name} error={!!errors?.title} />
                <FormErrorMessage display={!!errors?.title}>
                  {t(tDynamicString(errors?.title?.message), {
                    label: t('labels.title'),
                  })}
                </FormErrorMessage>
              </FormControl>
            )}
          />
          <Controller
            name="deadline"
            control={control}
            render={({ field }) => (
              <FormControl>
                <FormLabel htmlFor={field.name}>
                  {t('labels.deadline')}
                </FormLabel>
                <DatePicker
                  onChange={field.onChange}
                  selected={field.value}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </FormControl>
            )}
          />
        </div>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <FormControl className="mb-3">
              <FormLabel htmlFor={field.name}>
                {t('labels.description')}
              </FormLabel>
              <TextArea
                {...field}
                id={field.name}
                error={!!errors?.description}
              />
            </FormControl>
          )}
        />

        <ErrorMessage display={isError} />

        <Button className="btn-primary" type="submit" isLoading={isLoading}>
          {t('todo.create_button')}
        </Button>
      </form>
    </>
  )
}

export default TodoCreateForm
