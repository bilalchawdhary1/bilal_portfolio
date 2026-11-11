import Link from "next/link";

export const HireMe2 = () => {
  return (
    <div className='fixed bottom-5 left-5 z-40 sm:bottom-4 sm:left-4'>
      <Link href='/contact' className='btn btn-primary shadow-lg shadow-black/10'>
        Discuss a project
      </Link>
    </div>
  );
};
