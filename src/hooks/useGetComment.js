import { useState, useEffect, useCallback } from "react";
import { getComment } from "api";
const LIMIT = 10;
export default function useGetComment() {
    const [page, setPage] = useState(1);
    const [comments, setComments] = useState([]);

    const IncreasePage = useCallback(() => {
        setPage((page) => page + 1);
    }, []);

    useEffect(() => {
        getComment(page, LIMIT).then((res) => {
            setComments((comments) => [...comments, ...res]);
        });
    }, [page]);

    return { comments, IncreasePage };
}
