import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Button } from './Button';
import { Input } from './Input';

export const Form = ({ data, onChange, onSubmit }) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. user@doman.com"
          required={true}
          autoComplete="email"
          value={data.email}
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          required={true}
          autoComplete="current-password"
          value={data.password}
          onChange={onChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          label="Sign in"
          icon={
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          }
        />
      </div>
    </form>
  );
};
