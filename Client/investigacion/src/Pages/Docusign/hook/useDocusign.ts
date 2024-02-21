import { useEffect, } from "react";
import { startConnection } from "../../../hub/docusignHub";

export const useDocusign = () => {



    useEffect(() => {
        startConnection();

    }, []);

    return {

    }
}
