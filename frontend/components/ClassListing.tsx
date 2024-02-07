import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { ClassesResponse } from "@/types/Classes";
import { ClassIconPicker } from '@/utils/ClassIconPicker';

const ClassListing = () => {
    const { isLoading, isError, data: ClassListing, error, isFetching, refetch } = useQuery<ClassesResponse>({
		queryKey: ['classlisting']
	});

    const classes = ClassListing?.results;

    return(
        <div className="container">
            <h2 className="text-2xl mb-4 mt-8">Select Class:</h2>

            { isLoading ? (
                <div className="flex justify-center items-center">
                    <div>
                        <p className='text-center'>Loading...</p>
                        <Image
                            src="/images/loader.gif"
                            width={100}
                            height={100}
                            alt="Loading"
                        />
                    </div>
                </div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : (
                classes && classes.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {classes.map(classItem => (
                            <Link 
                                className="flex flex-col justify-center items-center p-5 rounded-md border-gray-300 border transition-colors hover:bg-emerald-300"
                                href={`class/${classItem.index}`}
                                key={classItem.index}>
                                <div className="mb-4">
                                    {ClassIconPicker(classItem.index)}
                                </div>
                                <h2 className="text-xl">{classItem.name}</h2>
                                <p>View Class</p>
                            </Link>
                        ))}
                    </div>
                )
            )}
        </div>
    )
}

export default ClassListing;