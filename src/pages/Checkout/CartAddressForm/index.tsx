import { useState } from 'react';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import { FormContainer } from './styles';
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export function CartAddressForm() {

  const maskGenerator = createDefaultMaskGenerator('99999-999');

  const [value, setValue] = useState('');

  const { register, formState: { errors } } = useFormContext()

  return (
    <FormContainer>
      <div className='header'>
        <MaskedInput
          {...register('address.zipcode')}
          placeholder='CEP'
          maskGenerator={maskGenerator}
          value={value}
          onChange={setValue}
        />
        {/* <p>{console.log(errors?.root?.message)}</p> */}
      </div>
      <div className='address-top'>
        <input placeholder='Rua' {...register('address.road')} />
        <ErrorMessage
          errors={errors}
          name='address.road'
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      <div className='address-mid'>
        <input placeholder='Número' {...register('address.number')} />
        <input placeholder='Complemento' {...register('address.complement')} />
      </div>
      <div className='address-bottom'>
        <input placeholder='Bairro' {...register('address.neighborhood')} />
        <input placeholder='Cidade' {...register('address.city')} />
        <input placeholder='UF' {...register('address.state')} />
      </div>
    </FormContainer >
  )
}