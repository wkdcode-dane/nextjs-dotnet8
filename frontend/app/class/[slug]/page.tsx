import { ApiFetchClass } from "@/api/ApiFetchClass";
import { ClassListingItem } from "@/types/Classes";
import { ApiRequest } from '@/utils/ApiRequest';

export default async function Page({ params }: { params: { slug: string } }) {
    console.log();
    return (
        <div>
            <ApiFetchClass slug={params?.slug} />
            <p>Post page</p>
        </div>
    );
}

export async function generateStaticParams() {
    try {
        const data = await ApiRequest("api/classes");
        const classes = data.results;

        if (!Array.isArray(classes)) {
            throw new Error('Data from the API request is not an array :(');
        }

        // Map the class items to slugs
        return classes.map((classItem : ClassListingItem) => ({
            params: {
                slug: classItem.name.toLowerCase(),
            },
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}