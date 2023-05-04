import { HelloProps } from "../types/formDataTypes"

export const Hello = ({firstName,lastName}: HelloProps) => {
    return (
        <>
        <h1>
            Good Morning, {firstName}{lastName}
        </h1>
        </>
    )
}