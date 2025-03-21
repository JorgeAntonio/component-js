import React from 'react'
import TextFormField from './components/text-form-field'
import { MailIcon } from 'lucide-react'

export default function App() {
  return (
    <main className='container mx-auto p-4 space-y-4'>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <TextFormField labelText="Name" 
        leftIcon={<MailIcon />}
        className={"text-black text-2xl bg-red-400 rounded-2xl"} // le quitas esto y se ve bien xd --- lo agregue para ver como se puede extender las clases de tailwind
      />
    </main>
  ) 
}
