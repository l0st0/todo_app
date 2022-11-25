import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCreateList } from '@/api'
import { Button, FormControl, FormErrorMessage, TextInput } from '@/components'
import { tDynamicString } from '@/utils'
import ErrorMessage from '../common/ErrorMessage'

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
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FormControl>
              <TextInput
                {...field}
                id={field.name}
                error={!!errors?.name}
                placeholder={t('list.input_placeholder')}
              />
              <FormErrorMessage display={!!errors?.name}>
                {t(tDynamicString(errors?.name?.message), {
                  label: t('labels.name'),
                })}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        <Button className="btn-primary" type="submit" isLoading={isLoading}>
          {t('list.button')}
        </Button>
      </form>

      <ErrorMessage display={isError} />
    </>
  )
}

export default ListCreateForm
