import { useState } from 'react';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import { FormContainer } from './styles';
import { useFormContext } from 'react-hook-form'

export function CartAddressForm() {

  const maskGenerator = createDefaultMaskGenerator('99999-999');

  const [value, setValue] = useState('');

  const { register } = useFormContext()

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
      </div>
      <div className='address-top'>
        <input placeholder='Rua' {...register('address.road')} />
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