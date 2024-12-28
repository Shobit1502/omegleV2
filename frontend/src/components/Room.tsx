import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

export const Room = () => {
    const [searcParams, setSearchParams] = useSearchParams();
    const name = searcParams.get("name");

    useEffect(() => {
        // logic to init user tp the room
    }, [name])
    return <div>
        Hi {name}
    </div>
}