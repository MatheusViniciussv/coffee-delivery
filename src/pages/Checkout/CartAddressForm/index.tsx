import { useState } from 'react';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import { FormContainer } from './styles';
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export function CartAddressForm() {

  const maskGenerator = createDefaultMaskGenerator('99999-999');

  const [value, setValue] = useState('');

  const { register, formState, setError } = useFormContext()

  return (
    <FormContainer>
      <div className='header'>
        <ErrorMessage
          errors={formState.errors}
          name='address.zipcode'
          render={({ message }) => message && <p>{message}</p>}
        />
        <MaskedInput
          {...register('address.zipcode')}
          placeholder='CEP'
          maskGenerator={maskGenerator}
          value={value}
          onChange={setValue}
          onError={(err) => setError('address.zipcode', err)}
        />
      </div>
      <div className='address-top'>
        <ErrorMessage
          errors={formState.errors}
          name='address.road'
          render={({ message }) => message && <p>{message}</p>}
        />
        <input placeholder='Rua' {...register('address.road')} onError={(err) => setError('address.road', err)} />
      </div>
      <div className='address-mid'>
        <div>
          <ErrorMessage
            errors={formState.errors}
            name='address.number'
            render={({ message }) => message && <p>{message}</p>}
          />
          <input placeholder='Número' {...register('address.number')} />
        </div>
        <div>
          <ErrorMessage
            errors={formState.errors}
            name='address.complement'
            render={({ message }) => message && <p>{message}</p>}
          />
          <input placeholder='Complemento' {...register('address.complement')} />
        </div>


      </div>
      <div className='address-bottom'>
        <div>
          <ErrorMessage
            errors={formState.errors}
            name='address.neighborhood'
            render={({ message }) => message && <p>{message}</p>}
          />
          <input placeholder='Bairro' {...register('address.neighborhood')} />
        </div>

        <div>
          <ErrorMessage
            errors={formState.errors}
            name='address.city'
            render={({ message }) => message && <p>{message}</p>}
          />
          <input placeholder='Cidade' {...register('address.city')} />
        </div>

        <div>
          <ErrorMessage
            errors={formState.errors}
            name='address.state'
            render={({ message }) => message && <p>{message}</p>}
          />
          <input placeholder='UF' {...register('address.state')} />
        </div>

      </div>
    </FormContainer >
  )
}