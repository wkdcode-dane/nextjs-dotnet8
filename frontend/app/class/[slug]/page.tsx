import { ClassListingItem } from "@/types/Classes";
import { ApiRequest } from '@/utils/ApiRequest';

// Page Template
import ClassPage from "@/components/templates/ClassPage";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <ClassPage slug={params.slug} />
    );
}

