import {useFormStatus} from 'react-dom'
export default function SubmitButton({ children, className='' }) {

  const {pending} = useFormStatus
  return (
    <button
      disabled={pending}
      type="submit"
      className={"bg-blue-500 disabled:bg-blue-300 text-white disabled:text-gray-200 py-2 px-4 block mx-auto w-full" + className}
    >
      {children}
    </button>
  );
}
