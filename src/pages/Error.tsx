import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Error() {
  const error = useRouteError();
  console.log(error);

  if(isRouteErrorResponse(error) && error.status === 404 ) {
    return <main className='grid min-h-[100vh] place-items-center px-8'>
      <div className='text-center'>
        <p className='text-9xl font-semibold text-primary'>
          404
        </p>
        <h1 className='my-4 text-3xl font-fold tracking-tight sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-lg leading-7'>
          sorry, no page found
       </p>
       <div className='mt-10'>
        <Button asChild size='lg' variant='secondary'>
          <Link to='/'>
            Go back home
          </Link>
        </Button>
       </div>
      </div>
    </main>
  }  
  
  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <div className='text-center'>
        <h1 className='my-4 text-3xl font-fold tracking-tight sm:text-5xl'>
          Oups
        </h1>
        <p className='mt-6 text-lg leading-7'>
          there was a problem
       </p>
       <div className='mt-10'>
        <Button asChild size='lg' variant='secondary'>
          <Link to='/'>
            Go back home
          </Link>
        </Button>
       </div>
      </div>
    </main>
  )
}

export default Error;