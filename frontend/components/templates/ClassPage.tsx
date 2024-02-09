"use client";
import { useQuery, useQueryClient } from "react-query";
import { ApiRequest } from "@/utils/ApiRequest";

interface Props {
    slug: string;
}

const ClassPage: React.FC<Props> = ({ slug }) => {
    const queryClient = useQueryClient();
  
    const { isLoading, isError, data, error, isFetching, refetch } = useQuery({
        queryKey: [`class${slug}`],
        queryFn: () => ApiRequest(`api/classes/${slug}`),
    });

    return (
        <>
            <h1>Test</h1>
        </>
    )
}

export default ClassPage;