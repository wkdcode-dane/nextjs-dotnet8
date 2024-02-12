"use client"
import Image from 'next/image';
import { useQuery } from "@tanstack/react-query";
import { ApiRequest } from "@/utils/ApiRequest";
import { Class } from "@/types/Classes";
import { ClassIconPicker } from '@/utils/ClassIconPicker';
import ClassColourPicker from '@/utils/ClassColourPicker';

interface Props {
    slug: string;
}

const ClassPage: React.FC<Props> = ({ slug }) => {
    const { isLoading, isError, data, error, isFetching, refetch } = useQuery<Class>({
        queryKey: [`class-${slug}`],
        queryFn: () => {
            return ApiRequest(`api/classes/${slug}`);
        },
    });

    return (
        <div className="container">
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
                <>
                    <section className={`flex items-center justify-start mt-8 p-4 rounded-md ${ClassColourPicker(data?.index)?.bg}`}>
                        <div className="border border-black rounded-full p-4 mr-8">
                            {ClassIconPicker(data?.index, 100, 100, "")}
                        </div>
                        <div>
                            <h1 className="text-2xl mb-2">{data?.name}</h1>
                            <p><strong>Hit Die:</strong> {data?.hit_die}</p>
                        </div>
                    </section>
                    
                    <div className="grid gap-8 mt-4 lg:grid-cols-2">
                        <section className="p-4 rounded-md border border-grey">
                            <h2 className="text-xl">Proficiencies</h2>
                            
                            <label className="mt-4 block" htmlFor="choices">Baseline Proficiencies:</label>
                            
                            <label className="mt-4 block" htmlFor="choices">Proficiency Choices:</label>
                            <p id="choices">Select {data?.proficiency_choices[0].choose} from:</p>

                            
                        </section>
                    </div>
                </>
            )}
        </div>
    )
}

export default ClassPage;