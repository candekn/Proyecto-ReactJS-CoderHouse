import { Pagination } from "react-bootstrap"

export const PaginationComponent = () => {
    
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />

            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}