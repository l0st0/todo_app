import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCreateList } from '@/api'
import { Button, ErrorMessage, TextInput } from '@/components'
import { tDynamicString } from '@/utils'

const scheme = z.object({
  name: z.string().min(1, { message: 'errors.isRequired' }),
})

type Form = z.infer<typeof scheme>

const ListCreateForm = () => {
  const { t } = useTranslation()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: { name: '' },
    resolver: zodResolver(scheme),
  })

  const { mutate, isLoading, isError } = useCreateList()

  const onSubmit = (values: Form) =>
    mutate(values, { onSuccess: () => reset() })

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="items-top flex w-full flex-col gap-2 sm:flex-row"
      >
        <div className="form-control w-full">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput {...field} error={!!errors?.name} />
            )}
          />

          {errors?.name?.message && (
            <ErrorMessage>
              {t(tDynamicString(errors.name.message), {
                label: t('labels.name'),
              })}
            </ErrorMessage>
          )}
        </div>

        <Button type="submit" isLoading={isLoading}>
          {t('new_list.button')}
        </Button>
      </form>

      {isError && <ErrorMessage>{t('errors.isError')}</ErrorMessage>}
    </>
  )
}

export default ListCreateForm
