import { ClassListingItem } from "@/types/Classes";
import { ApiRequest } from '@/utils/ApiRequest';
import { useQuery } from "react-query";
import { RouteParams } from "@/types/Params"; 

// Page Template
import ClassPage from "@/components/templates/ClassPage";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <ClassPage slug={params.slug} />
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