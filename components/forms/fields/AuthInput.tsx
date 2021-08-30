import { ErrorMessage, Field } from 'formik';

const AuthInput = ({
  label,
  name,
  error,
  type,
  value,
}: {
  label: string;
  name: string;
  error: boolean;
  type: string;
  value: string;
}) => (
  <div className="auth-field mb-4">
    <Field
      type={type}
      className={`outline-none pt-4 pb-1 px-3 border rounded text-sm ${
        error ? 'border-red-700' : 'border-gray-400'
      }`}
      name={name}
    />
    {/* <input
      className="outline-none pt-4 pb-1 px-3 border rounded mb-4 border-gray-400 text-sm"
      type="text"
    /> */}
    <label
      className={`absolute transform translate-y-3 scale-100 origin-top-left transition 
    duration-200 out-label text-sm left-3 uppercase ${
      error ? 'text-red-700' : 'text-gray-400'
    } ${value && 'filled'} `}
    >
      {label}
    </label>
    <ErrorMessage
      name={name}
      component="span"
      className="text-red-700 text-sm"
    />
  </div>
);

export default AuthInput;
